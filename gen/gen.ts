const fs = require("fs");
const apidocJSON = require("./apidoc.json");
const menuJSON = require("./menu.json");

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

// Create directory
fs.rmSync("./stories", { recursive: true, force: true });
fs.mkdirSync("./stories");

const menu = menuJSON.data.find((i: any) => i.name === "Components").children;

console.log("menu", menu);

// console.log(apidoc);
const importPaths = Object.keys(apidocJSON).filter(
  (componentName) =>
    componentName.indexOf("/") === -1 && componentName.indexOf("-") === -1
);

const icons = Object.keys(apidocJSON)
  .filter((componentName) => componentName.indexOf("icons/") !== -1)
  .map((icon) => `pi pi-${icon.replace("icons/", "")}`);

console.log(icons);

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

const components: Component[] = importPaths
  .flatMap((group) => apidocJSON[group].components)
  .filter((component) => !!component)
  .flatMap((components) => {
    return Object.keys(components).map((name) => ({
      ...components[name],
      category: menu.find((category: any) =>
        category.children.find((comp: any) => comp.name === name)
      )?.name,
      name,
    }));
  })
  .filter((component) => !!component.category)
  .filter((component) => BLACKLIST.indexOf(component.name) === -1);

console.log(components);

// Add file

components.forEach((component) => {
  const argTypes = component.props.values.reduce(
    (obj, prop) => ({
      ...obj,
      [prop.name]: translateProp(prop),
    }),
    {}
  );

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
      args: {
        primary: true,
        label: 'Button',
      },
    };
    
  `;
  fs.writeFileSync(`./stories/${component.name}.stories.jsx`, file);
});

setTimeout(() => {}, 100000000);
