<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AccountIcon from '@/components/icons/AccountIcon.vue'

const nav = ref()
const menuIsOpen = ref(false)

onMounted(() => {
  document.body.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.body.removeEventListener('click', closeMenu)
})

function closeMenu(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.contains(nav.value)) {
    menuIsOpen.value = false
  }
}

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value
}
</script>

<template>
  <nav class="header__accountMenu" :class="{ 'is-opened': menuIsOpen }" ref="nav">
    <button
      type="button"
      class="header__accountButton"
      aria-label="Menu Conta"
      @click.stop="toggleMenu"
    >
      <AccountIcon />
    </button>
    <div class="header__accountPopover">
      <a href="/signin">Entrar</a>
      <a href="/my-account">Minha Conta</a>
      <a href="/addresses">Endereços</a>
      <a href="/my-netshoes">Minha Netshoes</a>
    </div>
  </nav>
</template>

<style>
.header__accountMenu {
  position: relative;
  z-index: 1;
}

.header__accountButton {
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
}

.header__accountPopover {
  display: flex;
  flex-direction: column;
  width: 160px;
  background-color: white;
  border-radius: 6px;
  padding: 8px 10px;
  position: absolute;
  right: -10px;
  top: 100%;
  border: 0;
  box-shadow: var(--shadowBase);
  translate: 0 40px;
  opacity: 0;
  z-index: -1;
}

.header__accountPopover a {
  text-decoration: none;
  color: black;
}

.header__accountPopover:before {
  position: absolute;
  z-index: 10;
  content: '';
  right: 13px;
  top: -12px;
  border-style: solid;
  border-width: 0 12px 12px 12px;
  border-color: transparent transparent white transparent;
  transition-duration: 0.3s;
  transition-property: transform;
}

.header__accountMenu.is-opened .header__accountPopover {
  animation: moveUp 400ms forwards;
}

@keyframes moveUp {
  0% {
    z-index: -1;
  }
  1% {
    z-index: 1;
    translate: 0 40px;
    opacity: 0;
  }
  100% {
    translate: 0 15px;
    opacity: 1;
  }
}
</style>
