<script setup lang="ts">
defineProps({
  title: {
    type: String
  }
})
</script>
<template>
  <h2 class="font-semibold mb-4">{{ title }}</h2>
</template>
