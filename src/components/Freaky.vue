<script setup>
  import External from "/src/components/external.vue";
  import Form from "/src/components/externalform.vue";
  console.log('hey there! vsauce here);
  var oldlink = document.getElementById("main-css");
  console.log(oldlink);
  oldlink.href = '/src/assets/freaky.css';
  
  var header = document.getElementsByClassName('header')[0];
  const parent = header.parentElement;

  const nextSibling = header.nextSibling;

  header.remove();

  // editable paragraph

  import { db } from "/src/firebase.js";
</script>

<template>
  <!-- original class -ml-4 md:ml-20 -mr-4 md:mr-20 pl-4 pr-4 pb-28 pt-8 mb-28 --> 
  <div class="top-gifs">
    <div class="top-gif">
      <img class="" src="https://media.tenor.com/xCey6e3UtPIAAAAi/skeleton-doot.gif"/>
    </div>
    
    <div class="top-gif">
      <img class="" src="https://media.tenor.com/dtSXp3Z1f1IAAAAi/nibbling-hamster-the-pet-collective.gif"/>
    </div>

    <div class="top-gif">
      <img class="" src="http://web.archive.org/web/20160410225733im_/http://cjarboe.com/cigarani.gif"/>
    </div>
    
    <div class="top-gif">
      <img class="" src="https://media1.tenor.com/m/oOMR1g7Du-0AAAAC/penguvee.gif"/>
    </div>
    
    <div class="top-gif">
      <img class="" src="https://media1.tenor.com/m/CiY_FgkwulgAAAAC/oddworld-jumping.gif"/>
    </div>
  </div>
  
  <div class="side-gifs">
    <div class="side-gif left-0">
      <img class="" src="https://media.tenor.com/RUFZj9HZN-gAAAAi/malarch-splatoon.gif"/>
    </div>
    <div class="side-gif left-0">
      <img class="" src="https://media.tenor.com/Ve9yD06ITM4AAAAi/dance-hyper-dance.gif"/>
    </div>
    <div class="side-gif left-0">
      <img class="" src="https://media.tenor.com/rBM8c5qscjMAAAAi/halloween-witch.gif"/>
    </div>
    <div class="side-gif left-0">
      <img class="" src="https://media.tenor.com/HRYS5tNUDK0AAAAi/flowey-flowey-the-flower.gif"/>
    </div>
    <div class="side-gif left-0">
      <img class="" src="https://media.tenor.com/bXSau0IWcUQAAAAi/chomper-eating-zombie.gif"/>
    </div>


    <div class="side-gif right-0">
      <img class="" src="https://media1.tenor.com/m/E76aLDQxe6oAAAAd/meme-lang.gif"/>
    </div>
    <div class="side-gif right-0">
      <img class="" src="https://media.tenor.com/pq4PeymKWiQAAAAi/puffer-fish.gif"/>
    </div>
    <div class="side-gif right-0">
      <img class="" src="https://media1.tenor.com/m/xZUUnvfO_hwAAAAC/paste3-brain-damage.gif"/>
    </div>
    <div class="side-gif right-0">
      <img class="" src="https://media.tenor.com/prGCM4ywMkAAAAAi/kin-dance-kin-naire.gif"/>
    </div>
    <div class="side-gif right-0">
      <img class="" src="https://media1.tenor.com/m/H6Shjx6d21kAAAAC/dance-shark-tale.gif"/>
    </div>
  </div>

  <!-- MAYBE ADD THIS
  <div class="background-fire">
    <img class="" src="https://media.tenor.com/q_OdlggtvpoAAAAi/animated-fire.gif"/>
  </div>
  --> 

  <div class="rainbow-box -mt-24 md:-mt-12 ml-10 md:ml-20 mr-10 md:mr-20 mb-28 pb-[90%] md:pb-48">
    <div class="left-text">
      <p class="prairie-freak-text text-[2rem] md:text-6xl lg: text-9xl fade text-center mt-10">Prairie <br> Freak <br> Fest</p>
      <p class="prairie-date-text text-[1.75rem] md:text-5xl lg: text-8xl fade text-center mt-10">November <br> 8-11</p>
    </div>
    <div class="right-text">
      <External />
    </div>
  </div>
  <Form />
</template>

<style scoped>
.top-gifs {
  position: absolute;
  top: 0px;
  width: 100%;
}
.side-gifs {
  position: absolute;
  left:0px;
  top:0px;
  width: 100%;
}
@media (min-width: 768px) {
  .top-gif {
    width: 8rem;
    height: 8rem;
    position: absolute;
    text-align: center;
    overflow: hidden;
    z-index: -1;
  }
  
  .top-gif:nth-child(1) { left: calc(0% + 0.5rem); }
  .top-gif:nth-child(2) { left: calc(20% - 4rem); }
  .top-gif:nth-child(3) { left: calc(40% - 4rem); }
  .top-gif:nth-child(4) { left: calc(60% - 4rem); }
  .top-gif:nth-child(5) { left: calc(80% - 4rem); }

  .side-gif {
    position: absolute;
    overflow: hidden;
    z-index: -1;
    height: 10rem;
    width: 6rem;
  }
  .side-gif:nth-child(1) { top: 10em; }
  .side-gif:nth-child(2) { top: 20em; }
  .side-gif:nth-child(3) { top: 30em; }
  .side-gif:nth-child(4) { top: 40em; }
  .side-gif:nth-child(5) { top: 50em; }
  .side-gif:nth-child(6) { top: 10em; }
  .side-gif:nth-child(7) { top: 20em; }
  .side-gif:nth-child(8) { top: 30em; }
  .side-gif:nth-child(9) { top: 40em; }
  .side-gif:nth-child(10) { top: 50em; }
}
@media (max-width: 767px) {
  .top-gif {
    width: 4rem;
    height: 4rem;
    position: absolute;
    text-align: center;
    overflow: hidden;
    z-index: -1;
  }
  
  .top-gif:nth-child(1) { left: calc(0% + 0.5rem);  }
  .top-gif:nth-child(2) { left: calc(20% - 1.5rem); }
  .top-gif:nth-child(3) { left: calc(40% - 1.5rem); }
  .top-gif:nth-child(4) { left: calc(60% - 1.5rem); }
  .top-gif:nth-child(5) { left: calc(80% - 1.5rem); }

  .side-gif {
    position: absolute;
    overflow: hidden;
    z-index: -1;
    height: 6rem;
    width: 4rem;
  }
  .side-gif:nth-child(1) { top: 7em; }
  .side-gif:nth-child(2) { top: 14em; }
  .side-gif:nth-child(3) { top: 21em; }
  .side-gif:nth-child(4) { top: 28em; }
  .side-gif:nth-child(5) { top: 35em; }
  .side-gif:nth-child(6) { top: 7em; }
  .side-gif:nth-child(7) { top: 14em; }
  .side-gif:nth-child(8) { top: 21em; }
  .side-gif:nth-child(9) { top: 28em; }
  .side-gif:nth-child(10) { top: 35em; }
}
.prairie-info-text {
  font-family: "Old London";
  font-weight: 400;
  font-style: normal;
  color: white;
  background: url('/src/assets/rainbow.jpg') 0 0 / cover;
  background-size: 100%; 
  color: #de466c;
  text-align: center;
  padding-right: 1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.prairie-freak-text {
  font-family: "Old London";
  font-weight: 400;
  font-style: normal;
  color: white;
  background: url('/src/assets/rainbow.jpg') 0 0 / cover;
  background-size: 25%; 
  color: #de466c;
  text-align: left;
  padding-left: 1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.prairie-date-text {
  font-family: "Old London";
  font-weight: 400;
  font-style: normal;
  color: white;
  background: url('/src/assets/rainbow.jpg') 0 0 / cover;
  background-size: 50%; 
  color: #de466c;
  text-align: left;
  padding-left: 1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text {

  font-family: "Georgia", serif;
}

.rainbow-box {
  display: flex;
  border: 5px solid transparent;
  border-image-source: url('/src/assets/rainbow.jpg');
  border-image-slice: 1;
}

.left-text {
  flex: 1;
  padding: 1%;
}
.right-text {
  flex: 2;
  padding: 1%;
}
</style>
