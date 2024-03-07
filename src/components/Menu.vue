<template>
    <div class="wrapper">
        <button class="transition-all italic font-bold" @click="active = !active" v-if="!active">Menu</button>
        <button class="transition-all italic font-bold" @click="active = !active" v-if="active">Menu &#215</button>
        <transition name="fade">
            <menu class="italic underline" v-if="active">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/events">Events</router-link></li>
                <li><router-link to="/artraffle">Art Raffle</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
            </menu>
        </transition>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
    .wrapper {
        font-family: "Enriqueta", serif;
    }
    .fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .fade-enter-from,
    .fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
    .dropdown::after {
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 35px solid #943c3c;;
    }
    .li {
        transition: 0.3s;
    }
    .li:hover {
        color: text-slate-400;
    }
</style>