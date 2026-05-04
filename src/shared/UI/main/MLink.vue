<template>
  <div
    class="green-field link cursor-pointer w-fit flex gap-2 custom-underline"
    :class="[type]"
  >
    <slot />
    <component :is="icon" />
  </div>
</template>

<script setup>
defineProps({
  icon: Object,
  type: String,
});
</script>

<style scoped>
.link {
  position: relative;
}
.error {
  color: #d03050;
}
.custom-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1.2px;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  pointer-events: none;
}
</style>
