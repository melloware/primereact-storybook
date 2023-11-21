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
    .filter((component) => !!component)
    .flatMap((c) => c);
console.log(components);
// Add file
// groups.forEach((componentName) => {
//   fs.writeFileSync(`./stories/${componentName}.stories.js`, "Hello");
// });
setTimeout(() => { }, 100000000);
