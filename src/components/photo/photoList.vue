<template>
    <div>
        <h1>图片分享组件</h1>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                            aaa
						</a><a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							bbb
						</a><a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							ccc
						</a>
					</div>
				</div>

			</div>
            
            <ul class="lazyul">
                <li v-for="(item,i) in imgList" :key="i">
                    <img v-lazy="item.url">
                    <div class="info">
                        <h1 class="info-title">{{item.title}}</h1>
                        <div class="info-content">{{item.content}}</div>
                    </div>
                </li>
            </ul>
        
    </div>
</template>

<script>
    import mui from '../../../lib/mui/js/mui.js'
    import {Lazyload} from 'mint-ui'
    export default{
        data(){
            return{
                imgList:[
                    {id:0,url:require('@/images/1.png'),title:'美女1',content:'这是第一张图df第三的说法凯乐科技，恢复了阿萨德开发商的路口附近方地方水电费水电费水电费都是发斯蒂芬斯蒂芬闪动发送到防守打法行方三个地方'},
                    {id:1,url:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                    {id:2,url:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                    {id:3,url:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                    {id:4,url:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                    {id:5,url:require('@/images/6.png'),title:'美女6',content:'这是第六张图'},
                    {id:0,url:require('@/images/1.png'),title:'美女1',content:'这是第一张图'},
                    {id:1,url:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                    {id:2,url:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                    {id:3,url:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                    {id:4,url:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                    {id:5,url:require('@/images/6.png'),title:'美女6',content:'这是第六张图'},
                    {id:0,url:require('@/images/1.png'),title:'美女1',content:'这是第一张图'},
                    {id:1,url:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                    {id:2,url:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                    {id:3,url:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                    {id:4,url:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                    {id:5,url:require('@/images/6.png'),title:'美女6',content:'这是第六张图'},
                    {id:0,url:require('@/images/1.png'),title:'美女1',content:'这是第一张图'},
                    {id:1,url:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                    {id:2,url:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                    {id:3,url:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                    {id:4,url:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                    {id:5,url:require('@/images/6.png'),title:'美女6',content:'这是第六张图'},
                    {id:0,url:require('@/images/1.png'),title:'美女1',content:'这是第一张图'},
                    {id:1,url:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                    {id:2,url:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                    {id:3,url:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                    {id:4,url:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                    {id:5,url:require('@/images/6.png'),title:'美女6',content:'这是第六张图'},
                    {id:0,url:require('@/images/1.png'),title:'美女1',content:'这是第一张图'},
                    {id:1,url:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                    {id:2,url:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                    {id:3,url:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                    {id:4,url:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                    {id:5,url:require('@/images/6.png'),title:'美女6',content:'这是第六张图'}
                ]
            }
        },
        methods:{

        },
        created(){

        },
        mounted(){
        this.$nextTick(()=>{
            console.log(window)
            window.scrollTo(0,0)
        })
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>

<style scoped>
    .mui-slider{
        /* 移除滑动警告 */
        touch-action: pan-x; 
    }
    .lazyul{
        margin:0;
        padding:10px; 
    }
    li{
        position: relative;
        background: #ccc;
        text-align:center;
        box-shadow:0 0 7px gray;
    }
    li+li{
        margin-top:10px;
    }
    img{
        vertical-align: middle;
        width:100%;

    }
    img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .info{
        position:absolute;
        bottom:0;
        color:#fff;
        background: rgba(0,0,0,0.5);
        max-height: 76px;
        overflow: hidden;
    }
    .info-title{
        font-size:14px;
    }
    .info-content{
        font-size: 13px;
        text-align: left;
        text-indent:2em;
    }
</style>
