<template>
  <carousel :items-to-show="1.5">
    <slide v-for="project in projects" :key="slide">
      <img :src="project.ImageSrc"/>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import projectsJson from '../../projects.json'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      wrapAround: true
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
    },
  }),

  data() {
    return {
      projects: projectsJson
      }
    }
  }

</script>