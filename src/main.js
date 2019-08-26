import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store/store'   //Vuex的文件引入

import api from './request/api/index'  //调用api接口管理文件
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';  //引入bootstrap的css文件
// import './../node_modules/bootstrap/dist/js/bootstrap.min.js';   // 引入bootstrap的js文件
import './styles/base.css'  //初始化css样式
import { Button } from 'vant';  //按需求映入对于的组件
import 'vant/lib/index.css';


Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(Button)   //使用对应的组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
