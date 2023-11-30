<script>//was "script setup" aka composition API
  import navbar from "../components/navbar.vue"
  import logo from "../components/logo-title.vue"
  import sideSide from "../components/side-side.vue"

export default {
  components: {
    navbar,
    logo,
    sideSide
  }
}
</script>

<template>
    <navbar />
  <img class="hero-image" src="../assets/images/motorcycle-closeup.jpg">
  <logo/>
  <sideSide/>
</template>

<style>
</style>
