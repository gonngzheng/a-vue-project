<template>
    <div>
        <h3>photoInfo</h3>
        
           <!-- 获取缩略图组件 -->
            <div class="thumbs">
                <vue-preview :slides="list" class="imgPrev"></vue-preview>
            </div>
        
         
    </div>
</template>

<script>
    
    export default{
        data(){
            return{
                // photoList:[
                //     {id:0,src:require('@/images/2.png'),title:'美女2',content:'这是第二张图'},
                //     {id:1,src:require('@/images/3.png'),title:'美女3',content:'这是第三张图'},
                //     {id:2,src:require('@/images/4.png'),title:'美女4',content:'这是第四张图'},
                //     {id:3,src:require('@/images/5.png'),title:'美女5',content:'这是第五张图'},
                // ],
                list: [{
                    src: 'https://placekitten.com/300/200',
                    msrc: 'https://placekitten.com/300/200',

                    w: 600,
                    h: 400
                    }, {
                    src: 'https://placekitten.com/400/240',
                    msrc: 'https://placekitten.com/400/240',
                    w: 1200,
                    h: 900
                    }]
            }
        },
        created(){
            console.log(this.list)
        }
    }

</script>
<style scoped>
    
    .thumbs img{
        width:100%;
    }
</style>
