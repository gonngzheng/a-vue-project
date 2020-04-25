<template>

    <div>
        <h1>newsInfo</h1>
    </div>
</template>
<script>
    export default{
        props:['id'],
        data(){
            return{

            }
        },
        created(){
            console.log(this.id)
        }
    }
</script>

<style scoped>

</style>
