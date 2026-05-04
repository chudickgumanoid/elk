<template>
  <component
    :is="tag"
    :class="[typographyClass, colorClass]"
    :style="boldStyle"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "p",
    validator: (value) =>
      [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "p",
        "overline",
        "lead",
        "small",
        "muted",
      ].includes(value),
  },
  component: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "gray", "red", "white", "blue"].includes(value),
  },
  bold: {
    type: Number,
    default: undefined,
    validator: (value) => value >= 100 && value <= 900,
  },
});

const tag = computed(() => {
  if (props.component) return props.component;

  if (["h1", "h2", "h3", "h4", "h5"].includes(props.variant)) {
    return props.variant;
  }

  return "p";
});

const typographyClass = computed(() => {
  return `typography-${props.variant}`;
});

const colorClass = computed(() => {
  return `typography-color-${props.color}`;
});
const boldStyle = computed(() => {
  return props.bold ? { fontWeight: props.bold } : {};
});
</script>

<style scoped>
@reference "@/app/style/main.css";

.typography-h1 {
  font-size: 48px;
  font-weight: 500;
  line-height: 100%;
}

.typography-h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.typography-h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}

.typography-h4 {
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
}

.typography-h5 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.typography-p {
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
}

.typography-overline {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 16px;
}

.typography-lead {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}

.typography-small {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.typography-muted {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.typography-color-default {
  @apply text-text;
}

.typography-color-gray {
  color: #79747e;
}

.typography-color-primary {
  @apply text-primary;
}
</style>
