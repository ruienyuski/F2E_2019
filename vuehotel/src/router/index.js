import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Room_style from '@/components/Room_style.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/room_style/:name',
    name: 'room_style',
    component:Room_style,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/Room_style.vue'),
    // children: [
    //   {
    //     path: "Single Room",
    //     name: "Single Room",
    //     component: SingleRoom,
    //   },
    //   {
    //     path: "Deluxe Single Room",
    //     name: "Deluxe Single Room",
    //     component: SingleRoom,
    //   },
    //   {
    //     path: "Double Room",
    //     name: "Double Room",
    //     component: SingleRoom,
    //   },
    //   {
    //     path: "Deluxe Double Room",
    //     name: "Deluxe Double Room",
    //     component: SingleRoom,
    //   },
    //   {
    //     path: "Twin Room",
    //     name: "Twin Room",
    //     component: SingleRoom,
    //   },
    //   {
    //     path: "/Deluxe Twin Room",
    //     name: "Deluxe Twin Room",
    //     component: SingleRoom,
    //   },                              
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router
