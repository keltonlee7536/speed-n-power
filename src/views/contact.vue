<script>
  import contactForm from "../components/contact-form.vue"
  import navbar from "../components/navbar.vue"
  import bio from "../components/bio.vue"

  export default {
  components: {
    navbar,
    contactForm,
    bio
  }
}
</script>

<template>
  <navbar />
  <img class="hero-image" src="/garage-generic.webp">
    <contactForm />
    <bio />
</template>
