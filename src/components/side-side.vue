<script>
 import SideSideJson from '../../side-side.json'
export default {
  data() {
    return {
      SideSideJson: SideSideJson

      }
    }
  }
</script>

<template><!--can you add a v-for to a template tag?-->
    <div class="side-side-outer" v-for="item in SideSideJson">
        <div class="side-side-question">
            <h1>{{ item.question }}</h1>
        </div>
        <div class="side-side-answer">
            <h1>{{ item.answerTitle }}</h1>
            <p class="answer-description">{{ item.answerDescription }}</p>
        </div>
        
    </div>

    <div class="not-faq">
        <h3 class="not-faq-title">Not every question is frequently asked.</h3>
        <p class="color-white bold" style="font-size: 24px;">Send us yours <a href="/contact-us">here.</a></p>
    </div>
  
</template>