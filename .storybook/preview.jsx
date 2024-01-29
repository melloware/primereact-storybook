import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import { useEffect } from "react";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "./style.css";
// import shadcn from './shadcn';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story, ctx) => {
      let theme = ctx.globals.theme.split(" - ")[0].toLowerCase().trim();
      let mode = ctx.globals.colorMode.toLowerCase().trim();
      const color = ctx.globals.theme.split(" - ")[1]?.toLowerCase().trim();

      if (theme === "material design") theme = "md";
      if (theme === "material design condensed") theme = "mdc";
      if (theme === "bootstrap") theme = "bootstrap4";

      if (theme === "mira") mode = null;
      if (theme === "nano") mode = null;

      useEffect(() => {
        const linkID = "style-link";
        let el = document.getElementById(linkID);
        if (!el) {
          el = document.createElement("link");
          el.type = "text/css";
          el.rel = "stylesheet";
          el.id = "style-link";
          document.head.appendChild(el);
        }
        const themeGen = [theme, mode, color].filter((i) => !!i).join("-");
        el.href = `https://primereact.org/themes/${themeGen}/theme.css`;
      }, [ctx]);

      return (
        <PrimeReactProvider
          value={
            {
              // unstyled: true,
              // pt: shadcn
            }
          }
        >
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </PrimeReactProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      disable: true,
    },
    options: {
      storySort: {
        order: ["Form", "Button", ["Home", "Login", "Admin"], "Components"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    colorMode: {
      description: "Switch between light and dark",
      defaultValue: "light",
      toolbar: {
        title: "Color Mode",
        items: [
          { value: "light", icon: "circle", title: "Light Mode" },
          { value: "dark", icon: "circlehollow", title: "Dark Mode" },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: "PrimeReact Theme",
      defaultValue: "Lara - Cyan",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        items: [
          "Lara - Cyan",
          "Lara - Green",
          "Lara - Blue",
          "Lara - Indigo",
          "Lara - Purple",
          "Lara - Amber",
          "Lara - Teal",
          "Lara - Pink",
          "Material Design - Indigo",
          "Material Design - Deep Purple",
          "Material Design Condensed - Indigo",
          "Material Design Condensed - Deep Purple",
          "Bootstrap - Blue",
          "Bootstrap - Purple",
          "Soho",
          "Viva",
          "Fluent",
          "Mira",
          "Nano",
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
