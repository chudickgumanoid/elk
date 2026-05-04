export const homeRoutes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "AppLayoutClient",
      title: "Главная",
    },
    component: () => import("./ui/HomePage.vue"),
  },
];
