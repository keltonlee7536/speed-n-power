<script>
    //needs to return {"company" : "the image src"}
</script>

<template>

    <div class="logoCardsWrapper" v-for="item in logos">
        <div class="logoCardsWrapper">
            <!-- {{ logos.each company }} -->
        </div>
    </div>

</template>

<style scoped>
    .logoCardsWrapper {
        border-radius: 25px;
    }
</style>