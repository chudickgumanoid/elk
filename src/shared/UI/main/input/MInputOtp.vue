<template>
  <div class="otp-input-container">
    <div class="otp-wrapper">
      <input
        v-model="otpValues[index]"
        v-for="(digit, index) in length"
        @input="handleInput(index)"
        @keydown="handleKeydown($event, index)"
        @paste="handlePaste"
        type="text"
        maxlength="1"
        class="otp-digit"
        :key="index"
        ref="inputs"
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 4,
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
  onlyNumber: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "submit"]);
const inputs = ref([]);
const otpValues = ref(Array.from({ length: props.length }).fill(""));

const isComplete = computed(() => {
  return otpValues.value.every((value) => value !== "");
});

const emitValue = () => {
  emit("update:modelValue", otpValues.value.join(""));
};

const isValidInput = (value) => {
  if (props.onlyNumber) {
    return /^\d$/.test(value);
  }

  return /\w/.test(value);
};

const handleInput = (index) => {
  // Проверяем валидность введенного символа
  if (!isValidInput(otpValues.value[index])) {
    otpValues.value[index] = "";

    return;
  }

  // Убедимся, что введен только один символ
  otpValues.value[index] = otpValues.value[index].slice(0, 1);

  // Переход к следующему полю
  if (otpValues.value[index] && index < props.length - 1) {
    inputs.value[index + 1].focus();
  }

  emitValue();
};

const handleKeydown = (event, index) => {
  // Обработка Enter
  if (event.key === "Enter" && isComplete.value) {
    event.preventDefault();
    emit("submit");

    return;
  }

  // Если нажата цифра или буква, и есть существующее значение,
  // заменяем его новым значением
  if (event.key.length === 1) {
    if (!isValidInput(event.key)) {
      event.preventDefault();

      return;
    }

    event.preventDefault();
    otpValues.value[index] = event.key;

    if (index < props.length - 1) {
      inputs.value[index + 1].focus();
    }

    emitValue();

    return;
  }

  // Обработка backspace
  if (event.key === "Backspace") {
    if (otpValues.value[index]) {
      otpValues.value[index] = "";
      emitValue();
    } else if (index > 0) {
      otpValues.value[index - 1] = "";
      inputs.value[index - 1].focus();
      emitValue();
    }
  }

  // Обработка стрелок
  if (event.key === "ArrowLeft" && index > 0) {
    inputs.value[index - 1].focus();
  }

  if (event.key === "ArrowRight" && index < props.length - 1) {
    inputs.value[index + 1].focus();
  }
};

const handlePaste = (event) => {
  event.preventDefault();
  const pastedData = event.clipboardData.getData("text");
  const digits = pastedData.slice(0, props.length).split("");

  digits.forEach((digit, index) => {
    if (index < props.length && isValidInput(digit)) {
      otpValues.value[index] = digit;
    }
  });

  emitValue();
};

onMounted(() => {
  if (props.autoFocus) {
    inputs.value[0].focus();
  }
});
</script>

<style scoped>
.otp-input-container {
  display: flex;
}

.otp-wrapper {
  display: flex;
  gap: 8px;
}

.otp-digit {
  width: 60px;
  height: 60px;
  border: 2px solid #eeeeee;
  border-radius: 8px;
  text-align: center;
  font-size: 32px;
  outline: none;
}

.otp-digit:focus {
  border: 2px solid #c9c7cb;
}
</style>
