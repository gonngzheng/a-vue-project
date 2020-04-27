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
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
