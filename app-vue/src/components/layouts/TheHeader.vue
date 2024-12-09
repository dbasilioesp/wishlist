<script lang="ts" setup>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import AccountIcon from '@/components/icons/AccountIcon.vue'
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <RouterLink to="/" class="header__logoLink">
        <LogoIcon />
      </RouterLink>
      <RouterLink to="/wishlist" class="header__wishlistLink">
        <HeartIcon />
        <span>Wishlist</span>
      </RouterLink>
      <nav class="header__accountMenu">
        <AccountIcon />
      </nav>
    </div>
  </header>
</template>

<style>
.header {
  height: var(--headerHeight);
  padding: 0 20px;
  background-color: var(--primaryColor);
}

.header__wrapper {
  display: grid;
  grid-template-columns: 1fr auto 100px;
  grid-template-areas: 'a b c';
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxContainer);
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-inline: auto;
}

.header__logoLink {
  grid-area: a;
}

.header__wishlistLink {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 6px;
}

.header__wishlistLink {
  grid-area: b;
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
}

.header__wishlistLink svg {
  fill: currentColor;
}

.header__accountMenu {
  grid-area: c;
  justify-self: end;
}

@media (max-width: 1200px) {
  .header {
    padding-inline: 4vw;
  }

  .header__wrapper {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'c a b';
  }

  .header__logoLink {
    justify-self: center;
  }

  .header__wishlistLink span {
    display: none;
  }
}
</style>
