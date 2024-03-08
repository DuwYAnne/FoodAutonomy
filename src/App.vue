<script setup>
import TheWelcome from './components/TheWelcome.vue'
import Banner from './components/Banner.vue'
import Home from './components/Home.vue'
import Events from './components/Events.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const appHeight = ref(0);

const calculateAppHeight = () => {
  appHeight.value = $refs.appHeight.scrollHeight;
};

onMounted(() => {
  calculateAppHeight();
  window.addEventListener('resize', calculateAppHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateAppHeight);
});

</script>

<template>
  <div class="image-container top-[160%] right-[50%] w-[100%] h-[90%] md:right-[65%] md:top-[120%] md:h-[80%] md:w-[80%] lg:top-[90%] lg:h-[60%] lg:w-[60%] lg:top-[90%]">
    <img src="./assets/bird.png"/>
  </div>
  <div class="image-container left-0 w-[70vw] h-[300%] md:h-[250%] lg:h-[200%] xl:h-[150%]">
    <img src="./assets/vines.png"/>
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
  position: absolute;
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