<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue'
import { IconSend } from '@tabler/icons-vue'
</script>

<template>
  <section>
    <!-- Page Title -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Job Details Column -->
      <div class="lg:col-span-2 bg-card text-card-foreground p-6 rounded-xl space-y-5">
        <div>
          <h2 class="text-xl font-medium">Frontend Developer</h2>
        </div>
        <div>
          <h2 class="text-lg font-medium mb-4">Job Description</h2>
          <p class="leading-relaxed text-secondary-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lacus a magna
            volutpat, ac luctus arcu elementum.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-medium mt-8 mb-4">Responsibilities</h3>
          <ul class="list-disc pl-5 text-secondary-foreground">
            <li>Responsible for developing web applications using Vue.js.</li>
            <li>Collaborate with the team to design UI/UX components.</li>
            <li>Ensure application functionality and optimize performance.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-medium mt-8 mb-4">Requirements</h3>
          <ul class="list-disc pl-5 text-secondary-foreground">
            <li>Experience with Vue.js and Tailwind CSS.</li>
            <li>Strong understanding of JavaScript and web development.</li>
            <li>Good problem-solving skills and attention to detail.</li>
          </ul>
        </div>
      </div>

      <!-- Apply and Company Details Column -->
      <div class="bg-card text-card-foreground p-6 rounded-xl space-y-5 flex flex-col h-max">
        <div class="flex-1">
          <h2 class="text-lg font-medium mb-4">Company Details</h2>
          <p class="text-secondary-foreground mb-2">
            <strong class="text-foreground font-medium mr-2">Company:</strong> Tech Solutions Inc.
          </p>
          <p class="text-secondary-foreground mb-2">
            <strong class="text-foreground font-medium mr-2">Location:</strong> New York, USA
          </p>
          <p class="text-secondary-foreground mb-2">
            <strong class="text-foreground font-medium mr-2">Website:</strong>
            <a href="#" class="text-primary hover:underline">www.techsolutions.com</a>
          </p>
        </div>

        <div class="flex-1">
          <h2 class="text-lg font-medium mb-4">Contact Information</h2>
          <p class="text-secondary-foreground mb-2">
            <strong class="text-foreground font-medium mr-2">Email:</strong> hr@techsolutions.com
          </p>
          <p class="text-secondary-foreground">
            <strong class="text-foreground font-medium mr-2">Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
        <div>
          <CustomButton block>
            <IconSend size="16" />
            Apply for this Job
          </CustomButton>
        </div>
      </div>
    </div>
  </section>
</template>
