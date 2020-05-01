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
export default {
    data(){
        return{
            maxNum:60,
            flag:false,//小球显示隐藏状态
            selectCount:1, //用户选择的商品数量，默认为1
        }
    },
    watch:{
        maxNum(newval,oldval){
            mui(".mui-numbox").numbox().setOption("maxNum",newval)
        }
    },
    methods:{
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
            this.flag=!this.flag
        }
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