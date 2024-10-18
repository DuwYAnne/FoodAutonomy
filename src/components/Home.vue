<script setup>
  import Border from './Border.vue';
  
  function mounted() {
      console.log("home")
  }
  import VueCountdown from '@chenfengyuan/vue-countdown';
  const now = new Date();
  const newYear = new Date('2024-04-20T09:00:00.000-05:00');
  const time = newYear - now;

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    var element= document.getElementById('freaky');

    element.addEventListener("click", () => {
    }, false);// Add onclick eventListener 
  });

</script>

<template>
  <div class="-ml-4 md:ml-20 -mr-4 md:mr-20 pl-4 pr-4 pb-28 pt-8 mb-28 text-center">
    <!-- DEPRECATED
    <span class="countdown"> 
      <vue-countdown class="permanent-marker-regular" :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds}">
        Event Starts In: <br> {{ days.toString().padStart(2, '0') }} : {{ hours.toString().padStart(2, '0') }} : {{ minutes.toString().padStart(2, '0') }} : {{ seconds.toString().padStart(2, '0') }}!      </vue-countdown>
    </span> -->
    <p class="dancing-script-welcome text-5xl fade mt-10">Hiiiiiiiiiii</p>
    <span class="info text fade text-base">
        This is a space to distribute food autonomy resources for the Central Illinois Region. <br>
        We are currently working on compiling resources and have discussions on how to achieve <br>
        food autonomy and what that looks like. We hope you check it out later! <br>
        For now, another event is being hosted by our friends -
    </span>
    <router-link class="rainbow" to="/freaky">check it out</router-link>
  </div>
</template>

<style scoped>
.rainbow {
  text-align: center;
  font-size: 24px;
  font-family: Old London;
  letter-spacing: 5px;
  animation: colorRotate 1s linear 0s infinite;
}

@keyframes colorRotate {
  from {
    color: #6666ff;
  }
  10% {
    color: #0099ff;
  }
  50% {
    color: #00ff00;
  }
  75% {
    color: #ff3399;
  }
  100% {
    color: #6666ff;
  }
}

@keyframes rainbow_animation {
  0%,100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
}
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
