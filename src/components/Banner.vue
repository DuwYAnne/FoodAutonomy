<script setup>
import Menu from './Menu.vue'

const Headings = []

function mounted() {
    console.log("ban her!")
}
</script>

<template>
    <div class="fade mb-28 border-b-2 border-[#01200f] w-full">
        <div class="header"> 
            <img class="hidden md:flex logo" src="../assets/muskrat.png" alt="muskrat" title="in search of Obamium crystals"/>
            <div style="display:inline-block;">
                <h1  class="font-bold text-3xl md:text-4xl lg:text-5xl">UC Food Autonomy! </h1>
                <h3  class="hidden md:flex text-lg md:text-xl lg:text-2xl">
                    <router-link class="hover:text-xl hover:md:text-2xl hover:lg:text-3xl font-semibold" to="/">Home</router-link>
                    <router-link class="hover:text-xl hover:md:text-2xl hover:lg:text-3xl font-semibold" to="/about">About</router-link>
                    <router-link class="hover:text-xl hover:md:text-2xl hover:lg:text-3xl font-semibold" to="/resources">Resources</router-link>
                </h3>
            </div>
            <div class="md:hidden">
            <Menu/>
            </div>
        </div> 
    </div> 
    <!-- <img class="logo mx-auto w-24 h-16 mb-8 md:mb-16" src="../assets/geo3.png" alt="muskrat" title="a real mystery"/> -->
    
  <div class="pt-16 pb-16">
    <router-view id="router-view"/>
  </div> 
</template>

<style scoped>

.astrology {
    display: block;
    width: 10%;
    height: 10%;
}

.header img {
  width: 100px;
  height: 100px;
  float: left; 
}

.content{
    overflow:hidden;
}

h1 {
  font-family: "Georgia", sans-serif;
  margin-top: 20px;
  margin-bottom: 15px;
}

a {
    margin-right: 50px;
}

h3 {
  font-family: "Garamond", serif;
  position: relative;
}

</style>
