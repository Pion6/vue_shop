import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

// 挂载路由导航函数
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from 代表从哪个路径跳转而来
  // next是一个函数表示放行
  // next()放行 next('login')表示强制跳转
  if (to.path === '/login') {
    console.log('1')
    return next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    console.log('2')
    return next('/login')
  }
  console.log('3')
  next()
})
export default router
