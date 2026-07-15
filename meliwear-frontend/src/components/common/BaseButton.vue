<template>
  <button :class="['base-button', variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary', // 'primary' | 'outline'
    },
  },
  emits: ['click'],
};
</script>

<style scoped>
.base-button {
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.primary {
  background-color: var(--color-button);
  color: white;
}

.primary:hover {
  background-color: var(--color-button-hover);
}

.outline {
  background-color: transparent;
  color: var(--color-button);
  border: 1.5px solid var(--color-button);
}

.outline:hover {
  background-color: var(--color-button);
  color: white;
}
</style>
