<template>
  <div class="grid grid-cols-[auto_1fr] gap-4">
    <div class="font-semibold text-base text-nowrap text-accentBlack">
      {{ rate }}
    </div>
    <n-rate
      :value="rate"
      readonly
    >
      <m-icon name="star" />
    </n-rate>
  </div>
</template>

<script setup>
defineProps({
  rate: String,
});
</script>

<style scoped></style>
