"use strict";
const fs = require("fs");
const apidoc = require("./apidoc.json");
// Create directory
fs.rmSync("./stories", { recursive: true, force: true });
fs.mkdirSync("./stories");
// console.log(apidoc);
const groups = Object.keys(apidoc).filter((componentName) => componentName.indexOf("/") === -1);
const components = groups
    .flatMap((group) => apidoc[group].components)
    .filter((component) => !!component);
console.log(components);
// Add file
const file = `
  import { Button } from 'primereact/button';

  export default {
    title: 'Example/Button',
    component: Button,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };


`;
groups.forEach((componentName) => {
    fs.writeFileSync(`./stories/${componentName}.stories.js`, file);
});
setTimeout(() => { }, 100000000);
