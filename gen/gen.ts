const fs = require("fs");
const apidocJSON = require("./apidoc.json");
const menuJSON = require("./menu.json");

// Components we don't want to generate
const BLACKLIST: string[] = ["AccordionTab", "CSSTransition"];

interface Prop {
  default: string;
  description: string;
  name: string;
  optional: boolean;
  readonly: boolean;
  type: string;
}

interface Component {
  name: string;
  description: string;
  category: string;
  methods: {
    description: string;
    values: any[];
  };
  props: {
    description: string;
    values: Prop[];
  };
  callbacks: {
    description: string;
    values: any[];
  };
}

// Create directory of stories
fs.rmSync("./stories", { recursive: true, force: true });
fs.mkdirSync("./stories");

// Load in PrimeReact menu JSON
const menu = menuJSON.data.find((i: any) => i.name === "Components").children;

// Do our best to only catch actual components
const importPaths = Object.keys(apidocJSON).filter(
  (componentName) =>
    componentName.indexOf("/") === -1 && componentName.indexOf("-") === -1
);

// Icons for generating relevant dropdowns in stories
const icons = Object.keys(apidocJSON)
  .filter((componentName) => componentName.indexOf("icons/") !== -1)
  .map((icon) => `pi pi-${icon.replace("icons/", "")}`);

// Given an apidoc prop, generate the associated storybook prop
const translateProp = (
  prop: Prop
): { control: string; description: string; options: string[] | null } => {
  const description = prop.description;
  let type = "object";
  let options = null;
  if (prop.type === "string") type = "text";
  if (prop.type === "boolean") type = "boolean";
  if (prop.type === "number") type = "number";
  if (
    prop.type.indexOf("ReactNode") !== -1 ||
    prop.type.indexOf("ReactElement") !== -1
  ) {
    type = "text";
  } else if (prop.type.indexOf(" | ") !== -1) {
    options = prop.type.replace(/\"/g, "").split(" | ");
    type = "select";
  }
  if (prop.type.indexOf("Icon") !== -1) {
    options = icons;
    type = "select";
  }
  if (type === "object") {
    console.log("need to define", prop.name, prop.type);
  }
  return { control: type, description, options };
};

// Get all components in the api doc
const components: Component[] = importPaths
  .flatMap((group) => apidocJSON[group].components)
  .filter((component) => !!component)
  .flatMap((components) => {
    return Object.keys(components).map((name) => ({
      ...components[name],
      // Add in the category
      category: menu.find((category: any) =>
        category.children.find((comp: any) => comp.name === name)
      )?.name,
      // Add in the name
      name,
    }));
  })
  // Filter out components that don't have a menu category
  .filter((component) => !!component.category)
  // Filter out components that are in the blacklist
  .filter((component) => BLACKLIST.indexOf(component.name) === -1);

components.forEach((component) => {
  // Generate the configurable storybook props
  const argTypes: { [key: string]: any } = component.props.values.reduce(
    (obj, prop) => ({
      ...obj,
      [prop.name]: translateProp(prop),
    }),
    {}
  );

  // Generate some defaults
  const argInit = {
    ...(argTypes.label ? { label: component.name } : {}),
    ...(argTypes.placeholder ? { placeholder: component.name } : {}),
    ...(!argTypes.placeholder && !argTypes.options && argTypes.value
      ? { value: 0 }
      : {}),
    ...(argTypes.onLabel ? { onLabel: "Yes" } : {}),
    ...(argTypes.offLabel ? { offLabel: "No" } : {}),
    ...(argTypes.unstyled ? { unstyled: false } : {}),
    ...(argTypes.activeIndex ? { activeIndex: 0 } : {}),
    ...(argTypes.options
      ? {
          options: [
            { label: "PrimeReact Rocks!", value: "1" },
            { label: "StoryBook Rocks!", value: "2" },
          ],
          optionLabel: "label",
          optionValue: "value",
        }
      : {}),
    ...(argTypes.model
      ? {
          model: [
            {
              label: "Update",
              icon: "pi pi-refresh",
            },
            {
              label: "Delete",
              icon: "pi pi-times",
            },
            {
              label: "React Website",
              icon: "pi pi-external-link",
            },
            {
              label: "Upload",
              icon: "pi pi-upload",
            },
          ],
        }
      : {}),
  };

  // Generate the storybook file
  const file = `
    import { ${
      component.name
    } } from 'primereact/${component.name.toLowerCase()}';

    export default {
      title: '${component.category}/${component.name}',
      component: ${component.name},
      parameters: {
        layout: 'centered',
      },
      argTypes: ${JSON.stringify(argTypes)},
    };

    export const Default = {
      args: ${JSON.stringify(argInit)},
    };
    
  `;

  // Write into the storybook folder
  fs.writeFileSync(`./stories/${component.name}.stories.jsx`, file);
});

// Enable this to keep Node alive for --inspect
// setTimeout(() => {}, 100000000);
