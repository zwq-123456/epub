import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '../views/ebook/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: Ebook,
    children: [{
      path: ':filename',
      component: () => {
        import('../components/Ebook/ebook.vue')
      }
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router
