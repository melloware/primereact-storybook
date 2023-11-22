const fs = require("fs");
const apidocJSON = require("./apidoc.json");
const menuJSON = require("./menu.json");

const BLACKLIST: string[] = [
  'AccordionTab',
  'CSSTransition'
]

interface Component {
  name: string,
  description: string,
  category: string,
  methods: {
    description: string,
    values: any[]
  },
  props: {
    description: string,
    values: any[]
  },
  callbacks: {
    description: string,
    values: any[]
  }
}

// Create directory
fs.rmSync("./stories", { recursive: true, force: true });
fs.mkdirSync("./stories");

const menu = menuJSON.data.find((i: any) => i.name === 'Components').children;

console.log('menu', menu);

// console.log(apidoc);
const importPaths = Object.keys(apidocJSON).filter(
  (componentName) => componentName.indexOf("/") === -1 && componentName.indexOf("-") === -1
);

const components: Component[] = importPaths
  .flatMap((group) => apidocJSON[group].components)
  .filter((component) => !!component)
  .flatMap(components => {
    return Object.keys(components).map(name => ({
      ...components[name],
      category: menu.find((category: any) => 
        category.children.find((comp: any) => comp.name === name)
      )?.name, 
      name
    }))
  })
  .filter(component => !!component.category)
  .filter(component => BLACKLIST.indexOf(component.name) === -1);


console.log(components);

// Add file

components.forEach((component) => {
  const file = `
    import { ${component.name} } from 'primereact/${component.name.toLowerCase()}';

    export default {
      title: '${component.category}/${component.name}',
      component: ${component.name},
      parameters: {
        layout: 'centered',
      },
      argTypes: {
        backgroundColor: { control: 'color' },
      },
    };

    export const Default = {
      args: {
        primary: true,
        label: 'Button',
      },
    };
  `;
  fs.writeFileSync(`./stories/${component.name}.stories.js`, file);
});

setTimeout(() => {}, 100000000);
