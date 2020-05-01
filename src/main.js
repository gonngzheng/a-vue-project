// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
//导入全局的配置模块，这个模块中的代码，和main.js中的vm实例，没有全局的Vue配置；
//因此抽离出去之后，可以让项目的结构更加清晰
import  './globalConfig'
Vue.config.productionTip = false

import test from '../test/test'
Vue.component('mytest',test)  //全局注册的组件在任何地方都能使用
//vuex的使用
import store from './store'

new Vue({
  el: '#app',
  router,
  store,  //将创建的共享状态对象，挂载到Vue实例中，这样，所有的组件就可以直接从store中获取全局的对象
  components: { App},
  template: '<App/>'
})
