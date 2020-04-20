<template>
    <div class="list">
        <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-167900876.jpg" alt="">
        <p>我爱js</p>
    </div>
</template>

<script>
    export default{
        props:['item']
    }

</script>

<style lang="less" scoped>

        .list{
            float: left;
            width: 50%;

            img{
                width: 100%;
                padding-left:0.3rem;
            }
            text-align: center;
            font-size: 0.4rem;
        }

</style>