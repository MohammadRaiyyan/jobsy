<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import SelectInput from '@/components/ui/SelectInput.vue'
import TextInput from '@/components/ui/TextInput.vue'
import { reactive } from 'vue'

const form = reactive({
  companyName: '',
  companySize: '',
  avatar: '',
  address: {
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  },
  phone: '',
  website: '',
  description: ''
})

const companySize = [
  {
    label: '10 to 50',
    value: '10,50'
  },
  {
    label: '50 to 100',
    value: '50,100'
  },
  {
    label: '100 to 200',
    value: '100,200'
  }
]

function submitForm() {}
</script>

<template>
  <div class="max-w-3xl w-full p-6 space-y-10">
    <div class="space-y-3 text-center">
      <h1 class="text-2xl font-semibold text-center">Complete Your Company Profile</h1>
      <p class="text-muted-foreground">This information will be used when publishing jobs</p>
    </div>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div class="flex flex-col space-y-1.5">
          <label for="companySize" class="block text-sm font-medium">Company Size</label>
          <SelectInput id="companySize" :options="companySize" v-model="form.companySize" />
        </div>

        <div class="flex flex-col space-y-1.5">
          <label for="avatar" class="block text-sm font-medium">Avatar URL</label>
          <TextInput type="url" id="avatar" v-model="form.avatar" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col space-y-1.5">
          <label class="block text-sm font-medium">Address</label>
          <TextInput
            type="text"
            id="street"
            v-model="form.address.street"
            placeholder="Address"
            required
          />
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div class="flex flex-col space-y-1.5">
            <label class="block text-sm font-medium">City</label>
            <TextInput
              type="text"
              id="city"
              v-model="form.address.city"
              placeholder="City"
              required
            />
          </div>

          <div class="flex flex-col space-y-1.5">
            <label class="block text-sm font-medium">State</label>
            <TextInput
              type="text"
              id="state"
              v-model="form.address.state"
              placeholder="State"
              required
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <label class="block text-sm font-medium">Postal Code</label>
            <TextInput
              type="text"
              id="postalCode"
              v-model="form.address.postalCode"
              placeholder="Postal Code"
              required
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <label class="block text-sm font-medium">Country</label>
            <TextInput
              type="text"
              id="country"
              v-model="form.address.country"
              placeholder="Country"
              required
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-1.5">
        <label for="phone" class="block text-sm font-medium">Phone</label>
        <TextInput type="tel" id="phone" v-model="form.phone" />
      </div>
      <div class="flex flex-col space-y-1.5">
        <label for="website" class="block text-sm font-medium">Website</label>
        <TextInput type="url" id="website" v-model="form.website" />
      </div>
      <div class="flex flex-col space-y-1.5">
        <label for="description" class="block text-sm font-medium">About Company </label>
        <textarea
          id="description"
          v-model="form.description"
          class="block w-full px-3 py-2 border rounded focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          rows="4"
        ></textarea>
      </div>
      <div class="flex justify-end">
        <CustomButton type="submit"> Submit </CustomButton>
      </div>
    </form>
  </div>
</template>
