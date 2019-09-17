import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store';
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'

// import Home from './views/Home'
// import Login from './views/Login'
// import About from './views/About'
// import Goods from './views/goods/Goods' // 商品
// import GoodsList from './views/goods/GoodsList' // 商品列表
// import AddGoods from './views/goods/AddGoods' // 添加商品
// import GoodsCategories from './views/goods/GoodsCategories' // 商品分类
// import addGoodsCategories from './views/goods/addGoodsCategories' // 商品分类

Vue.use(Router)

const getComponent = (name, component) => () =>
    import (`@/views/${name}/${component}.vue`);

const myRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: getComponent('login','Login')
    },
    {
      path: '/home',
      component: getComponent('home','Home'),
      name: 'home',
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/goods',
          component: getComponent('goods','Goods'),
          name: 'goods',
          meta: {
            title: '商品'
          },
          children: [
            {
              path: '/goodsList',
              component: getComponent('goods','GoodsList'),
              name: 'goodsList',
              meta: {
                title: '商品列表'
              }
            },
            {
              path: '/addGoods',
              component: getComponent('goods','AddGoods'),
              name: 'addGoods',
              meta: {
                title: '添加商品'
              }
            }, 
            {
              path: '/goodsCategories',
              component: getComponent('goods','GoodsCategories'),
              name: 'managoodsCategoriesge',
              meta: {
                title: '商品分类'
              },
              children: [
              ]
            },
            {
              path: '/addGoodsCategories',
              component: getComponent('goods','addGoodsCategories'),
              name: 'addGoodsCategories',
              meta: {
                title: '添加商品分类'
              }
            }
          ]
        },
        {
          path: '/about',
          component: getComponent('about','About'),
          name: 'about',
        }
      ]
    }
  ]
})

// 判断是否存在token
myRouter.beforeEach((to, from, next) => {
  NProgress.start()
  if(to.path !== './login' && !store.state.token){
    next('/login')
    NProgress.done() // 结束process
  } else {
    next()
  }
  if (to.meta.roles) {
    to.meta.roles.includes(...store.getters.roles) ? next() : next('/404')
  } else {
    next()
  }
})

myRouter.afterEach(() => {
  NProgress.done() // 结束process
})
export default myRouter
