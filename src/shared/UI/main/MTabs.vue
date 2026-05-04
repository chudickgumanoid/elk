<template>
  <n-tabs v-bind="props.tabsSchema.options_tabs">
    <n-tab-pane
      v-for="tab in props.tabsSchema.tabs"
      v-bind="tab.options_tab"
      :name="tab.name"
      :tab="tab.tab"
      :tab-props="tab.tabProps"
      :key="tab.name"
    >
      <component :is="tab.components" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import { onMounted, ref, toRef } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  tabsSchema: Array,
});
const route = useRoute();
const router = useRouter();

const tabsToRef = toRef(props.tabsSchema);

const tabRef = ref(route.query.tab || tabsToRef.value.tabs[0].name);

tabsToRef.value.options_tabs.value = tabRef;

onMounted(() => {
  if (!("onUpdateValue" in tabsToRef.value.options_tabs)) {
    tabsToRef.value.options_tabs.onUpdateValue = function (val) {
      router.replace(
        Object.assign({}, route, {
          query: { ...route.query, tab: val },
        })
      );
      tabRef.value = val;
    };
  }
});
</script>

<style scoped></style>
