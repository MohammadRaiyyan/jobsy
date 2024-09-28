<script setup lang="ts">
import { IconSelector } from '@tabler/icons-vue'
import { defineProps } from 'vue'

type OptionType = {
  label: string
  value: string
}
type InputProps = {
  size?: 'large' | 'medium' | 'small'
  options: OptionType[]
}
const props = defineProps<InputProps>()
const size = props.size || 'medium'
const sizeClass = {
  large: 'px-6 py-3 pr-10 text-lg h-12',
  medium: 'px-4 py-2 pr-8 text-md h-10',
  small: 'px-2 py-1 pr-6 text-sm h-9'
}
</script>

<template>
  <div
    class="relative rounded-lg bg-background text-secondary-foreground border box-border border-input"
  >
    <select
      :class="[
        'relative  appearance-none bg-background rounded-lg   font-normal placeholder:text-muted-foreground outline-none focus:outline-none focus:ring-2 transition-all focus:ring-primary w-full',
        sizeClass[size]
      ]"
      v-bind="$attrs"
    >
      <option v-for="option in props.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <!-- Custom caret icon -->
    <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <IconSelector size="16" />
    </span>
  </div>
</template>
