<template>
  <div class="containerWrapper">
    <slot />
  </div>
</template>

<style>
.containerWrapper {
  max-width: var(--maxContainer);
  width: 100%;
  margin-inline: auto;
}
</style>
