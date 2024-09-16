<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import TextInput from '@/components/ui/TextInput.vue'
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: ''
})
function submitForm() {}
</script>

<template>
  <div class="bg-card text-card-foreground max-w-sm w-full p-5 border rounded">
    <h1 class="text-2xl font-semibold mb-6 text-center">Register</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="flex flex-col space-y-1.5">
        <label for="email" class="block text-sm font-medium">Email</label>
        <TextInput type="email" id="email" v-model="form.email" required />
      </div>
      <div class="flex flex-col space-y-1.5">
        <label for="avatar" class="block text-sm font-medium">Password</label>
        <TextInput type="password" id="avatar" v-model="form.password" />
      </div>
      <div class="flex justify-end">
        <CustomButton type="submit" block>Signup </CustomButton>
      </div>
    </form>
  </div>
</template>
