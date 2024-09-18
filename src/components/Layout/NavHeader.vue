<script setup lang="ts">
import {
  IconBriefcase,
  IconCategoryPlus,
  IconHome,
  IconLayout2,
  IconLogin2,
  IconLogout2,
  IconSettings,
  IconUserCircle
} from '@tabler/icons-vue'
import PopOver from '../ui/PopOver.vue'
</script>

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
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2 flex items-center gap-2"
              active-class="text-primary font-medium pointer-events-none "
              to="/"
            >
              <IconHome size="18" />
              Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2 flex items-center gap-2"
              to="/jobs"
            >
              <IconBriefcase size="18" />
              Jobs
            </RouterLink>
          </li>
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2 flex items-center gap-2"
              to="/add-job"
            >
              <IconCategoryPlus size="18" />
              Post Job</RouterLink
            >
          </li>
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2 flex items-center gap-2"
              to="/login"
            >
              <IconLogin2 size="18" />
              Login</RouterLink
            >
          </li>
          <li>
            <!-- <RouterLink to="/my-postings"> -->
            <PopOver side="bottom">
              <template v-slot:trigger>
                <IconUserCircle size="24" />
              </template>
              <div class="divide-y w-[250px]">
                <div class="flex items-center gap-2 px-3 py-2 bg-secondary">
                  <IconUserCircle size="24" />
                  <h4>Wobot.ai</h4>
                </div>
                <ul class="space-y-1 px-2 py-1.5">
                  <li>
                    <RouterLink
                      to="/my-postings"
                      class="flex gap-2 items-center px-3 py-2 rounded-sm text-sm hover:bg-secondary"
                      active-class="bg-secondary"
                    >
                      <IconLayout2 size="18" class="text-muted-foreground" />
                      My Postings
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/account"
                      active-class="bg-secondary"
                      class="flex gap-2 items-center px-3 py-2 rounded-sm text-sm hover:bg-secondary"
                    >
                      <IconSettings size="18" class="text-muted-foreground" />
                      Account</RouterLink
                    >
                  </li>
                </ul>
                <ul class="px-2 py-1.5">
                  <li>
                    <RouterLink
                      to="/logout"
                      active-class="bg-secondary"
                      class="flex gap-2 items-center px-3 py-2 rounded-sm text-sm text-destructive hover:bg-secondary"
                    >
                      <IconLogout2 size="18" />

                      Logout</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </PopOver>
            <!-- </RouterLink> -->
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
