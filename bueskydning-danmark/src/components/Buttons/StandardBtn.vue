
<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const BtnVariants = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'button--secondary';
    case 'danger':
      return 'button--danger';
    default:
      return 'button--primary';
  }
});
</script>

<template>
  <button
    :class="['base-button', BtnVariants]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>



<style scoped>
.base-button {
  font-size: 1rem;
  font-weight: 600;
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: var(--BtnTextColor);

}

.button--primary {
  background-color: var(--BtnColor);
}

.button--primary:hover {
  background-color: var(--BtnColor-hover);
}

.button--secondary {
  background-color: #f3f4f6;
  color: #111827;
}

.button--secondary:hover {
  background-color: #e5e7eb;
}

.button--danger {
  background-color: #dc2626;
  color: white;
}

.button--danger:hover {
  background-color: #b91c1c;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
