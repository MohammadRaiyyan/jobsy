<script setup lang="ts">
const props = defineProps({
  label: {
    type: String
  },
  for: {
    type: String
  }
})
</script>

<template>
  <label :for="props.for" class="font-medium text-sm">{{ label }}</label>
</template>
