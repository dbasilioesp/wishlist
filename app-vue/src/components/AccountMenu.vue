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
  <nav class="accountMenu" :class="{ 'is-opened': menuIsOpen }" ref="nav">
    <button
      type="button"
      class="accountMenu__button"
      aria-label="Menu Conta"
      @click.stop="toggleMenu"
    >
      <AccountIcon />
    </button>
    <div class="accountMenu__popover">
      <a href="/">Entrar</a>
      <a href="/">Minha Conta</a>
      <a href="/">Endereços</a>
      <a href="/">Minha Netshoes</a>
    </div>
  </nav>
</template>

<style>
.accountMenu {
  position: relative;
  z-index: 1;
}

.accountMenu__button {
  background-color: transparent;
  padding: 2px;
  border: 0;
  cursor: pointer;
  border: 2px solid transparent;
  color: white;
  border-radius: 50%;
}

.accountMenu__button:hover {
  border-color: currentColor;
}

.accountMenu__popover {
  display: flex;
  flex-direction: column;
  width: 160px;
  padding: 8px 10px;
  background-color: white;
  border-radius: 6px;
  position: absolute;
  right: -10px;
  top: 100%;
  border: 0;
  box-shadow: var(--shadowBase);
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
}

.accountMenu__popover a {
  text-decoration: none;
  color: black;
}

.accountMenu__popover a:hover {
  color: var(--primaryColor);
  text-decoration: underline;
}

.accountMenu__popover::before {
  position: absolute;
  z-index: 10;
  content: '';
  display: block;
  right: 13px;
  top: -12px;
  border-style: solid;
  border-width: 0 12px 12px 12px;
  border-color: transparent transparent white transparent;
  transition-duration: 0.3s;
  transition-property: transform;
}

.accountMenu.is-opened .accountMenu__popover {
  animation: moveUp 400ms forwards;
}

@keyframes moveUp {
  0% {
    z-index: -10;
    right: -10px;
    width: 160px;
    height: auto;
    padding: 8px 10px;
    opacity: 0;
    overflow: hidden;
  }
  1% {
    overflow: visible;
    z-index: 1;
    translate: 0 40px;
    opacity: 0;
  }
  100% {
    translate: 0 15px;
    width: 160px;
    height: auto;
    padding: 8px 10px;
    z-index: 1;
    opacity: 1;
    overflow: visible;
  }
}

@media (max-width: 1023px) {
  .accountMenu__popover {
    right: unset;
    left: -10px;
  }

  .accountMenu__popover:before {
    right: unset;
    left: 13px;
  }
}
</style>
