<template>
  <div id="app">
    <h3>这是App根组件</h3>
    <!-- <img src="./assets/logo.png"> -->
    
       <mt-header fixed title="我的vue项目">
      <span slot="left">
      <mt-button icon="back">返回</mt-button>
  </span>
  <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

    <!-- tabbar区域 -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <!-- <router-link to="/login">点击登录</router-link> -->
    <!-- <router-link to="/reg">点击注册</router-link> -->
    <!-- <h2>sd</h2>
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
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button> -->

  
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 40px;
}
h1{
  color:red;
}
.mysweetcolor{
  color:red;
}
.h1, .h2, .h3, h1, h2, h3{
  margin-top:0;
}
.active{
  color:blue
}
</style>
