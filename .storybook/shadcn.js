export default {
  button: {
    root: ({ props, context }) => ({
      className: [
        {
          "bg-red-500": true,
        },
      ],
    }),
    // [
    //   "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2",
    //   !props.size ? "text-sm" : "",
    //   props.rounded ? "rounded-full" : "rounded-md",
    //   props.size === "small" ? "text-xs" : "",
    //   props.size === "large" ? "text-xl" : "",
    //   !props.severity
    //     ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
    //     : "",
    //   props.severity === "secondary"
    //     ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
    //     : "",
    //   props.severity === "danger"
    //     ? "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
    //     : "",
    //   // props.loading || props.disabled ? "pointer-events-none" : "",
    //   // props.link ? "text-blue-600" : "text-red-500",
    // ].join(" "),
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
