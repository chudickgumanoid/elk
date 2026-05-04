<template>
  <n-form-item
    :path="path"
    ref="formItemRef"
  >
    <template #label>
      <span class="inline-flex items-center gap-1">
        {{ label }}
        <span
          v-if="required"
          class="text-red-500"
        >
          *
        </span>
        <n-popover
          v-if="hint"
          trigger="hover"
          style="max-width: 333px; text-align: center; font-size: 12px"
        >
          <template #trigger>
            <m-icon
              name="question"
              size="12"
              class="cursor-pointer"
            />
          </template>
          <span class="whitespace-pre-line">{{ hint }}</span>
        </n-popover>
      </span>
    </template>

    <div class="flex flex-col w-full">
      <slot />

      <div
        v-if="hintBottom"
        class="text-[#79747E] flex gap-1 items-center w-full text-xs mt-1"
      >
        <div>
          <m-icon
            name="exclamation-mark"
            size="16"
          />
        </div>
        <div class="whitespace-pre-line">{{ hintBottom }}</div>
      </div>
    </div>
  </n-form-item>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  label: { type: String, required: true },
  path: { type: String, required: true },
  hint: { type: String, default: "" },
  hintBottom: { type: String, default: "" },
  required: { type: Boolean, default: false },
});

const formItemRef = ref(null);
</script>
