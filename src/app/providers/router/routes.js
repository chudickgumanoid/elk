export default [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "AppLayoutClient",
      title: "Главная",
    },
    component: () => import("@/pages/home/ui/HomePage.vue"),
  },
];
