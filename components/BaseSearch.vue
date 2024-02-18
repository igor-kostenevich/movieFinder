<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  fieldClass: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
})

const classes = computed(() => {
  return {
    'border-red-600 text-red-600 focus:border-red-400': props.error,
  }
})

</script>
<template>
  <div class="flex flex-col w-1/2 m-auto text-slate-200">
    <label
      v-if="label"
      :class="{ 'text-red-dark': error }"
      class="mb-1 text-lg"
    >
      {{ label }}
    </label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="bg-slate-500 border-slate-500 text-sm rounded shadow-inset-md border-2 focus:border-2 mb-1 h-9 px-3 py-2 text-slate-200"
      :class="[classes, fieldClass]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div class="inline-flex h-3.5">
      <span
        v-if="error"
        class="text-xs text-red"
        >{{ error }}</span
      >
    </div>
  </div>
</template>