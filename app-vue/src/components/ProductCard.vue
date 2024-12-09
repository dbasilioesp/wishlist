<script setup lang="ts">
import { ref } from 'vue'
import HeartIcon from './icons/HeartIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import StarsSticker from './StarsSticker.vue'

const props = defineProps<{
  title: string
  description: string
  image: string
  fullPrice: string
  salePrice: string
  rating: number
  unlockSize?: boolean
  wished: boolean
  dropMode?: boolean
}>()

const emit = defineEmits(['wishlist'])

function convertCurrency(price: string): string {
  const value = Number(price) / 100
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function addToWishlist() {
  emit('wishlist', !props.wished)
}
</script>

<template>
  <div class="productCard" :class="{ 'unlock-size': props.unlockSize, wished: props.wished }">
    <button
      type="button"
      class="productCard__wishButton"
      @click="addToWishlist"
      :class="{ 'is-dropmode': props.dropMode }"
    >
      <HeartIcon v-if="!props.dropMode" />
      <CloseIcon v-else />
    </button>
    <figure>
      <img :src="props.image" :alt="props.title" />
      <figcaption>{{ props.description }}</figcaption>
    </figure>
    <div class="productCard__title">{{ props.title }}</div>
    <div class="productCard__rating">
      <StarsSticker :rating="props.rating" />
      <span>{{ props.rating.toFixed(1) }}</span>
    </div>
    <div class="productCard__fullPrice">{{ convertCurrency(props.fullPrice) }}</div>
    <div class="productCard__salePrice">{{ convertCurrency(props.salePrice) }}</div>
  </div>
</template>

<style>
.productCard {
  position: relative;
  padding: 10px 14px 14px;
  max-width: 260px;
  width: 100%;
  box-shadow: var(--shadowBase);
  border-radius: 4px;
}

.productCard.unlock-size {
  max-width: 100%;
}

.productCard img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.productCard figcaption {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.productCard__title {
  margin-top: 8px;
  font-size: 18px;
  line-height: 1.2;
  color: var(--hardGrey);

  /*  Overflow text in 2 lines*/
  display: -webkit-box;
  overflow: hidden;
  height: min-content;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.productCard__rating {
  display: flex;
  gap: 5px;
  font-size: 12px;
  color: var(--hardGrey);
}

.productCard__fullPrice {
  margin-top: 4px;
  color: var(--softGrey);
  text-decoration: line-through;
  font-size: 12px;
}

.productCard__salePrice {
  font-size: 18px;
  color: var(--primaryColor);
  font-weight: 600;
}

.productCard__wishButton {
  position: absolute;
  right: 8px;
  top: 8px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--hardGrey);
  border: 0;
  cursor: pointer;
  transition: all 300ms linear;
  padding: 6px;
}

.productCard__wishButton svg {
  fill: white;
}

.productCard.wished .productCard__wishButton {
  background-color: var(--red);
}

.productCard__wishButton.is-dropmode,
.productCard.wished .productCard__wishButton.is-dropmode {
  background-color: transparent;
  padding: 7px;
  right: 6px;
  top: 6px;
}

@media (hover: hover) {
  .productCard__wishButton:hover {
    scale: 1.03;
  }
}
</style>
