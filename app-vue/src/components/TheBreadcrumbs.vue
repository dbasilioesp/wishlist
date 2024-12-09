<script lang="ts" setup>
import { ref } from 'vue'

type Link = {
  path: string
  label: string
}

const props = defineProps<{
  links?: Link[]
}>()

let dataLinks: Link[] = [{ path: '/', label: 'Home' }]

if (props.links) {
  dataLinks = [...dataLinks, ...props.links]
}

const links = ref<Link[]>(dataLinks)

function getClassStyle(index: number): string {
  if (index === links.value.length - 1) {
    return 'is-current'
  }
  return ''
}
</script>

<template>
  <div class="breadcrumbs">
    <template v-for="(link, idx) in links" :key="link.label">
      <RouterLink :to="link.path" :class="getClassStyle(idx)">
        {{ link.label }}
      </RouterLink>
      <span v-if="idx < links.length - 1">/</span>
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

@media (max-width: 1200px) {
  .breadcrumbs {
    border: 0;
    padding-block: 10px;
  }
}
</style>
