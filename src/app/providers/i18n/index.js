import { MESSAGES } from "@/shared/i18n/messages";
import { LOCAL_STORAGE } from "@/shared/utils/constants";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem(LOCAL_STORAGE.lang) || "ru",
  fallbackLocale: "ru",
  messages: MESSAGES,
});

window.$t = i18n.global.t.bind(i18n.global);

export default i18n;
