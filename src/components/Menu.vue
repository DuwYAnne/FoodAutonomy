<template>
    <div class="wrapper">
        <button id="Button" class="transition-all font-bold" @click="active = !active" v-if="!active">Menu</button>
        <button id="Button" class="transition-all font-bold" @click="active = !active" v-if="active">Menu &#215</button>
        <transition name="fade">
            <menu class="underline" v-if="active">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/resources">Resources</router-link></li>

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
    mounted() {
        // Code to be executed after the component is mounted
        console.log('Component mounted');
        
        // Example: Attaching event listener to a DOM element
        const button = document.getElementById('Button');
        if (button) {
            console.log("yes button");
        } else {
            console.log("NO BUTTON");
        }
    },
  }
</script>
<style scoped>
    .wrapper {
        font-family: "Garamond", serif;
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