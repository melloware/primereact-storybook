const fs = require("fs");
const apidoc = require("./apidoc.json");

const BLACKLIST: string[] = [
  'AccordionTab',
  'CSSTransition'
]

interface Component {
  name: string,
  description: string,
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

// console.log(apidoc);
const importPaths = Object.keys(apidoc).filter(
  (componentName) => componentName.indexOf("/") === -1 && componentName.indexOf("-") === -1
);

const components: Component[] = importPaths
  .flatMap((group) => apidoc[group].components)
  .filter((component) => !!component)
  .flatMap(components => {
    return Object.keys(components).map(name => ({
      ...components[name],
      name
    }))
  })
  .filter(component => BLACKLIST.indexOf(component.name) === -1);


console.log(components);

// Add file

components.forEach((component) => {
  const file = `
    import { ${component.name} } from 'primereact/${component.name.toLowerCase()}';

    export default {
      title: '${component.name}',
      component: ${component.name},
      parameters: {
        layout: 'centered',
      },
      argTypes: {
        backgroundColor: { control: 'color' },
      },
    };

    export const Primary = {
      args: {
        primary: true,
        label: 'Button',
      },
    };
  `;
  fs.writeFileSync(`./stories/${component.name}.stories.js`, file);
});

setTimeout(() => {}, 100000000);
