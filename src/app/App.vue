<template>
  <AppLayout>
    <router-view />
  </AppLayout>
  <VueQueryDevtools />
</template>

<script setup>
import AppLayout from "@/widgets/layouts/AppLayout.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>
