import { useRoute, useRouter } from "vue-router";

export const useUpdateQueryParams = () => {
  const router = useRouter();
  const route = useRoute();

  function updateQueryParams(param, value) {
    const newQuerys = { ...route.query };

    if (value) {
      newQuerys[param] = value;
    } else {
      delete newQuerys[param];
    }

    router.replace({
      path: route.path,
      query: newQuerys,
    });
  }

  return {
    updateQueryParams,
  };
};
