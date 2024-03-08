<script setup>
import TheWelcome from './components/TheWelcome.vue'
import Banner from './components/Banner.vue'
import Home from './components/Home.vue'
import Events from './components/Events.vue'

</script>

<template>
  <div class="bird top-[160%] right-[50%] w-[100%] h-[100%] md:right-[65%] md:top-[120%] md:h-[80%] md:w-[80%] lg:top-[90%] lg:h-[60%] lg:w-[60%] lg:top-[90%]">
    <img src="./assets/bird.png"/>
  </div>
  <div class="smoke fixed bottom-[-500px] left-0 w-[150%] h-[400%]">
    <img src="./assets/green_smoke.png"/>
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

@media (min-width: 512px) {
  .bird {
    position: absolute;
    opacity: 0.3;
  }
  .smoke {
    position: absolute;
    opacity: 0.3;
    overflow: hidden;
    transform: rotateX(180deg);
  }
  header {
    display: flex;
    place-items: center;
  }

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