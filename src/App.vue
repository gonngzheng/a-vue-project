<template>
  <div id="app">
    <mt-header fixed title="固定在顶部">
      <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/login">点击登录</router-link>
    <router-link to="/reg">点击注册</router-link>
    <h2>sd</h2>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-button type="large">默认样式</mt-button>
    <mt-button type="danger" disabled>禁用按钮</mt-button>
    <mt-button plain>幽灵按钮</mt-button>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>
    <mt-button>
      <img src="./assets/logo.png" height="20" width="20" slot="icon">
      带自定义图标
    </mt-button>
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>

    
    <!-- <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../assets/100x100.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/100x100.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/100x100.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/100x100.png">
    我的
  </mt-tab-item>
</mt-tabbar> -->
    <router-view/>
  </div>
</template>

<script>

import { Toast } from 'mint-ui';

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    handleClick(){
      Toast({
        message:'点不了哈哈',
        // position:'middle',
        iconClass:'glyphicon glyphicon-ok mysweetcolor',
        duration:1000
      })
    }
  }
}
</script>

<style  scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color:red;
}
.mysweetcolor{
  color:red;
}
</style>
