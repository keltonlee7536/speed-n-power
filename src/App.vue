<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import contact from './components/contact.vue'
import logoCards from './components/logo-cards.vue'
import home from './views/home.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> --><!--PUT AARONS LOGO HERE-->

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav> -->
    </div>
  </header>

  <home />

</template>

<style scoped>
</style>
