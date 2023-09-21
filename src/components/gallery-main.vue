<script>
 import projectsJson from '../../projects.json'
export default {
  data() {
    return {
      projects: projectsJson

      }
    }
  }
</script>

<template>
    <link type=text/css href="../assets/styles/css/main.css">

    <div class="project-card grey-background" v-for="project in projects">

        <div class="project-card-image">
            <img class="project-image" :src="project.ImageSrc" alt="Project Image" />
        </div>


        <div class="card-right"><!--right side-->
            <p id="project-title">
                <p>Year: {{ project.Year }}</p>
                <p>Make: {{ project.Make }}</p>
                <p>Model: {{ project.Model }}</p>
            </p>

            <p class="project-description">
                {{ project.Description }}
            </p>
        </div>


    </div>

</template>