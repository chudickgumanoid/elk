<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    style="min-width: 452px; max-width: 600px; width: 100%"
    :style="[
      !isShowTitle
        ? 'padding: 12px 0 24px !important'
        : 'padding: 0px 0 24px !important',
    ]"
  >
    <template #close>
      <div
        @click="showModal = false"
        class="cursor-pointer"
      >
        <m-icon
          name="close"
          size="16"
        />
      </div>
    </template>

    <template
      v-if="isShowHeader"
      #header
    >
      <div class="flex items-center gap-2 !ml-6 pt-4 pr-2 text-balance">
        <m-icon
          v-if="icon"
          :name="icon"
          size="48"
        />
        <m-text
          variant="h2"
          bold="500"
        >
          {{ title }}
        </m-text>
      </div>
    </template>

    <template #default>
      <n-scrollbar
        v-if="!hasFooter"
        style="
          max-height: 80dvh;
          padding: 0 0 0 0 !important;
          margin: 0 0 0 0px !important;
        "
        :style="
          !isShowBody
            ? 'max-height: 80dvh; padding: 0 24px 0 24px !important; margin: 24px 24px 0 0px !important;'
            : 'max-height: 80dvh; padding: 0 0 0 0 !important; margin: 0 0 0 0px !important;'
        "
        trigger="none"
        ref="scrollbarRef"
      >
        <slot />
      </n-scrollbar>

      <div
        v-else
        class="modal-body"
      >
        <n-scrollbar
          style="
            max-height: 70dvh;
            padding: 0 24px 0 24px !important;
            margin: 24px 24px 0 0px !important;
          "
          trigger="none"
          ref="scrollbarRef"
        >
          <slot />
        </n-scrollbar>

        <div class="px-6 pt-6">
          <slot name="footer" />
        </div>
      </div>
    </template>
  </n-modal>
</template>

<script setup>
import { computed, nextTick, ref, useSlots, watch } from "vue";

defineProps({
  title: String,
  icon: {
    type: String,
    default: null,
  },
  isShowBody: {
    type: Boolean,
    default: false,
  },
  isShowHeader: {
    type: Boolean,
    default: true,
  },
});

const showModal = defineModel("show");

const slots = useSlots();
const scrollbarRef = ref(null);
const hasFooter = computed(() => !!slots.footer);

watch(showModal, async (val) => {
  if (val) {
    await nextTick();
    scrollbarRef.value?.scrollTo({ top: 0 });
  }
});
</script>

<style scoped></style>
