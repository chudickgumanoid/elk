<template>
  <n-popover trigger="hover">
    <template #trigger>
      <slot />
    </template>

    <m-text variant="small">{{ hint }}</m-text>
  </n-popover>
</template>

<script setup>
defineProps({
  hint: String,
});
</script>
