<script setup lang="ts">
const props = defineProps<{
  showEmpty: boolean
}>()
</script>

<template>
  <div class="productsList">
    <div class="productsList__grid" v-if="!props.showEmpty">
      <slot />
    </div>
    <div v-else class="productsList__empty">Não foi encontrado nenhum produto.</div>
  </div>
</template>

<style>
.productsList__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: start;
  width: 100%;
  gap: 30px;
  row-gap: 35px;
  margin-top: 30px;
  padding-bottom: 100px;
  max-width: 1200px;
  margin-inline: auto;
}

.productsList__grid:has(> :first-child:nth-last-child(1)) {
  grid-template-columns: auto;
  justify-content: center;
}

.productsList__grid:has(> :first-child:nth-last-child(2)) {
  grid-template-columns: auto auto;
  justify-content: center;
}

.productsList__grid:has(> :first-child:nth-last-child(3)) {
  grid-template-columns: auto auto auto;
  justify-content: center;
}

.productsList__empty {
  display: grid;
  width: 100%;
  height: 200px;
  place-items: center;
}

@media (max-width: 1023px) {
  .productsList__grid {
    margin-top: 8px;
  }
}
</style>
