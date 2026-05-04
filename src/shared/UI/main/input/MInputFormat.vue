<template>
  <n-input v-model:value="value">
    <template #suffix>
      <slot name="suffix" />
    </template>

    <template #prefix>
      <slot name="prefix" />
    </template>

    <template #addon-before>
      <slot name="addon-before" />
    </template>

    <template #addon-after>
      <slot name="addon-after" />
    </template>
  </n-input>
</template>

<script setup>
import { Mask } from "maska";
import { onMounted } from "vue";

const props = defineProps({
  mask: {
    type: String,
    required: true,
  },
  tokens: {
    type: Object,
    default: () => ({}),
  },
  type: {
    type: String,
    default: "default",
    validator: (v) => ["default", "tag"].includes(v),
  },
});

const mask = new Mask({ mask: props.mask, tokens: props.tokens });

const unMaskedValue = defineModel("unMaskedValue");

const value = defineModel("value", {
  set(val) {
    if (typeof val !== "string") {
      val = "";
    }

    if (props.type === "tag") {
      val = val.trim();
      val = `@${val.replace(/^@+/, "")}`;
      val = val.charAt(0) + val.slice(1).replace(/\W/g, "");
    }

    const masked = mask.masked(val);

    unMaskedValue.value = mask.unmasked(masked);

    return masked;
  },
});

onMounted(() => {
  value.value = mask.masked(value.value || "");
});
</script>
