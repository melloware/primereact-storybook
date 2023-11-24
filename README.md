# primereact-storybook

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
