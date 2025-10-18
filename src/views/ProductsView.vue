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
import type { Product } from '@/services/types'

const products = ref<Product[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    products.value = await api.getProducts()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to fetch products'
  } finally {
    loading.value = false
  }
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)
}
</script>

<template>
  <AppLayout>
    <div class="max-w-6xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-white mb-3">Products</h1>
        <p class="text-slate-400">Product catalog and inventory</p>
      </div>

      <Card class="glass-card">
        <CardHeader>
          <CardTitle class="text-white">Product Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <div v-if="loading" class="text-center py-12">
            <div
              class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white/60"
            ></div>
            <p class="mt-4 text-slate-400">Loading products...</p>
          </div>

          <div v-else-if="error" class="text-center py-12">
            <div
              class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-red-400 text-2xl">⚠</span>
            </div>
            <p class="text-red-400">{{ error }}</p>
          </div>

          <div v-else-if="products.length === 0" class="text-center py-12">
            <div
              class="w-16 h-16 bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-slate-400 text-2xl">📦</span>
            </div>
            <p class="text-slate-400">No products found</p>
          </div>

          <Table v-else>
            <TableHeader>
              <TableRow>
                <TableHead class="text-slate-300">ID</TableHead>
                <TableHead class="text-slate-300">Name</TableHead>
                <TableHead class="text-slate-300">Description</TableHead>
                <TableHead class="text-slate-300">Category</TableHead>
                <TableHead class="text-slate-300">Price</TableHead>
                <TableHead class="text-slate-300">Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="product in products" :key="product.id" class="hover:bg-white/5">
                <TableCell class="font-medium text-white">{{ product.id }}</TableCell>
                <TableCell class="font-semibold text-slate-200">{{ product.name }}</TableCell>
                <TableCell class="max-w-xs truncate text-slate-400">
                  {{ product.description || '-' }}
                </TableCell>
                <TableCell>
                  <span
                    class="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/20"
                  >
                    {{ product.category || 'General' }}
                  </span>
                </TableCell>
                <TableCell class="font-semibold text-green-400">
                  {{ formatPrice(product.price) }}
                </TableCell>
                <TableCell>
                  <span
                    :class="[
                      'px-3 py-1 text-xs rounded-full border',
                      product.stock && product.stock > 10
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : product.stock && product.stock > 0
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30',
                    ]"
                  >
                    {{ product.stock ?? 'N/A' }}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </AppLayout>
</template>
