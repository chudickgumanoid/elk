export const registerComponents = (app) => {
  const components = [
    import.meta.glob("@/shared/UI/main/*.vue", { eager: true }),
    import.meta.glob("@/shared/UI/main/confirm/*.vue", { eager: true }),
    import.meta.glob("@/shared/UI/main/icon/*.vue", { eager: true }),
    import.meta.glob("@/shared/UI/main/input/*.vue", { eager: true }),
    import.meta.glob("@/shared/UI/main/button/*.vue", { eager: true }),
    import.meta.glob("@/shared/UI/observer/*.vue", { eager: true }),
  ];

  components.forEach((el) => {
    Object.entries(el).forEach(([path, component]) => {
      const componentName = path
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");

      app.component(componentName, component.default);
    });
  });
};
