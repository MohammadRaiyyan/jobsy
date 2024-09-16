<script setup lang="ts">
import CompanyInfo from '@/components/Auth/SingUp/CompanyInfo.vue'
</script>

<template>
  <div class="container mx-auto h-full">
    <div class="grid grid-cols-2 gap-5 border rounded h-full overflow-hidden">
      <div class="bg-primary"></div>
      <div class="w-full p-5 flex items-center justify-center">
        <CompanyInfo />
        <!-- <CredentialInfo /> -->
      </div>
    </div>
  </div>
</template>
