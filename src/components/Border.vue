<template>
  <svg
    class="border"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">

    <image preserveAspectRatio="none" width="100%" height="100%" href="../assets/canopy.png"/>
  </svg>
</template>

<style scoped>

  .border {
    position: absolute; 
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 60%; /* Need a specific value to work */
    height: 50%;
    clip-path: polygon(1% 1%, 1% 99%, 2% 99%, 2% 2%, 98% 2%, 98% 98%, 2% 98%, 2% 99%, 99% 99%, 99% 1%);
  }
</style>