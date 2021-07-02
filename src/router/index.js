import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Panels = () => import('../components/content/panel/Panels')
const HomePage = () => import('../components/content/homepage/HomPage')

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:HomePage,meta: '首页'},
  {path:'/panels',component:Panels,meta:'画板'},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
