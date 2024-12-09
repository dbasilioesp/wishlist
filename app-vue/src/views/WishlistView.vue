<script setup lang="ts">
import { onBeforeMount, ref, computed } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
import ContainerWrapper from '@/components/layouts/ContainerWrapper.vue'
import ProductsList from '@/components/ProductsList.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useWishlistStore } from '@/stores/wishlist'
import type { ProductsData } from '@/utils/types'
import { loadListProducts } from '@/services/productService'

const wishStore = useWishlistStore()
const data = ref<ProductsData>({ products: [] })
const breadcrumbs = [{ label: 'Wishlist', path: '/wishlist' }]

onBeforeMount(async () => {
  data.value = await loadListProducts()
})

function handleWishlist(id: string) {
  wishStore.toggle(id)
}

function checkIsWished(id: string) {
  return wishStore.wishlist.includes(id)
}

const products = computed(() => {
  return data.value.products.filter((item) => checkIsWished(item.code))
})
</script>

<template>
  <main class="wishlistView">
    <ContainerWrapper>
      <TheBreadcrumbs :crumbs="breadcrumbs" />
      <ProductsList :showEmpty="products.length === 0">
        <ProductCard
          :title="item.name"
          :description="item.details.description"
          :rating="item.rating"
          :image="item.image"
          :fullPrice="item.fullPriceInCents"
          :salePrice="item.salePriceInCents"
          :wished="checkIsWished(item.code)"
          v-for="item in products"
          :key="item.code"
          @wishlist="handleWishlist(item.code)"
          dropMode
        />
      </ProductsList>
    </ContainerWrapper>
  </main>
</template>
