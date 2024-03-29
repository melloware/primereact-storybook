<div align="center">
<img src="https://raw.githubusercontent.com/melloware/primereact-storybook/main/images/primereact.svg" height="70" ><img src="https://raw.githubusercontent.com/melloware/primereact-storybook/main/images/plus-sign.svg" height="70" ><img src="https://raw.githubusercontent.com/melloware/primereact-storybook/main/images/storybook.svg" height="70">

# PrimeReact Storybook
</div>

**If you like this project, please consider supporting me ❤️**

[![GitHub Sponsor](https://img.shields.io/badge/GitHub-FFDD00?style=for-the-badge&logo=github&logoColor=black)](https://github.com/sponsors/melloware)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/mellowareinc)

## Starting the project

```bash
npm install
npm run gen
npm run storybook
```

## Key files

`./gen/gen.ts` <= Generator

`./.storybook/preview.jsx` <= enable/disable unstyled mode

## Publish Site

```bash
npm run storybook-build

git commit
```

The new files in `/docs` will be published automatically to GitHub Pages at https://melloware.github.io/primereact-storybook
