<script setup lang="ts">
import sideIllustration from '@/assets/illus.svg'
import CompanyInfo from '@/components/Auth/SingUp/CompanyInfo.vue'
</script>

<template>
  <section class="bg-card text-card-foreground border rounded-xl h-full">
    <div class="grid lg:grid-cols-2 grid-cols-1 h-full overflow-hidden">
      <div class="bg-primary lg:flex hidden dark:bg-primary-light items-center justify-center p-5">
        <img :src="sideIllustration" alt="" srcset="" />
      </div>
      <div class="w-full flex items-center justify-center">
        <CompanyInfo />
        <!-- <CredentialInfo /> -->
      </div>
    </div>
  </section>
</template>
