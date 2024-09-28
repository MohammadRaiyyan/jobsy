<script setup lang="ts">
import NavHeader from '@/components/Layout/NavHeader.vue'
import { RouterView } from 'vue-router'
import FooterBar from './components/Layout/FooterBar.vue'
import NavLinks from './components/Layout/NavLinks.vue'
</script>

<template>
  <div>
    <NavHeader />
    <main
      class="relative h-screen pt-[76px] overflow-auto flex flex-col justify-between pb-14 md:pb-0"
    >
      <div class="flex-1 container mx-auto">
        <RouterView />
      </div>
      <FooterBar />
    </main>
    <div
      class="md:hidden fixed bottom-0 w-full h-14 bg-background text-card-foreground border-t flex items-center justify-between"
    >
      <NavLinks />
    </div>
  </div>
</template>
