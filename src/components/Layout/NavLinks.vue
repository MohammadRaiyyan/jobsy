<script setup lang="ts">
import { IconBriefcase, IconCategoryPlus, IconHome } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="flex items-center gap-5 w-full md:w-max px-4 md:px-0">
    <li class="flex-1">
      <RouterLink
        class="hover:bg-primary-light hover:text-primary rounded p-1 px-2 flex items-center gap-2 w-max"
        active-class="text-primary font-medium pointer-events-none "
        to="/"
      >
        <IconHome size="18" />
        Home</RouterLink
      >
    </li>
    <li class="flex-1">
      <RouterLink
        active-class="text-primary font-medium pointer-events-none"
        class="hover:bg-primary-light hover:text-primary rounded p-1 px-2 flex items-center gap-2 w-max"
        to="/jobs"
      >
        <IconBriefcase size="18" />
        Jobs
      </RouterLink>
    </li>
    <li class="flex-1">
      <RouterLink
        active-class="text-primary font-medium pointer-events-none"
        class="hover:bg-primary-light hover:text-primary rounded p-1 px-2 flex items-center gap-2 w-max"
        to="/add-job"
      >
        <IconCategoryPlus size="18" />
        Post Job</RouterLink
      >
    </li>
  </ul>
</template>
