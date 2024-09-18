<script setup lang="ts">
import sideIllustration from '@/assets/illus.svg'
import CompanyInfo from '@/components/Auth/SingUp/CompanyInfo.vue'
</script>

<template>
  <div class="container mx-auto h-full">
    <div class="grid grid-cols-2 border rounded h-full overflow-hidden">
      <div class="bg-primary dark:bg-primary/10 flex items-center justify-center p-5">
        <img :src="sideIllustration" alt="" srcset="" />
      </div>
      <div class="w-full p-5 flex items-center justify-center">
        <CompanyInfo />
        <!-- <CredentialInfo /> -->
      </div>
    </div>
  </div>
</template>
