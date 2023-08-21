<script setup>
  import contactForm from "../components/contact-form.vue"
</script>

<template>
  <div class="about">
    <h1>THE CONTACT PAGE</h1>
    <contactForm />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
