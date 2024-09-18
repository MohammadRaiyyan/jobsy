<script setup lang="ts">
import JobListings from '@/components/JobListings/JobListings.vue'
</script>

<template>
  <section class="container mx-auto space-y-8">
    <div class="space-y-1">
      <h2 class="text-lg font-medium">My Postings</h2>
      <p class="text-secondary-foreground text-sm">
        Manage Job Postings and Monitor Candidate Responses
      </p>
    </div>
    <JobListings />
  </section>
</template>
