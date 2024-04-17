<script setup>
  import Border from './Border.vue';
  
  function mounted() {
      console.log("home")
  }

  import VueCountdown from '@chenfengyuan/vue-countdown';
  const now = new Date();
  const newYear = new Date('2024-04-20T09:00:00.000-05:00');
  const time = newYear - now;
</script>

<template>
  <div class="-ml-4 md:ml-20 -mr-4 md:mr-20 pl-4 pr-4 pb-28 pt-8 mb-28">
    <span class="countdown"> 
      <vue-countdown class="permanent-marker-regular" :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds}">
        Event Starts In: <br> {{ days.toString().padStart(2, '0') }} : {{ hours.toString().padStart(2, '0') }} : {{ minutes.toString().padStart(2, '0') }} : {{ seconds.toString().padStart(2, '0') }}!      </vue-countdown>
    </span>
    <p class="dancing-script-welcome text-5xl fade text-center mt-10">Welcome!</p>
    <p class="info text fade text-base text-center">
        We invite you to the Champaign-Urbana Food Autonomy Festival on April 20th, 2024. <br>
        The festival will be a gathering of people celebrating food sovereignty/autonomy <br> 
        with skillshares and community hosted events. <br>
        There will be foraging, mushroom innoculation, tree planting, discussion of land defense movements, food, and more!
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
.permanent-marker-regular {
  font-family: "Permanent Marker", cursive;
  font-weight: 300;
  font-style: normal;
  font-size: x-large;
}
.countdown {
  z-index: -1; 
  
  display: table;
  margin: 0 auto;
}
</style>
