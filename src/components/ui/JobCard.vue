<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import { IconBriefcase, IconCalendar, IconCash, IconLocation } from '@tabler/icons-vue'
import { defineProps } from 'vue'
type JobType = {
  id: string
  title: string
  company: {
    name: string
    avatar: string
  }
  type: string
  location: string
  postedAt: string
  salary: string
  description: string
}
type Job = {
  job: JobType
}
const props = defineProps<Job>()
</script>

<template>
  <div class="bg-card border rounded-xl md:p-6 p-5 max-w-max text-left">
    <!-- Company Logo -->
    <div class="flex items-center mb-4">
      <img
        :src="props.job.company.avatar || `https://placehold.co/40x40.png`"
        alt="Company Logo"
        class="w-12 h-12 rounded object-cover mr-4"
      />
      <div>
        <!-- Job Title -->
        <h3 class="font-medium">
          {{ props.job.title }}
        </h3>
        <!-- Company Name -->
        <p class="text-muted-foreground text-sm">{{ props.job.company.name }}</p>
      </div>
    </div>
    <!-- Location and Job Type -->
    <div
      class="flex justify-between flex-wrap gap-2 text-muted-foreground text-sm mb-4 font-normal"
    >
      <span class="flex gap-1 items-center">
        <span><IconLocation size="16" /></span>{{ props.job.location }}</span
      >
      <span class="flex gap-1 items-center">
        <span>
          <IconBriefcase size="16" />
        </span>
        {{ props.job.type }}</span
      >
      <span class="flex gap-1 items-center">
        <span><IconCalendar size="16" /></span>
        {{ props.job.postedAt }}</span
      >
      <span class="flex gap-1 items-center">
        <span>
          <IconCash size="16" />
        </span>
        {{ props.job.salary }}</span
      >
    </div>

    <!-- Description/Details -->
    <p class="mb-4 text-secondary-foreground">
      {{ props.job.description }}
    </p>
    <!-- Buttons -->
    <!-- Buttons -->
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 justify-between">
      <!-- Apply Button (Optional) -->
      <RouterLink to="/apply" class="w-full">
        <CustomButton :block="true"> Apply Now </CustomButton>
      </RouterLink>
      <!-- View Details Button -->
      <RouterLink :to="`/job/${props.job.id}`" class="w-full">
        <CustomButton variant="tertiary" :block="true"> View Details </CustomButton>
      </RouterLink>
    </div>
  </div>
</template>
