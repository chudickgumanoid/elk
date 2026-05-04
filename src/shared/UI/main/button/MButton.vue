<template>
  <button
    class="button"
    :class="[{ inverted: type === 'inverted' }]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "default",
    validator: (v) => ["default", "inverted"].includes(v),
  },
});
</script>

<style scoped>
.button {
  cursor: pointer;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 8px;
  transition: all 0.3s ease;
  outline: none;
}

.button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.button:hover {
  background-color: #f9f9f9;
  border-color: #cccccc;
}

.button:focus {
  border-color: #69636e;
  animation: none;
}

.button:focus:not(:active) {
  animation: focusAnimation 0.5s forwards;
}

.button.inverted {
  background-color: #f9f9f9;
  border-color: #f9f9f9;
  color: #191d23;
}

.button.inverted:hover {
  background-color: #191d23;
  border-color: #191d23;
  color: #f9f9f9;
}

@keyframes focusAnimation {
  0% {
    box-shadow: 0 0 0 2px #79747e3a;
  }
  100% {
    box-shadow: none;
    border-color: #eeeeee;
  }
}
</style>
