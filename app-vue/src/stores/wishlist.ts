import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useWishlistStore = defineStore('wishlist', () => {
  // const wishlist = ref<string[]>([])
  const wishlist = useStorage('wishlist', [] as string[])

  function add(id: string) {
    wishlist.value = [...wishlist.value, id]
  }

  function remove(id: string) {
    wishlist.value = wishlist.value.filter((i) => i !== id)
  }

  function toggle(id: string) {
    if (wishlist.value.includes(id)) {
      remove(id)
    } else {
      add(id)
    }
  }

  return { wishlist, add, remove, toggle }
})
