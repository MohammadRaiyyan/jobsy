<script setup lang="ts">
import { defineProps, type Component } from 'vue'

type InputProps = {
  size?: 'large' | 'medium' | 'small'
  iconPosition?: 'left' | 'right'
  icon?: Component
  block?: boolean
}

const props = defineProps<InputProps>()
const size = props.size || 'medium'
const iconPosition = props.iconPosition || 'right'

const sizeClass = {
  large: 'px-6 py-3 text-lg h-12',
  medium: 'px-4 py-2 text-md h-10',
  small: 'px-2 py-1 text-sm h-9'
}
const iconSize = {
  large: 20,
  medium: 18,
  small: 16
}
</script>

<template>
  <div
    :class="[
      'relative border box-border border-input bg-background text-secondary-foreground rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 transition-all focus-within:ring-primary',
      props.block ? 'w-full' : 'w-auto'
    ]"
  >
    <span
      v-if="icon && iconPosition === 'left'"
      class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground"
    >
      <component :is="icon" :size="iconSize[size]" />
    </span>

    <input
      :class="[
        'min-w-60  w-full font-normal bg-background placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground/60  outline-none ',
        sizeClass[size],
        icon && iconPosition === 'left' ? 'pl-10' : '',
        icon && iconPosition === 'right' ? 'pr-10' : ''
      ]"
      v-bind="$attrs"
    />

    <span
      v-if="icon && iconPosition === 'right'"
      class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground"
    >
      <component :is="icon" :size="iconSize[size]" />
    </span>
  </div>
</template>
