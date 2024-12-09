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
  padding-inline: 4vw;
}

@media (max-width: 1023px) {
  .containerWrapper {
    padding-inline: 30px;
  }
}
</style>
