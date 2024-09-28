<script setup lang="ts">
import JobListings from '@/components/JobListings/JobListings.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
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
  <section>
    <!-- Search Section -->
    <section
      class="relative bg-card border text-white lg:py-16 rounded-xl overflow-hidden md:h-[300px] h-max"
    >
      <div
        class="container mx-auto md:px-6 px-5 py-8 h-full w-full text-center flex flex-col items-center justify-center"
      >
        <h1 class="lg:text-4xl sm:text-2xl text-xl font-bold mb-4">Find Your Dream Job</h1>
        <p class="mb-8">
          Explore thousands of job opportunities and start your career journey today!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center w-full md:w-max">
          <TextInput
            :icon="IconBriefcase"
            iconPosition="left"
            type="text"
            placeholder="Job Title"
            size="large"
            block
          />
          <TextInput
            :icon="IconLocation"
            iconPosition="left"
            type="text"
            placeholder="Location"
            size="large"
            block
          />
          <div class="md:w-max w-full">
            <CustomButton size="large" block
              ><span><IconSearch size="20" /></span>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
    <!-- Filters and Sorting Section -->
    <div class="mt-8 flex justify-between flex-wrap items-center bg-card border rounded-lg p-5">
      <!-- Filters -->
      <div class="flex flex-wrap gap-2">
        <SelectInput :options="jobTypeOptions" />
        <div class="flex flex-wrap gap-2">
          <TextInput :icon="IconCash" iconPosition="left" type="number" placeholder="Min Salary" />
          <TextInput :icon="IconCash" iconPosition="left" type="number" placeholder="Max Salary" />
        </div>

        <div>
          <CustomButton variant="tertiary">
            <IconFilter size="16" />
            Apply Filters
          </CustomButton>
        </div>
      </div>

      <!-- Sorting -->
      <div>
        <SelectInput :options="jobSortyByOptions" />
      </div>
    </div>
    <!-- Recent Jobs Section -->
    <section class="mt-8">
      <SectionTitle title="Recent Jobs" />
      <JobListings />
    </section>
    <!-- All Jobs Section -->
    <section class="mt-8">
      <SectionTitle title="All Jobs" />
      <JobListings />
    </section>
  </section>
</template>
