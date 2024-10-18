import { createApp, defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


const asyncHome = defineAsyncComponent(() => import('./components/Home.vue'))
const asyncAbout = defineAsyncComponent(() => import('./components/About.vue'))
const asyncResources = defineAsyncComponent(() => import('./components/Resources.vue'))

const asyncFreaky = defineAsyncComponent(() => import('./components/Freaky.vue'))
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
      path: '/resources',
      name: 'Resources',
      component: asyncResources
    },
    {
      path: '/freaky',
      name: 'Freaky',
      component: asyncFreaky
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
