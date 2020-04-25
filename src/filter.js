import Vue from 'vue'
//导入格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,formatStr){
    //在过滤器的处理函数中，最后，必须return 一个东西，这样，才是一个合法的过滤器
    return moment(dateStr).format(formatStr)
  })