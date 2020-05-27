<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/'+1">
						<img class="mui-media-object mui-pull-left" src="@/images/shuijiao.jpg">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                            <span>{{timer | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" @click="goDesc">
						<img class="mui-media-object mui-pull-left" src="@/images/muwu.jpg">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" @click="goByname">
						<img class="mui-media-object mui-pull-left" src="@/images/cbd.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                timer:''
            }
        },
        created(){
			this.timer = new Date()
			console.log(this.$route,'1')
		},
		methods:{
			goDesc(){
				//编程式导航
				this.$router.push('/home/newsinfo/2')
			},
			goByname(){
				this.$router.push({name:'newsInfo',params:{id:3}})
				// this.$router.push({name:'newsInfo',query:{id:3}}) //query传参
			}
		}
    }
</script>>
<style scoped>

</style>