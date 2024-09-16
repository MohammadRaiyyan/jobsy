<script setup lang="ts">
import heroBg from '@/assets/people-working.jpg'
import JobListings from '@/components/JobListings/JobListings.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import SelectInput from '@/components/ui/SelectInput.vue'
import TextInput from '@/components/ui/TextInput.vue'
import { IconBriefcase, IconCash, IconFilter, IconLocation, IconSearch } from '@tabler/icons-vue'

const jobTypeOptions = [
  {
    label: 'All Job Types',
    value: ''
  },
  {
    label: 'Full-time',
    value: 'full-time'
  },
  {
    label: 'Part-time',
    value: 'part-time'
  },
  {
    label: 'Contract',
    value: 'contract'
  },
  {
    label: 'Internship',
    value: 'internship'
  }
]
const jobSortyByOptions = [
  { label: 'Sort By Latest', value: 'latest' },
  { label: 'Sort By Salary', value: 'salary' }
]
</script>

<template>
  <div class="container mx-auto px-4">
    <!-- Search Section -->
    <section class="relative bg-primary/40 text-white py-16 rounded overflow-hidden">
      <img
        :src="heroBg"
        alt="Hero Banner"
        class="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div class="relative container mx-auto px-4 py-8 text-center">
        <h1 class="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p class="text-xl mb-8">
          Explore thousands of job opportunities and start your career journey today!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <TextInput
            :icon="IconBriefcase"
            iconPosition="left"
            type="text"
            placeholder="Job Title"
            size="large"
          />
          <TextInput
            :icon="IconLocation"
            iconPosition="left"
            type="text"
            placeholder="Location"
            size="large"
          />
          <div>
            <CustomButton size="large"
              ><span><IconSearch size="20" /></span>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
    <!-- Filters and Sorting Section -->
    <div class="mt-8 flex justify-between items-center">
      <!-- Filters -->
      <div class="flex space-x-4">
        <SelectInput :options="jobTypeOptions" />
        <div class="flex space-x-2">
          <TextInput :icon="IconCash" iconPosition="left" type="number" placeholder="Min Salary" />
          <TextInput :icon="IconCash" iconPosition="left" type="number" placeholder="Max Salary" />
        </div>

        <CustomButton variant="accent-ghost">
          <IconFilter size="16" />
          Apply Filters
        </CustomButton>
      </div>

      <!-- Sorting -->
      <div>
        <SelectInput :options="jobSortyByOptions" />
      </div>
    </div>
    <!-- Recent Jobs Section -->
    <section class="mt-8">
      <h2 class="text-xl font-medium mb-4">Recent Jobs</h2>
      <JobListings />
    </section>
    <!-- All Jobs Section -->
    <section class="mt-8">
      <h2 class="text-xl font-medium mb-4">All Jobs</h2>
      <JobListings />
    </section>
  </div>
</template>
