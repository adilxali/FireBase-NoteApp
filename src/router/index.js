import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/addtask",
      name: "addtask",
      component: ()=> import ('../components/AddTask.vue')
    },
    {
      path: "/detail/:id",
      name: "detail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailsView.vue')
    },
    {
      path:"/task",
      name:"task",
      component: ()=> import ('@/views/TaskView.vue')
    },
    {
      path:"/edit/:id",
      name:"edit",
      component: ()=> import ('@/components/EditTask.vue')
    },
    {
      path:"/login",
      name:"login",
      component: ()=> import ('@/components/Login.vue')
    },
    {
      path:"/register",
      name:"register",
      component : ()=> import('../components/Signup.vue')
    }
  ]
})

export default router
