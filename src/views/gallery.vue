<script>
import navbar from '../components/navbar.vue'
import carousel from '../components/carousel.vue'
import galleryMain from "../components/gallery-main.vue"

export default {
  components: {
    navbar,
    carousel,
    galleryMain
  }
}
</script>

<template>
  <navbar />
  <carousel />
  <h1>Gallery Content</h1>
  <galleryMain/>

</template>
