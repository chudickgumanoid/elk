<template>
  <m-text
    v-bind="$attrs"
    bold="500"
    class="flex justify-between gap-4"
  >
    {{ label }}
    <m-text
      variant="span"
      bold="400"
    >
      {{ value }}
    </m-text>
  </m-text>
</template>

<script setup>
defineProps({
  label: String,
  value: String,
});
</script>

<style scoped></style>
