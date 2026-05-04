import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { buildPageTitle } from "../utils/router";

export const usePageTitle = () => {
  const route = useRoute();
  const { t } = useI18n();

  const pageTitle = computed(() => {
    if (route.meta.title) {
      const keys = route?.meta?.title?.split("|");

      return buildPageTitle(...keys.map((key) => t(key)));
    }

    return "";
  });

  return { pageTitle };
};
