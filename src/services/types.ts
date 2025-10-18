export interface User {
  id: number
  name: string
  email: string
  role?: string
  created_at?: string
}

export interface Product {
  id: number
  name: string
  price: number
  description?: string
  category?: string
  stock?: number
}

export interface Order {
  id: number
  user_id: number
  product_id: number
  quantity: number
  total: number
  status?: string
  created_at?: string
}
