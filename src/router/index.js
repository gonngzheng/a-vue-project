import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/account/Login'
import Reg from '@/components/account/Reg'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'

import NewsInfo from '../components/news/NewsInfo'
import photoList from '../components/photo/photoList'
import photoInfo from '../components/photo/photoInfo'
import goodsInfo from '../components/goods/goodsInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
{path: '/home',component: ()=>import ('../components/tabbar/HomeContainer')

    // children:
    //   [
    //     {path:'newslist',component:NewsList},
    //   ]
    },
    {path:'/home/newslist',component:()=>import ('../components/news/NewsList'),meta:['新闻列表','新闻详情']},
    {path:'/home/newsinfo/:id',component:NewsInfo,props:true,name:'newsInfo'}, 
    {path:'/home/photoList',component:photoList}, 
    {path:'/home/photoInfo',component:photoInfo}, 
    {path:'/home/goodsInfo',component:goodsInfo}, 
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
    // {path: '/*',redirect:'/home'}
  ],
  linkActiveClass:'mui-active'
})
