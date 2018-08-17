// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import {Loading,Tips,AlertBox} from '@/common/popUp';
// import Element from 'element-ui'
// import Axios from 'axios'

// Vue.use(Element)
// vue.use(Axios)

Vue.config.productionTip = false
Vue.use(Loading)
Vue.use(Tips)
Vue.use(AlertBox)

sync(store, router);

//路由控制，用来处理一些全局状态
router.beforeEach((to, from, next) => {
  let meta = to.matched[0].meta
  let headerTitle = meta.headerTitle===undefined?'快保': meta.headerTitle

  // 设置页面title内容
  document.title = headerTitle
  // 控制显示title
  store.commit('setHeaderTitle',headerTitle)
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 执行初始化工作
store.dispatch('init')
