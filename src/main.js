// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui' 
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

Vue.use(MintUi)  //批量注册

// import {Button} from 'mint-ui'
// Vue.component(Button.name, Button)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/global.css'
/* eslint-disable no-new */

//导入Bootstrap样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

//配置axios
import axios from 'axios'
Vue.prototype.$http=axios.create({ //在全局设置axios的请求根路径，这样，在发起请求的时候，就可以不写根地址
  baseURL:'http://39.106.32.91:3000/api/getIunbo'
})
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
