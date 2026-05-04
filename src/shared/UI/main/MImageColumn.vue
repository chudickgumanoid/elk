<template>
  <div class="flex gap-1 items-center">
    <div
      @click.stop
      class="h-6 w-6 flex items-center justify-center rounded"
    >
      <n-image
        :src="photo"
        width="24"
        height="24"
        objectFit="contain"
      />
    </div>
    <div>
      <m-text variant="p">
        {{ title }}
      </m-text>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  photo: String,
});
</script>

<style scoped></style>
