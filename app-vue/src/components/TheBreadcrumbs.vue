<script lang="ts" setup>
import { ref } from 'vue'

type Link = {
  path: string
  label: string
}

const props = defineProps<{
  crumbs?: Link[]
}>()

let dataCrumbs: Link[] = [{ path: '/', label: 'Home' }]

if (props.crumbs) {
  dataCrumbs = [...dataCrumbs, ...props.crumbs]
}

const crumbs = ref<Link[]>(dataCrumbs)

function getClassStyle(index: number): string {
  if (index === crumbs.value.length - 1) {
    return 'is-current'
  }
  return ''
}
</script>

<template>
  <div class="breadcrumbs">
    <template v-for="(item, idx) in crumbs" :key="item.label">
      <RouterLink :to="item.path" :class="getClassStyle(idx)">
        {{ item.label }}
      </RouterLink>
      <span v-if="idx < crumbs.length - 1">/</span>
    </template>
  </div>
</template>

<style>
.breadcrumbs {
  display: flex;
  width: 100%;
  gap: 5px;
  padding-bottom: 30px;
  padding-top: 40px;
  border-bottom: 1px solid var(--primaryColor);
}

.breadcrumbs a {
  color: var(--primaryColor);
  text-decoration: none;
}

.breadcrumbs a.is-current {
  font-weight: 600;
}

.breadcrumbs a:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (max-width: 1023px) {
  .breadcrumbs {
    border: 0;
    padding-block: 10px;
  }
}
</style>
