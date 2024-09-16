<script setup lang="ts">
import NavHeader from '@/components/Layout/NavHeader.vue'
import { RouterView } from 'vue-router'
import FooterBar from './components/Layout/FooterBar.vue'
</script>

<template>
  <NavHeader />
  <main class="h-[calc(100vh-48px)] pt-5 overflow-auto flex flex-col">
    <div class="flex-1">
      <RouterView />
    </div>
    <FooterBar />
  </main>
</template>
