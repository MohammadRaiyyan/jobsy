<script setup lang="ts"></script>

<template>
  <header
    class="flex items-center justify-center h-12 bg-secondary text-secondary-foreground border-b"
  >
    <nav class="flex items-center justify-between gap-4 container mx-auto w-full">
      <div><h2 class="font-bold text-xl">Jobsy</h2></div>
      <div>
        <ul class="flex items-center gap-5">
          <li>
            <RouterLink
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2"
              active-class="text-primary font-medium pointer-events-none"
              to="/"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2"
              to="/jobs"
              >Jobs</RouterLink
            >
          </li>
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2"
              to="/add-job"
              >Post a Job</RouterLink
            >
          </li>
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2"
              to="/login"
              >Login</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
