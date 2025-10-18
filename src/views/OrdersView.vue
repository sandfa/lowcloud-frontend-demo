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
import type { Order } from '@/services/types'

const orders = ref<Order[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    orders.value = await api.getOrders()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to fetch orders'
  } finally {
    loading.value = false
  }
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)
}

const getStatusColor = (status?: string) => {
  switch (status?.toLowerCase()) {
    case 'completed':
    case 'delivered':
      return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'pending':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    case 'cancelled':
      return 'bg-red-500/20 text-red-400 border-red-500/30'
    case 'processing':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    default:
      return 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  }
}
</script>

<template>
  <AppLayout>
    <div class="max-w-6xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-white mb-3">Orders</h1>
        <p class="text-slate-400">Order management and tracking</p>
      </div>

      <Card class="glass-card">
        <CardHeader>
          <CardTitle class="text-white">Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div v-if="loading" class="text-center py-12">
            <div
              class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white/60"
            ></div>
            <p class="mt-4 text-slate-400">Loading orders...</p>
          </div>

          <div v-else-if="error" class="text-center py-12">
            <div
              class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-red-400 text-2xl">⚠</span>
            </div>
            <p class="text-red-400">{{ error }}</p>
          </div>

          <div v-else-if="orders.length === 0" class="text-center py-12">
            <div
              class="w-16 h-16 bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-slate-400 text-2xl">🛒</span>
            </div>
            <p class="text-slate-400">No orders found</p>
          </div>

          <Table v-else>
            <TableHeader>
              <TableRow>
                <TableHead class="text-slate-300">Order ID</TableHead>
                <TableHead class="text-slate-300">User ID</TableHead>
                <TableHead class="text-slate-300">Product ID</TableHead>
                <TableHead class="text-slate-300">Quantity</TableHead>
                <TableHead class="text-slate-300">Total</TableHead>
                <TableHead class="text-slate-300">Status</TableHead>
                <TableHead class="text-slate-300">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="order in orders" :key="order.id" class="hover:bg-white/5">
                <TableCell class="font-medium text-white">#{{ order.id }}</TableCell>
                <TableCell class="text-slate-200">{{ order.user_id }}</TableCell>
                <TableCell class="text-slate-200">{{ order.product_id }}</TableCell>
                <TableCell class="font-semibold text-slate-200">{{ order.quantity }}x</TableCell>
                <TableCell class="font-semibold text-green-400">
                  {{ formatPrice(order.total) }}
                </TableCell>
                <TableCell>
                  <span
                    :class="['px-3 py-1 text-xs rounded-full border', getStatusColor(order.status)]"
                  >
                    {{ order.status || 'Pending' }}
                  </span>
                </TableCell>
                <TableCell class="text-slate-400">
                  {{ order.created_at ? new Date(order.created_at).toLocaleDateString() : '-' }}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
</template>
