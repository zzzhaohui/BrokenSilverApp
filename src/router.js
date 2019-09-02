import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { //流程审查页面
      path: '/Flow',
      name: 'Flow',
      component: () => import('./views/Flow.vue')  
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { //Capital 资金总览界面
      path: '/Capital',
      name: 'Capital',
      component: () => import('./views/Capital.vue'),
    },
    { //detailed资金详细
      path: '/Detailed',
      name: 'Detailed',
      component: () => import('./views/Detailed.vue')
    },
    {//转账页面1
      path: '/Trans',
      name: 'Trans',
      component: () => import('./views/Trans.vue')
    },
    { //转账页面2
      path: '/Transfer',
      name: 'Transfer',
      component: () => import('./views/Transfer.vue')
    },
    {//Establish  创建审批流程页面
      path: '/Establish',
      name: 'Establish',
      component: () => import('./views/Establish.vue')
    },
    { //Approval  审批页面
      path: '/Approval',
      name: 'Approval',
      component: () => import('./views/Approval.vue')
    },
    { //EnterprisePurchasing 企业采集页面
      path: '/EnterprisePurchasing',
      name: 'EnterprisePurchasing',
      component: () => import('./views/EnterprisePurchasing.vue')
    },
    { //ShareHolding  全员持股页面
      path: '/ShareHolding',
      name: 'ShareHolding',
      component: () => import('./views/ShareHolding.vue')
    }
  ]
})


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/Home') {
    next();
  } else {

    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/Home');
    } else {
      next();
    }
  }
});

export default router;