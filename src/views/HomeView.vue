<script setup lang="ts">
import JobListings from '@/components/JobListings/JobListings.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { IconCategoryPlus, IconSearch } from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="text-center flex items-center justify-center rounded overflow-hidden md:h-[400px] h-max"
  >
    <div
      class="bg-card border w-full h-full py-12 px-5 flex flex-col items-center justify-center rounded-xl"
    >
      <h1 class="lg:text-4xl sm:text-2xl text-xl font-semibold mb-4">
        The Ultimate Hub for Job Seekers and Employers
      </h1>
      <p class="mb-8">Find Your Dream Job or Post Your Next Great Opportunity</p>
      <div class="grid md:grid-cols-2 grid-cols-1 justify-center gap-4 w-full md:w-max">
        <RouterLink to="/jobs" class="md:w-max w-full flex items-center justify-center"
          ><CustomButton block size="large" class="flex items-center gap-2">
            <IconSearch size="20" />
            Find Job</CustomButton
          ></RouterLink
        >
        <RouterLink to="/post-job" class="md:w-max w-full"
          ><CustomButton block variant="secondary" size="large" class="flex items-center gap-2">
            <IconCategoryPlus size="18" />
            Post Job</CustomButton
          ></RouterLink
        >
      </div>
    </div>
  </section>

  <!-- Job Search Bar -->
  <!-- <section class="search-bar bg-white py-8">
      <div class="container mx-auto flex flex-col items-center">
        <input
          type="text"
          placeholder="Search for jobs, locations, or companies"
          class="input-field mb-4"
        />
        <button class="btn btn-primary">Search</button>
      </div>
    </section> -->

  <!-- Featured Jobs -->
  <section class="text-left rounded mt-8">
    <SectionTitle title="Featured Jobs" />
    <JobListings />
  </section>

  <!-- How It Works -->
  <!-- <section class="how-it-works bg-white py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">How It Works</h2>
        <div class="flex flex-col md:flex-row justify-around items-center">
          <div class="step bg-gray-100 p-4 rounded shadow-md">
            <h3 class="text-xl font-semibold">Step 1</h3>
            <p class="text-gray-700">Create a profile and set your preferences.</p>
          </div>
          <div class="step bg-gray-100 p-4 rounded shadow-md">
            <h3 class="text-xl font-semibold">Step 2</h3>
            <p class="text-gray-700">Browse job listings and apply with ease.</p>
          </div>
          <div class="step bg-gray-100 p-4 rounded shadow-md">
            <h3 class="text-xl font-semibold">Step 3</h3>
            <p class="text-gray-700">Track your applications and get hired.</p>
          </div>
        </div>
      </div>
    </section> -->

  <!-- Success Stories -->
  <!-- <section class="success-stories bg-gray-100 py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Success Stories</h2>
        <div class="flex flex-col md:flex-row justify-around items-center">
          <!-- Testimonial -->
  <!-- <div class="testimonial bg-white p-4 rounded shadow-md">
            <p class="text-gray-700">
              "I found my dream job through this platform. The process was smooth and efficient!"
            </p>
            <span class="font-semibold">Jane Doe</span>
          </div> -->
  <!-- Repeat testimonial for more stories -->
  <!-- </div>
      </div>
    </section> -->

  <!-- Job Categories -->
  <!-- <section class="job-categories bg-white py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Job Categories</h2>
        <div class="flex flex-wrap justify-center gap-4"> -->
  <!-- Category Card -->
  <!-- <div class="category-card bg-gray-100 p-4 rounded shadow-md">
            <h3 class="text-xl font-semibold">Category Name</h3>
            <p class="text-gray-700">Number of Jobs</p>
          </div> -->
  <!-- Repeat category card for more categories -->
  <!-- </div>
      </div>
    </section> -->

  <!-- Employer Services -->
  <!-- <section class="employer-services bg-gray-100 py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">For Employers</h2>
        <p class="text-lg mb-4">
          Post job openings, manage applications, and find the perfect candidates with ease.
        </p>
        <a href="/employers" class="btn btn-primary">Learn More</a>
      </div>
    </section> -->

  <!-- Career Resources -->
  <!-- <section class="career-resources bg-white py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Career Resources</h2>
        <div class="flex flex-col md:flex-row justify-around items-center"> -->
  <!-- Resource Card -->
  <!-- <div class="resource-card bg-gray-100 p-4 rounded shadow-md">
            <h3 class="text-xl font-semibold">Resource Title</h3>
            <p class="text-gray-700">Brief description of the resource.</p>
            <a href="#" class="text-blue-500">Read More</a>
          </div> -->
  <!-- Repeat resource card for more resources -->
  <!-- </div>
      </div>
    </section> -->

  <!-- Newsletter Signup -->
  <!-- <section class="newsletter bg-gray-100 py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
        <p class="text-lg mb-4">
          Sign up for our newsletter to get the latest job listings and career advice directly in
          your inbox.
        </p>
        <form class="flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="input-field mb-4 md:mb-0 md:mr-4"
          />
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section> -->
</template>
