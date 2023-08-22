 import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import contact from '../views/contact.vue'
import gallery from '../views/gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    //   component: () => import('../views/contact.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        // component: () => import('../views/gallery.vue') //should be the same as below statement
        component: gallery
      }
  ]
})

export default router