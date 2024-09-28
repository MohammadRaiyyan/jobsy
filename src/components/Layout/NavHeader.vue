<script setup lang="ts">
import {
  IconLayout2,
  IconLogin2,
  IconLogout2,
  IconSettings,
  IconUserCircle
} from '@tabler/icons-vue'
import { RouterLink } from 'vue-router'
import logo from '../../assets/logo.png'
import PopOver from '../ui/PopOver.vue'
import NavLinks from './NavLinks.vue'
</script>

<template>
  <header
    class="flex items-center justify-center h-14 bg-card absolute z-10 top-0 w-full backdrop-blur-md text-card-foreground border-b"
  >
    <nav class="flex items-center justify-between gap-4 container mx-auto w-full">
      <div class="flex items-center py-2">
        <RouterLink to="/">
          <img :src="logo" alt="Jobsy" class="h-full w-32 bg-cover object-cover" />
        </RouterLink>
      </div>
      <div class="flex items-center gap-4 flex-1 justify-end">
        <div class="md:flex hidden md:flex-1 justify-end">
          <NavLinks />
        </div>

        <ul class="flex items-center gap-4">
          <li>
            <RouterLink
              active-class="text-primary font-medium pointer-events-none"
              class="hover:bg-primary/10 hover:text-primary rounded p-1 px-2 flex items-center gap-2"
              to="/login"
            >
              <IconLogin2 size="18" />
              Login
            </RouterLink>
            <!-- Closing tag corrected here -->
          </li>
          <li class="flex items-center">
            <PopOver side="bottom">
              <template #trigger>
                <IconUserCircle size="24" />
              </template>
              <div class="divide-y w-[250px]">
                <div class="flex items-center gap-2 font-semibold px-3 py-2 bg-background">
                  <IconUserCircle size="24" />
                  <h4>Wobot.ai</h4>
                </div>
                <ul class="space-y-1 px-2 py-1.5">
                  <li>
                    <RouterLink
                      to="/my-postings"
                      class="flex gap-2 items-center px-3 py-2 rounded-lg text-sm hover:bg-secondary"
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
                      class="flex gap-2 items-center px-3 py-2 rounded-lg text-sm hover:bg-secondary"
                    >
                      <IconSettings size="18" class="text-muted-foreground" />
                      Account
                    </RouterLink>
                    <!-- Closing tag corrected here -->
                  </li>
                </ul>
                <ul class="px-2 py-1.5">
                  <li>
                    <RouterLink
                      to="/logout"
                      active-class="bg-secondary"
                      class="flex gap-2 items-center px-3 py-2 rounded-lg font-medium text-sm text-destructive hover:bg-secondary"
                    >
                      <IconLogout2 size="18" />
                      Logout
                    </RouterLink>
                    <!-- Closing tag corrected here -->
                  </li>
                </ul>
              </div>
            </PopOver>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
