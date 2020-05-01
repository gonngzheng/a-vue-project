<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='maxNum'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox" @change="countChanged" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
				</div>
</template>
<script>
    import mui from '../../../lib/mui/js/mui.js'
    export default{
        data(){
            return{

            }
        },
        props:['maxNum'],//接收库存量
        mounted(){
            console.log(this.maxNum)
            //当组件挂载到页面中之后，去初始化 数字框
            mui(".mui-numbox").numbox()
        },
        methods:{
            countChanged(){
                const val=this.$refs.nobox.value
                this.$emit('func',parseInt(val))
            }
        }
    }
</script>
<style scoped>

</style>