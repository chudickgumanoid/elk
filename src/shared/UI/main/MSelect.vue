<template>
  <n-select
    v-bind="$attrs"
    v-model:value="value"
    v-model:show="show"
    :options="options"
    size="large"
    ref="selectRef"
  >
    <template #arrow>
      <n-icon
        color="#191D23"
        size="24"
        class="transition-transform"
        :class="{ 'rotate-180': show }"
      >
        <m-icon name="arrow-down" />
      </n-icon>
    </template>
  </n-select>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  placeholder: { type: String },
});

const { t } = useI18n();

const value = defineModel("value");
const options = defineModel("options");
const getPlaceholder = computed(() =>
  props.placeholder ? props.placeholder : t("choose")
);

const selectRef = ref(null);
const show = ref(false);

const updatePlaceholder = () => {
  const inputContentEl = selectRef.value?.$el.querySelector(
    ".n-base-selection-input__content"
  );

  if (inputContentEl) {
    if (!value.value) {
      inputContentEl.textContent = getPlaceholder.value;
    } else {
      const selectedOption = options.value.find(
        (option) => option.value === value.value
      );

      inputContentEl.textContent = selectedOption
        ? selectedOption.label
        : value.value;
    }
  }
};

onMounted(() => {
  updatePlaceholder();
});

watch(value, () => {
  updatePlaceholder();
});
</script>

<style scoped>
:deep(.slide-left-enter-active),
:deep(.slide-left-leave-active) {
  transition: all 0.3s ease;
}
:deep(.slide-left-enter-from),
:deep(.slide-left-leave-to) {
  position: absolute;
  opacity: 0;
}
:deep(.slide-left-enter-from) {
  transform: rotate(180deg);
}
:deep(.slide-left-leave-to) {
  transform: rotate(0deg);
}
</style>
