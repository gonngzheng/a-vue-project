<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img :src="require('@/assets/logo.png')" alt="">
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        created(){
            this.getLunbotu()
        },
        methods:{
            async getLunbotu(){
                // const {data} = this.$http.get('/api/getIunbo');
                // console.log(data)
            }
        }
    }
</script>>
<style scoped>
    .mint-swipe{
        height:200px;
    }
    img{
        width:100%;
        height:100%;
    }
   .mint-swipe-item:nth-child(1){
        background: red;
   }
   .mint-swipe-item:nth-child(2){
        background: blue;
   }
   .mint-swipe-item:nth-child(3){
        background: greenyellow;
   }
</style>