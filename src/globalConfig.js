import Vue from 'vue'
import MintUi from 'mint-ui' 
import 'mint-ui/lib/style.css'

Vue.use(MintUi)  //批量注册

import {Button} from 'mint-ui'
Vue.component('my-button', Button)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/global.css'
/* eslint-disable no-new */

import './filter'

//安装图片预览的插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)




//导入Bootstrap样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

//配置axios
import axios from 'axios'
Vue.prototype.$http=axios.create({ //在全局设置axios的请求根路径，这样，在发起请求的时候，就可以不写根地址
  baseURL:'http://39.106.32.91:3000/api/getIunbo'
})