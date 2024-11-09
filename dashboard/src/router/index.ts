import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import FeaturesView from '@/views/Qeatures.vue'
import signIn from '@/views/signIn.vue'
import Register from '@/views/Register.vue'
import Sales from '@/views/sales.vue'
import OrderProcess from '@/views/OrderProcess.vue'
import Products from '@/views/Products.vue'
import Testimonials from '@/views/Testimonial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
      path: '/features',
      name: 'features',
      component: FeaturesView
    },
      {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
     {
      path: '/register',
      name: 'register',
      component: Register
    },
     {
      path: '/sales',
      name: 'sales',
      component: Sales
    },
    {
      path: '/orderProcess',
      name: 'orderProcess',
      component: OrderProcess
    },
       {
      path: '/products',
      name: 'products',
      component: Products
    },
         {
      path: '/testimonials',
      name: 'testimonials',
      component: Testimonials
    },
    
 
 
 
 
 
  ]
})

export default router

