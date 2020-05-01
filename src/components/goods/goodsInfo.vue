<template>
    <div>
        <h3>goodsInfo</h3>
        <!-- 钩子函数动画，这些钩子函数，都是通过实践绑定机制，绑定到transition元素上 -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"> 
            <div class="ball" v-show="flag"></div>
        </transition>
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：
                            <span style="margin-right:10px;"><del>￥2699</del></span>
                            销售价：
                            <span style="font-size:16px;color:red;font-weight:bold">￥2199</span>
                        </p>
                        <p>
                            购买数量：<nobox :maxNum="maxNum" @func="getSelectCount"></nobox>
                        </p>
                        <div>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToCart" >加入购物车</mt-button>
                        </div>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>

            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                          商品货号：
                        </p>
                        <p>
                          库存情况：{{maxNum}}件
                        </p>
                        <p>上架时间：</p>
					</div>
                    <p>使用this.$store.state:{{$store.state.count}}</p>
                    <p>使用mapState:{{count}}</p>
                    <p>{{msg}}</p>
                    <!-- <input type="button" value="+1" @click="increment"> -->
                    <input type="button" value="+1" @click="add">
                    <input type="button" value="-1" @click="subC(2)">
                    this.$store.getters获取：{{$store.getters.countInfo}}
                    <h3>mapGetters的映射:{{countInfo}}</h3>
                    <input type="button" value="使用mapActions映射" @click="newAdd">
                    <input type="button" value="使用mapActions调用" @click="newSub(2)">
				</div>
				<div class="mui-card-footer btnarea">
                    <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </div>
			</div>
            
    </div>
</template>
<script>
import nobox from './nobox'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            maxNum:60,
            flag:false,//小球显示隐藏状态
            selectCount:1, //用户选择的商品数量，默认为1
        }
    },
    computed:{
        msg(){
            return '213'
        },
        //通过展开运算符，把state中的数据映射为计算属性，这样，能够让自己的计算属性和store中的属性并存
        ...mapState(['count']),
        ...mapGetters(['countInfo'])

        },
    watch:{
        maxNum(newval,oldval){
            mui(".mui-numbox").numbox().setOption("maxNum",newval)
        }
    },
    methods:{
        // increment(){
        //     //点击按钮，让state中的count加一
        //     //不推荐下面方式修改state
        //     // this.$store.state.count++;
        //     //如果在组件中，要调用mutations中的函数，只能通过this.$store.commit()来调用
        //     this.$store.commit('add')
        // },
        ...mapMutations({
            subC:'sub'
        }),
        ...mapMutations(['add']),
        ...mapActions(['newAdd']),
        ...mapActions(['newSub']),
        getSelectCount(val){
            //获取选择商品的数量
            this.selectCount=val
        },
        beforeEnter(el){  //小球开始动画之前的起始状态
            el.style.transform='translate(0,0)';
        },
        enter(el,done){ //小球动画结束之后的结束状态
            //动态获取小球的横纵坐标
            const ballPos=el.getBoundingClientRect();
            let ballPosL=ballPos.left;
            let ballPosT=ballPos.top;
            //动态获取徽标的位置
            let end=document.getElementsByClassName('mui-badge')[0],
            endL= end.getBoundingClientRect().left,
            endT= end.getBoundingClientRect().top;

            el.offsetWidth  //这是固定写法，不写el.offsetWidth 就无法实现动画效果
            el.style.transform=`translate(${endL-ballPosL}px,${endT-ballPosT}px)`;
            //贝塞尔曲线在线生成器：http://cubic-bezier.com/#.46,-0.4,1,.49
            el.style.transition="all .5s cubic-bezier(.46,-0.4,1,.49)"
            done();
        },
        //当动画执行完毕后，会自动调用done这个函数，这个done就是afterEnter函数的引用
        afterEnter(el){
            //小球动画结束后的回调函数，用来做一些清理工作
            this.flag=!this.flag;
        },
        addToCart(){
            //点击加入购物车
            this.flag=!this.flag
            //调用mutations中的addToCart
           // this.$store.commit('addToCart',{id:2,count:this.selectCount})
           //直接调用mapMutations中的方法
              this.addToCar({id:3,count:this.selectCount})
              console.log(this.$store.state.cart)
        },
        ...mapMutations(['addToCar'])
    },
    components:{
        nobox
    }
}
</script>
<style scoped>
    .ball{
        width:15px;
        height:15px;
        border-radius: 50%;
        background: red;
        position:absolute;
        z-index:100;
        top:203px;
        left:149px;
        /* transform: translate(61px,417px); */
    }
    .btnarea{
        flex-direction:column;
    }
    .btnarea button+button{
        margin-top:15px;
    }
</style>