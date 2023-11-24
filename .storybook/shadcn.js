import { classNames } from "primereact/utils";

export default {
  button: {
    root: ({ props, context }) => ({
      className: classNames(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2",
        {
          "text-xs": props.size === "small",
          "text-xl": props.size === "large",
        },
        {
          "text-sm": props.size,
          "rounded-full": props.rounded,
          "rounded-md": !props.rounded,
        },
        {
          "bg-primary text-primary-foreground shadow hover:bg-primary/90":
            !props.severity,
          // "bg-[#26dcdc] text-white shadow-sm hover:bg-[#26dcdc]/80":
          //   props.severity === "info",
          // "bg-[#427c42] text-white shadow-sm hover:bg-[#427c42]/80":
          //   props.severity === "success",
          // "bg-[#ea89ea] text-white shadow-sm hover:bg-[#ea89ea]/80":
          //   props.severity === "help",
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80":
            props.severity === "secondary",
          // "bg-[#dc8126] text-secondary-foreground shadow-sm hover:bg-[#dc8126]/80":
          //   props.severity === "warning",
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90":
            props.severity === "danger",
        }
        // props.loading || props.disabled ? "pointer-events-none" : "",
        // props.link ? "text-blue-600" : "text-red-500",
      ),
    }),
    label: "",
    icon: "",
  },
  // panel: {
  //   header: "bg-primary border-primary",
  //   content: "border-primary text-lg text-primary-700",
  //   title: "bg-primary text-xl",
  //   toggler: "bg-primary hover:bg-primary-reverse",
  // },
};
