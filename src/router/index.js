import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'


// user components
// import Register from "../views/user/Register";
// import Login from "../views/user/Login";
import NotFound from "../views/NotFound";
import WelcomePage from "../views/WelcomePage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/quiz',
    name: 'Welcom',
    component: WelcomePage,
  },
  {
    path: '/not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
