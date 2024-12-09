<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layouts/TheHeader.vue'
</script>

<template>
  <TheHeader />

  <RouterView v-slot="{ Component }">
    <transition mode="out-in"> <component :is="Component" /> </transition
  ></RouterView>
</template>
