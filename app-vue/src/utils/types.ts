export type Product = {
  code: string
  name: string
  available: boolean
  visible: boolean
  fullPriceInCents: string
  salePriceInCents: string
  rating: number
  image: string
  stockAvailable: boolean
  details: {
    name: string
    description: string
  }
}

export type ProductsData = {
  products: Product[]
}
