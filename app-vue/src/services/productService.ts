import type { ProductsData } from '@/utils/types'

export async function loadListProducts() {
  const res = await fetch('http://localhost:3000/api/products')
  let result: ProductsData = await res.json()

  return {
    products: result.products.filter((item) => item.visible),
  }
}
