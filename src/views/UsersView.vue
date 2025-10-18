<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppLayout from '@/components/AppLayout.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Table from '@/components/ui/Table.vue'
import TableHeader from '@/components/ui/TableHeader.vue'
import TableBody from '@/components/ui/TableBody.vue'
import TableRow from '@/components/ui/TableRow.vue'
import TableHead from '@/components/ui/TableHead.vue'
import TableCell from '@/components/ui/TableCell.vue'
import { api } from '@/services/api'
import type { User } from '@/services/types'

const users = ref<User[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    users.value = await api.getUsers()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to fetch users'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <AppLayout>
    <div class="max-w-6xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-white mb-3">Users</h1>
        <p class="text-slate-400">User management and directory</p>
      </div>

      <Card class="glass-card">
        <CardHeader>
          <CardTitle class="text-white">User Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div v-if="loading" class="text-center py-12">
            <div
              class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white/60"
            ></div>
            <p class="mt-4 text-slate-400">Loading users...</p>
          </div>

          <div v-else-if="error" class="text-center py-12">
            <div
              class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-red-400 text-2xl">⚠</span>
            </div>
            <p class="text-red-400">{{ error }}</p>
          </div>

          <div v-else-if="users.length === 0" class="text-center py-12">
            <div
              class="w-16 h-16 bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-slate-400 text-2xl">👤</span>
            </div>
            <p class="text-slate-400">No users found</p>
          </div>

          <Table v-else>
            <TableHeader>
              <TableRow>
                <TableHead class="text-slate-300">ID</TableHead>
                <TableHead class="text-slate-300">Name</TableHead>
                <TableHead class="text-slate-300">Email</TableHead>
                <TableHead class="text-slate-300">Role</TableHead>
                <TableHead class="text-slate-300">Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="user in users" :key="user.id" class="hover:bg-white/5">
                <TableCell class="font-medium text-white">{{ user.id }}</TableCell>
                <TableCell class="text-slate-200">{{ user.name }}</TableCell>
                <TableCell class="text-slate-300">{{ user.email }}</TableCell>
                <TableCell>
                  <span
                    class="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {{ user.role || 'User' }}
                  </span>
                </TableCell>
                <TableCell class="text-slate-400">
                  {{ user.created_at ? new Date(user.created_at).toLocaleDateString() : '-' }}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
</template>
