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
        <p class="color-white">Send us yours <a href="/contact-us">here.</a></p>
    </div>
  
</template>

<style>

.not-faq {
    background-color: black;
    color: white; /*change to light-grey*/
}
.side-side-outer {
  margin-top: 15px;
 margin-left: 10%;
 margin-right: 10%;
 display:flex;
}

.side-side-question {
  padding: 12px;
  width: 50%;
  color: white;
  background-color: rgba(94, 94, 94, 1);
}

.side-side-answer {
  padding: 12px;
  width: 50%;
  background-color: rgba(190, 190, 190, 1)
}

.answer-description {
 color: rgba(130, 130, 130, 1);
 font-weight: bold;
}

.not-faq {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  padding: 5px;
}

.not-faq-title {
  font-size: 40px;
  font-weight: bold;
}
</style>