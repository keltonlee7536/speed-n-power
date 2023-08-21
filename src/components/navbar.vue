<template>
  <div class="navbarMain">
      <router-link to="/">Home</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contact">Contact</router-link>
      <!-- <button class="navButton">home</button>
      <button class="navButton">gallery</button>
      <button class="navButton">contact</button> -->

  </div>
</template>

<style scoped>

.navbarMain {
  display: flex;
  justify-content: center;
  align-items: space-between;
}

.navButton {
  color: grey;
}

</style>
