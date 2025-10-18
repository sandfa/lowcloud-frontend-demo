<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <div class="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div class="text-center max-w-4xl">
        <div class="mb-12">
          <div
            class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <span class="text-3xl font-bold text-white">LC</span>
          </div>
          <h1 class="text-6xl font-bold mb-6 text-white">lowcloud</h1>
          <p class="text-xl text-slate-300 max-w-2xl mx-auto">
            Cloud deployment platform for modern applications
          </p>
        </div>

        <div class="glass-card rounded-2xl p-12">
          <div class="mb-8">
            <h2 class="text-3xl font-semibold text-white mb-4">API Data Dashboard</h2>
            <p class="text-slate-300 text-lg">
              Explore and manage your application data through our intuitive interface
            </p>
          </div>

          <div class="space-y-6">
            <p class="text-slate-400 font-medium">Available endpoints:</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <RouterLink
                to="/users"
                class="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-200 group"
              >
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors"
                  >
                    <span class="text-white font-semibold">U</span>
                  </div>
                  <h3 class="text-white font-semibold mb-2">Users</h3>
                  <p class="text-slate-400 text-sm">Manage user accounts</p>
                </div>
              </RouterLink>

              <RouterLink
                to="/products"
                class="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-200 group"
              >
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors"
                  >
                    <span class="text-white font-semibold">P</span>
                  </div>
                  <h3 class="text-white font-semibold mb-2">Products</h3>
                  <p class="text-slate-400 text-sm">Browse product catalog</p>
                </div>
              </RouterLink>

              <RouterLink
                to="/orders"
                class="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-200 group"
              >
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors"
                  >
                    <span class="text-white font-semibold">O</span>
                  </div>
                  <h3 class="text-white font-semibold mb-2">Orders</h3>
                  <p class="text-slate-400 text-sm">Track order history</p>
                </div>
              </RouterLink>
            </div>
          </div>

          <div class="mt-12 pt-8 border-t border-white/10">
            <div class="flex justify-center gap-8">
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener"
                class="text-slate-400 hover:text-white transition-colors font-medium"
              >
                Vue.js
              </a>
              <a
                href="https://lowcloud.io"
                target="_blank"
                rel="noopener"
                class="text-slate-400 hover:text-white transition-colors font-medium"
              >
                lowcloud.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
