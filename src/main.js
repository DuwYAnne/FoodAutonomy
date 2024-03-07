import './assets/main.css'
import './assets/index.css'

import { createApp, defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const asyncHome = defineAsyncComponent(() => import('./components/Home.vue'))
const asyncAbout = defineAsyncComponent(() => import('./components/About.vue'))
const asyncEvents = defineAsyncComponent(() => import('./components/Events.vue'))
const asyncArtRaffle = defineAsyncComponent(() => import('./components/ArtRaffle.vue'))
const asyncFAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const routes = [
    {
      path: '/',
      name: 'Home',
      component: asyncHome
    },
    {
      path: '/about',
      name: 'About',
      component: asyncAbout
    },
    {
      path: '/events',
      name: 'Events',
      component: asyncEvents
    },
    {
      path: '/artraffle',
      name: 'Art Raffle',
      component: asyncArtRaffle
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: asyncFAQ
    }
  ]
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
const app = createApp(App)

app.use(router)

app.mount('#app')

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('page');
  const svg = document.getElementById('border');
  console.log('hi', svg);
  console.log(container);
  // Function to update the SVG dimensions to match the container div
  function updateSVGDimensions() {
      const containerRect = container.getBoundingClientRect();
      svg.setAttribute('width', containerRect.width);
      svg.setAttribute('height', containerRect.height);
  }

  // Call the function initially and whenever the window is resized
  updateSVGDimensions();
  window.addEventListener('resize', updateSVGDimensions);
});