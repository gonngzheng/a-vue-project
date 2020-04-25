import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/account/Login'
import Reg from '@/components/account/Reg'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home',component: HomeContainer},
    {path: '/member',component: MemberContainer},
    {path: '/shopcar',component: ShopcarContainer},
    {path: '/search',component: SearchContainer},
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {path: '/*',redirect:'/home'}
  ],
  linkActiveClass:'mui-active'
})
