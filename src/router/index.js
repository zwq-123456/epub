import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '../views/ebook/index.vue'
import ebookRender from '../components/Ebook/ebookRender'
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
      path: ':fileName',
      component: ebookRender
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router
