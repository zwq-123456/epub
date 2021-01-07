import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: () => {
      import('../views/ebook/index.vue')
    },
    children: [{
      path: ':filename',
      component: () => {
        import('../components/Ebook/ebookRender.vue')
      }
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router
