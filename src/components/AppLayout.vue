<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Users', path: '/users' },
  { name: 'Products', path: '/products' },
  { name: 'Orders', path: '/orders' },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <nav class="glass-card sticky top-0 z-50">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">LC</span>
            </div>
            <span class="text-xl font-semibold text-white"> lowcloud </span>
          </div>
          <div class="flex space-x-1">
            <RouterLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="
                route.path === item.path
                  ? 'bg-white/20 text-white'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              "
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-6 py-8">
      <slot />
    </main>
  </div>
</template>
