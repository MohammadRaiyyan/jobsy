<script setup lang="ts">
import { defineProps } from 'vue'
type CustomButtonProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'link'
    | 'success-secondary'
    | 'accent-ghost'
    | 'tertiary'
  size?: 'large' | 'medium' | 'small'
  block?: boolean
}
const props = defineProps<CustomButtonProps>()
const size = props.size || 'medium'
const variant = props.variant || 'primary'

const variantClasses = {
  primary: 'bg-primary text-primary-foreground  border-primary  hover:bg-primary/90',
  secondary: 'bg-background text-background-foreground  hover:bg-secondary/80',
  tertiary: 'bg-secondary text-secondary-foreground border-secondary  hover:bg-secondary/80',
  success: 'bg-accent text-accent-foreground border  hover:bg-accent/80',
  'success-secondary': 'bg-transparent text-accent   hover:bg-accent/10 ',
  'accent-ghost': 'bg-accent/10 text-accent   hover:bg-accent/20 ',
  danger: 'bg-destructive text-destructive-foreground border  hover:bg-destructive/80',
  link: 'bg-transparent text-primary  hover:bg-primary/10 hover:underline'
}

const sizeClasses = {
  large: 'px-6 py-3 text-lg h-12',
  medium: 'px-4 py-2 text-md h-10',
  small: 'px-2 py-1 text-sm h-9'
}
</script>

<template>
  <button
    v-bind="$attrs"
    :class="[
      'font-medium box-border flex items-center justify-center gap-2 rounded border  transition-all',
      variantClasses[variant],
      sizeClasses[size],
      `${block ? 'w-full' : 'w-max'}`
    ]"
  >
    <slot></slot>
  </button>
</template>
