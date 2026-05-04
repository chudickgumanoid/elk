<template>
  <div class="header">
    <div class="container flex justify-between items-center h-full mx-auto px-4">
      <div class="flex items-center gap-4">
        <LogoComponent to="/" />
        <h1 class="text-xl font-bold">{{ t("title") }}</h1>
      </div>

      <div class="flex gap-4 items-center">
        <div
          @click="switchLanguage('ru')"
          class="cursor-pointer"
          :class="{ 'text-primary font-bold': currentLanguage === 'ru' }"
        >
          Рус
        </div>
        <div class="text-gray-400">|</div>
        <div
          @click="switchLanguage('kz')"
          class="cursor-pointer"
          :class="{ 'text-primary font-bold': currentLanguage === 'kz' }"
        >
          Каз
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { LogoComponent } from "../logo";
import { useStorage } from "@vueuse/core";
import { LOCAL_STORAGE } from "@/shared/utils/constants";

const { locale, t } = useI18n();
const langStore = useStorage(LOCAL_STORAGE.lang, "ru");

const currentLanguage = computed(() => {
  return locale.value;
});

function switchLanguage(lang) {
  locale.value = lang;
  langStore.value = lang;
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 64px;
  background: white;
  border-bottom: 1px solid #eee;
}
</style>
