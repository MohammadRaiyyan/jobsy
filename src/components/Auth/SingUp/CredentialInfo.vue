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
  <div class="max-w-sm w-full p-6 border rounded-lg shadow-sm space-y-8">
    <div class="space-y-3 text-center">
      <h1 class="text-2xl font-semibold text-center">Create an Account</h1>
      <p class="text-muted-foreground">Start by providing your login details</p>
    </div>
    <form @submit.prevent="submitForm" class="space-y-5">
      <div class="flex flex-col space-y-1.5">
        <label for="email" class="block text-sm font-medium">Email</label>
        <TextInput type="email" id="email" v-model="form.email" required />
      </div>
      <div class="flex flex-col space-y-1.5">
        <label for="avatar" class="block text-sm font-medium">Password</label>
        <TextInput type="password" id="avatar" v-model="form.password" />
      </div>
      <div class="flex justify-end">
        <CustomButton type="submit" block>Continue </CustomButton>
      </div>
    </form>
    <div class="text-center">
      <h4 class="text-sm">
        Have an account?
        <span class="text-primary underline transition-all">
          <RouterLink to="/login"> Login </RouterLink>
        </span>
      </h4>
    </div>
  </div>
</template>
