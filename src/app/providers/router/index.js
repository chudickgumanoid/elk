import { createRouter, createWebHistory } from "vue-router";
import i18n from "../i18n";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  if (to.meta.titleKey) {
    document.title = i18n.global.t(to.meta.titleKey);
  } else if (typeof to.meta.title === "string") {
    document.title = to.meta.title;
  }
});

router.onError((error, to) => {
  if (
    error.message.includes("Failed to fetch dynamically imported module") ||
    error.message.includes("Importing a module script failed")
  ) {
    window.location = to.fullPath;
  }
});

export default router;
