<template>
    <div class="item_box">
        <div class="img_box">
            <img src="" alt="">
        </div>
        <div class="content_box">
            <h2 class="title">标题</h2>
            <p class="desc"></p>
            <div class="price_box">$99.00</div>
            <div class="btn_box">
                <button class="del" @click="remove">删除</button>
                <button class="collect" @click="add" v-if="isShowCollect">收藏</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            item:{
                default(){
                    return{}
                }
            },
            isShowCollect:{
                default:true
            }
        },
        methods:{
            remove(){
                this.$emit('mydel',this.item)

            },
            add(){
                this.$store.commit('addCollect',this.item)
            }
        }
    }

</script>

<style lang="less" scoped>
    .item_box{
        display: flex;
        .img_box{
            width: 2.5rem;
            img{
                width: 100%;
            }
        }
        .content_box{
            flex:1;
            .title{
                font-size: .4rem;
            }
            .desc{
                font-size: .3rem;


            }
            .price_box{
                color:red;
                font-size: .3rem;
            }
            .btn_box{
                display: flex;
                justify-content: space-around;
                button{
                    width: 1.2rem;

                }
            }
        }


    }
</style>