<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
import ContainerWrapper from '@/components/layouts/ContainerWrapper.vue'
import ProductsList from '@/components/ProductsList.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useWishlistStore } from '@/stores/wishlist'
import type { ProductsData } from '@/utils/types'
import { loadListProducts } from '@/services/productService'

const wishStore = useWishlistStore()
const data = ref<ProductsData>({ products: [] })

onBeforeMount(async () => {
  try {
    data.value = await loadListProducts()
  } catch (error) {
    console.error(error)
  }
})

function handleWishlist(id: string) {
  wishStore.toggle(id)
}

function checkIsWished(id: string) {
  return wishStore.wishlist.includes(id)
}
</script>

<template>
  <main class="homeView">
    <ContainerWrapper>
      <TheBreadcrumbs />
      <ProductsList :showEmpty="data.products.length === 0">
        <ProductCard
          :title="item.name"
          :description="item.details.description"
          :rating="item.rating"
          :image="item.image"
          :fullPrice="item.fullPriceInCents"
          :salePrice="item.salePriceInCents"
          :wished="checkIsWished(item.code)"
          v-for="item in data.products"
          :key="item.code"
          @wishlist="handleWishlist(item.code)"
        />
      </ProductsList>
    </ContainerWrapper>
  </main>
</template>
