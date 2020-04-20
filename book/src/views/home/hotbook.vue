<template>
    <div class="hotbook_box">
        <h2>热门图书</h2>
        <div class="list_box">
           <list v-for="(item,index) in 6" :key="index" :item="item"></list>
            <!--<list v-for="(item,index) in data" :key="index" :item="item"></list>-->
        </div>
    </div>
</template>

<script>
    import list from './list.vue'
    export default{
        components:{
            list
        },
        created(){
            let p = this.$store.dispatch('getHomeList');
            p.then((data)=>{
                console.log(data.data);
                this.data = data.data;
            })
        }
    }

</script>

<style lang="less" scoped>
    .hotbook_box{
        position: relative;
        top: 1rem;
        h2{
            color: salmon;
            font-size: 2rem;
            padding: 0.2rem;
        }
    }
    .list_box{
        width: 100%;
        overflow: hidden;
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
    }
</style>