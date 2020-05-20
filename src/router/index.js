import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/forecasts/',
    name: 'Forecasts',
    component: () => import('../views/Forecasts.vue'),
    children: [
      {
        path: 'a1',
        name: 'A1',
        component: () => import('../views/A1.vue')
      },
      {
        path: 'a2',
        name: 'A2',
        component: () => import('../views/A2.vue')
      },
      {
        path: 'a3',
        name: 'A3',
        component: () => import('../views/A3.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
