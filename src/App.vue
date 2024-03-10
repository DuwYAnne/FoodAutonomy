<script setup>
import TheWelcome from './components/TheWelcome.vue'
import Banner from './components/Banner.vue'
import Home from './components/Home.vue'
import Events from './components/Events.vue'
</script>

<template>
  <div class="image-container -bottom-32 right-[50%] w-[100%] h-[200%] md:right-[60%] md:w-[60%] lg:right-[70%] lg:w-[50%]">
    <img class="absolute bottom-0" src="./assets/bird.png"/>
  </div>
  <div class="image-container right-0 w-[70vw] h-[960px] md:h-[1280] lg:h-[1600px] xl:h-[1920px]">
    <img class="right-0" src="./assets/vines.png"/>
  </div>
  <banner>
    <Banner/>
  </banner>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.image-container {
  position: fixed;
  overflow: hidden;
  opacity: 0.3;
}
@media (min-width: 512px) {
  
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>