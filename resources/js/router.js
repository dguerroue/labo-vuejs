import VueRouter from "vue-router"

// VIEWS
//
import Home from '../views/pages/home.vue'
import About from '../views/pages/about.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'LAB - Accueil',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'LAB - à propos',
    }
  }
]

// vue-router instance
const vueRouter = new VueRouter({
  routes: routes
})

// Manage title
vueRouter.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'LAB'
  }
  next()
})

export default vueRouter
