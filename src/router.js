import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import About from './views/About'
import Goods from './views/goods/Goods' // 商品
import GoodsList from './views/goods/GoodsList' // 商品列表
import AddGoods from './views/goods/AddGoods' // 添加商品
import GoodsCategories from './views/goods/GoodsCategories' // 商品分类

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/goods',
      component: Goods,
      children: [
        {
          path: '/goodsList',
          component: GoodsList
        },
        {
          path: '/addGoods',
          component: AddGoods
        }, 
        {
          path: '/goodsCategories',
          component: GoodsCategories
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})
