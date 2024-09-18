<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import TextInput from '@/components/ui/TextInput.vue'
import { reactive, ref } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
  portfolio: '',
  position: '',
  salary: '',
  startDate: '',
  resume: null,
  coverLetter: null,
  personalStatement: '',
  experience: '',
  jobTitle: '',
  employer: '',
  jobDescription: '',
  skills: '',
  certifications: '',
  referenceName: '',
  referenceContact: '',
  relationship: '',
  jobSource: '',
  relocate: false,
  workArrangement: ''
})

const step = ref(0)
const jobLocationOptions = [
  { label: 'Remote', value: 'remote' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'On Site', value: 'onsite' }
]
function handleFileUpload(event, field) {
  form[field] = event.target.files[0]
}
function submitForm() {
  // Handle form submission logic here (validation, API call, etc.)
  console.log('Form Submitted', form)
}

function handlePrevious() {
  step.value = step.value - 1
}
function handleNext() {
  step.value = step.value + 1
}
</script>

<template>
  <section class="container mx-auto h-full flex items-center justify-center">
    <form
      @submit.prevent="submitForm"
      class="space-y-5 max-w-2xl w-full border rounded-lg p-6 shadow-sm bg-card text-card-foreground"
    >
      <div class="text-left space-y-1.5">
        <h1 class="font-medium text-lg">Job Application</h1>
        <p class="text-sm text-muted-foreground">
          Please complete all fields below to submit your application for the role
        </p>
      </div>

      <!-- Personal Information -->
      <section v-if="step === 0" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label for="firstName">First Name</label>
            <TextInput v-model="form.firstName" id="firstName" type="text" required />
          </div>
          <div class="space-y-1.5">
            <label for="lastName">Last Name</label>
            <TextInput v-model="form.lastName" id="lastName" type="text" required />
          </div>
        </div>

        <div class="space-y-1.5">
          <label for="email">Email Address</label>
          <TextInput v-model="form.email" id="email" type="email" required />
        </div>
        <div class="space-y-1.5">
          <label for="phone">Phone Number</label>
          <TextInput v-model="form.phone" id="phone" type="tel" required />
        </div>
      </section>

      <!-- Job Details -->
      <section v-if="step === 1" class="space-y-4">
        <div class="space-y-1.5">
          <label for="linkedin">LinkedIn Profile</label>
          <TextInput v-model="form.linkedin" id="linkedin" type="url" />
        </div>

        <div class="space-y-1.5">
          <label for="portfolio">Portfolio Website</label>
          <TextInput v-model="form.portfolio" id="portfolio" type="url" />
        </div>
        <div class="space-y-1.5">
          <label for="position">Position Applying For</label>
          <TextInput v-model="form.position" id="position" type="text" required />
        </div>
      </section>

      <!-- Resume and Cover Letter -->
      <section v-if="step === 2" class="space-y-4">
        <div class="space-y-1.5">
          <label for="experience">Years of Experience</label>
          <TextInput v-model="form.experience" id="experience" type="number" min="0" required />
        </div>

        <div class="space-y-1.5">
          <label for="jobTitle">Most Recent Job Title</label>
          <TextInput v-model="form.jobTitle" id="jobTitle" type="text" required />
        </div>

        <div class="space-y-1.5">
          <label for="employer">Most Recent Employer</label>
          <TextInput v-model="form.employer" id="employer" type="text" required />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label for="salary">Desired Salary</label>
            <TextInput v-model="form.salary" id="salary" type="number" min="0" required />
          </div>
          <div class="space-y-1.5">
            <label for="startDate">Available Start Date</label>
            <TextInput v-model="form.startDate" id="startDate" type="date" required />
          </div>
        </div>
        <div class="space-y-1.5">
          <label for="resume">Upload Resume</label>
          <TextInput
            @change="handleFileUpload($event, 'resume')"
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        <div class="space-y-1.5 flex flex-col">
          <label for="personalStatement">Personal Statement / Motivation</label>
          <textarea
            class="border rounded"
            v-model="form.personalStatement"
            id="personalStatement"
          ></textarea>
        </div>
      </section>

      <div class="flex items-center justify-between">
        <!-- Submit Button -->
        <CustomButton v-if="step >= 1" type="button" variant="secondary" @click="handlePrevious"
          >Previous</CustomButton
        >
        <CustomButton v-if="step < 2" type="button" @click="handleNext">Next</CustomButton>
        <CustomButton v-if="step === 2" type="submit">Submit Application</CustomButton>
      </div>
    </form>
  </section>
</template>
