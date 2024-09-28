<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import TextInput from '@/components/ui/TextInput.vue'
</script>

<template>
  <section class="flex items-center justify-center h-full">
    <div
      class="bg-card text-card-foreground border rounded-xl max-w-md w-full mx-auto p-6 py-8 space-y-10"
    >
      <div class="text-center space-y-4">
        <h2 class="font-semibold text-2xl">Login</h2>
        <p class="text-muted-foreground">
          Log in to publish job postings and find qualified candidates quickly
        </p>
      </div>
      <form class="space-y-5">
        <div class="space-y-1.5">
          <label for="email">Email</label>
          <TextInput name="email" id="email" placeholder="e.g. company@gmail.com" />
        </div>
        <div class="space-y-1.5">
          <label for="password">Password</label>
          <TextInput name="password" id="password" placeholder="********" />
          <span class="text-primary underline transition-all text-sm flex items-center justify-end"
            ><RouterLink to="/forgot-password"> Forgot Password? </RouterLink></span
          >
        </div>
        <div>
          <CustomButton block> Login </CustomButton>
        </div>
      </form>
      <div class="text-center">
        <h4 class="text-sm">
          Don’t have an account?
          <span class="text-primary underline transition-all">
            <RouterLink to="/signup"> Sign Up </RouterLink>
          </span>
        </h4>
      </div>
    </div>
  </section>
</template>
