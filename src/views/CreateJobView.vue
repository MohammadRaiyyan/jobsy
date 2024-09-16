<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import SelectInput from '@/components/ui/SelectInput.vue'
import TextInput from '@/components/ui/TextInput.vue'
import { ref } from 'vue'

const form = ref({
  title: '',
  companyName: '',
  companyAvatar: '',
  type: '',
  location: '',
  postedAt: '',
  salary: '',
  description: ''
})

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form Submitted:', form.value)
}
const jobTypeOptions = [
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
const locationOptions = [
  {
    label: 'Remote',
    value: 'remote'
  },
  {
    label: 'Hybrid',
    value: 'hybrid'
  },
  {
    label: 'On-site',
    value: 'on-site'
  }
]
</script>
<!-- or posting duration, we can offer more flexible options:

7 days (1 week)
14 days (2 weeks)
30 days (1 month)
60 days (2 months)
90 days (3 months)
Custom (with a date picker) -->
<!-- add preview button -->
<!-- add mode: negotitable or salay min max -->
<!-- add category -->
<!-- add application instruction: how can candiate apply -->
<!-- posting duration -->
<!-- location can be onsight -->
<template>
  <main class="container mx-auto h-full mb-12">
    <div class="bg-card border rounded-lg space-y-5 p-5">
      <div class="py-6 text-center space-y-3">
        <h2 class="font-semibold text-2xl text-center">Attract Top Talent to Your Team</h2>
        <p class="text-muted-foreground">
          Create a compelling job listing to find your ideal candidate
        </p>
      </div>
      <form @submit.prevent="submitForm" class="space-y-5 max-w-4xl mx-auto">
        <!-- Job Title -->

        <div class="flex items-center gap-5">
          <div class="flex flex-col space-y-1.5 flex-1">
            <label for="title" class="font-medium text-sm">Title</label>
            <TextInput
              type="text"
              id="title"
              placeholder="Software Engineer II"
              v-model="form.title"
              required
            />
          </div>
          <div class="flex flex-col space-y-1.5 flex-1">
            <label for="salary" class="font-medium text-sm">Categories</label>
            <TextInput
              type="number"
              placeholder="e.g. Engineering"
              id="salary"
              v-model="form.salary"
              required
            />
          </div>
        </div>

        <div class="flex items-center gap-5">
          <!-- Job Type -->
          <div class="flex flex-col space-y-1.5 flex-1">
            <label for="type" class="font-medium text-sm">Type</label>
            <SelectInput :options="jobTypeOptions" v-model="form.type" />
          </div>
          <!-- Location -->
          <div class="flex flex-col space-y-1.5 flex-1">
            <label for="location" class="font-medium text-sm">Location</label>
            <SelectInput id="location" :options="locationOptions" v-model="form.location" />
          </div>
        </div>

        <!-- Salary -->
        <div class="flex items-center gap-5">
          <div class="flex flex-col space-y-1.5 flex-1">
            <label for="salary" class="font-medium text-sm">Min Salary</label>
            <TextInput
              type="number"
              placeholder="e.g. $50,000"
              id="salary"
              v-model="form.salary"
              required
            />
          </div>
          <div class="flex flex-col space-y-1.5 flex-1">
            <label for="salary" class="font-medium text-sm">Max Salary</label>
            <TextInput
              type="number"
              id="salary"
              placeholder="e.g. $80,000"
              v-model="form.salary"
              required
            />
          </div>
        </div>

        <!-- Summary -->
        <div class="flex flex-col space-y-1.5">
          <label for="description" class="font-medium text-sm">Summary</label>
          <textarea
            class="border border-input bg-background rounded py-1 px-3 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all focus:ring-primary"
            id="description"
            v-model="form.description"
            rows="2"
            required
            placeholder="A short summary about the job"
          ></textarea>
        </div>
        <!-- Description -->
        <div class="flex flex-col space-y-1.5">
          <label for="description" class="font-medium text-sm">Description</label>
          <textarea
            class="border border-input bg-background rounded py-1 px-3 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all focus:ring-primary"
            id="description"
            v-model="form.description"
            rows="6"
            required
            placeholder="Write requirement and elaborated description"
          ></textarea>
        </div>
        <!-- Instruction -->
        <div class="flex flex-col space-y-1.5">
          <label for="description" class="font-medium text-sm">Application Instruction</label>
          <textarea
            class="border border-input bg-background rounded py-1 px-3 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all focus:ring-primary"
            id="description"
            v-model="form.description"
            rows="2"
            required
            placeholder="Tell candidate how can they apply for this job"
          ></textarea>
        </div>

        <div class="flex items-center justify-end gap-3">
          <!-- Submit Button -->
          <CustomButton type="button" variant="secondary">Preview</CustomButton>
          <CustomButton type="submit">Submit Job</CustomButton>
        </div>
      </form>
    </div>
  </main>
</template>
