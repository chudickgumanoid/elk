<template>
  <div v-if="error">
    <div class="flex flex-col items-center gap-4 text-center">
      <div
        status="404"
        :title="t('errors.not_found')"
        :description="t('errors.taxpayer_not_found')"
      />
      <m-text
        variant="h3"
        bold="500"
      >
        {{ t("errors.taxpayer_not_found") }}
      </m-text>

      <n-button
        @click="router.push('/')"
        type="primary"
        size="large"
      >
        {{ t("actions.back_to_home") }}
      </n-button>
    </div>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script setup>
import { onErrorCaptured, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const error = ref(false);
const router = useRouter();
const { t } = useI18n();

onErrorCaptured(() => {
  error.value = true;
  return false;
});
</script>
