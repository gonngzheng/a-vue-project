<template>
  <div id="app">
    <h3>这是App根组件</h3>
    <!-- <img src="./assets/logo.png"> -->
    
       <mt-header fixed title="我的vue项目">
      <span slot="left" @click="goBack" v-show="flag">
      <mt-button icon="back">返回</mt-button>
  </span>
  <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

    <!-- tabbar区域 -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="my-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="my-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="my-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.totalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="my-tab-item" to="/search">
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

    <transition>
      <router-view/>

    </transition>

  </div>
</template>

<script>

// import { Toast } from 'mint-ui';

export default {
  name: 'App',
  data(){
    return{
        flag:true
    }
  },
  created(){
      this.$route.path==='/home'?this.flag=false :this.flag= true
  },
  watch:{
    '$route.path'(newval,oldval){
      console.log(newval)
      this.flag = newval==='/home'? false: true
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
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
  overflow: hidden;
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

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}
.v-enter-active, .v-leave-active{
  transition: all 0.4s;
}
/* 切换页面返回键闪动问题 */
.mint-button{
  height: inherit;
}
.mint-header{
  z-index:99
}

.mui-bar-tab .my-tab-item.mui-active {
    color: #007aff;
}

/* 解决tabbar区域和图片列表js行为冲突的问题 */
.mui-bar-tab .my-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>
