<script setup>
  import Border from './Border.vue';
  function mounted() {
      console.log("home")
  }
</script>

<template>
  <div class="-ml-4 md:ml-20 -mr-4 md:mr-20 pl-4 pr-4 pb-28 pt-8 mb-28">
    <p class="dancing-script-welcome text-5xl fade text-center">Welcome!</p>
    <p class="info text fade text-base text-center">
        We invite you to the Champaign-Urbana Food Autonomy Festival on April 20th, 2024. <br>
        The festival will be a gathering of people celebrating food sovereignty/autonomy <br> 
        with skillshares and community hosted events. <br>
        There will be foraging, mushroom innoculation, tree/shrub planting, food, an art raffle, and more!
    </p>
  </div>
</template>

<style scoped>
.dancing-script-welcome {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.text {

  font-family: "Georgia", serif;
}
</style>
