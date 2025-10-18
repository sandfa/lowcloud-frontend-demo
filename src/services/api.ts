import type { User, Product, Order } from './types'

// API Base URL aus Environment Variable (ohne trailing slashes)
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

async function fetchAPI<T>(endpoint: string): Promise<T> {
  // Stelle sicher, dass endpoint mit / beginnt
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  const url = `${API_BASE_URL}${cleanEndpoint}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  const result: ApiResponse<T> = await response.json()

  if (!result.success) {
    throw new Error(`API Error: ${result.message}`)
  }

  return result.data
}

export const api = {
  async getUsers(): Promise<User[]> {
    return fetchAPI<User[]>('/api/users')
  },

  async getProducts(): Promise<Product[]> {
    return fetchAPI<Product[]>('/api/products')
  },

  async getOrders(): Promise<Order[]> {
    return fetchAPI<Order[]>('/api/orders')
  },
}
