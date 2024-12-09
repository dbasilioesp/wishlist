<script setup lang="ts">
import StarIcon from './icons/StarIcon.vue'

const props = defineProps<{
  rating: number
}>()

function checkHalf(idx: number): boolean {
  if (props.rating % 1 === 0.5) {
    return idx - 0.5 === props.rating
  }

  return false
}
</script>

<template>
  <div class="stars">
    <div v-for="idx in 5" :key="idx" class="stars__point">
      <StarIcon :class="{ 'is-active': idx <= props.rating }" />
    </div>
  </div>
</template>

<style>
.stars {
  display: inline-flex;
  gap: 2px;
}

.stars__point.is-half {
  width: 8px;
}

.stars svg {
  width: 16px;
  height: 16px;
  fill: var(--softGrey);
}

.stars svg.is-active {
  fill: orange;
}
</style>
