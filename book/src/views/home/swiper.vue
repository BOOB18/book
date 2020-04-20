<template>
    <div class="swiper_box">
        {{list}}
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in list"
                     :key="index"
                     class="swiper-slider"
                     :style="`background-image:(url(${item.img})`"
                >


                </div>
                <!--<div class="swiper-slide" style="background-image: url(https://goss.veer.com/creative/vcg/veer/800water/veer-167900876.jpg)"></div>-->
                <!--<div class="swiper-slide" style="background-image: url(https://goss.veer.com/creative/vcg/veer/800water/veer-137441538.jpg)"></div>-->
                <!--<div class="swiper-slide" style="background-image: url(https://goss.veer.com/creative/vcg/veer/800water/veer-302575238.jpg)"></div>-->
                <!--<div class="swiper-slide" style="background-image: url(https://goss.veer.com/creative/vcg/veer/800water/veer-109984904.jpg)"></div>-->

            </div>
            <div class="swiper-pagination"></div>

        </div>
    </div>

</template>

<script>
    import mySwiper from 'swiper'
    export default{
        created(){
            if(this.list.length) return;
            this.$store.dispatch('getBanner')
        },
        mounted(){
            this.init()

        },updated(){

            this.init()
        },
        computed:{
            list(){
                return this.$store.state.bannerList
            }
        },
        methods:{
            init(){
                new mySwiper('.swiper-container',{
                    effect:'cube',
                    grabCursor:true,
                    cubeEffect:{
                        shadow:true,
                        slideShadows:true,
                        shadowOffset:20,
                        shadowScale:0.94,
                    },
                    pagination:{
                        el:'.swiper-pagination'
                    }
                })
            }
        }
    }

</script>

<style  lang="less" scoped>
    .swiper_box{
        position: relative;
        background: #ccc;
        height: 12rem;
        top: 1rem;
    }
    .swiper-container{
        width: 100%;
        height: 100%;
        position: absolute;



    }
    .swiper-slide{
        background-position: center;
        background-size: cover;
    }

</style>
npm install --save swiper/dist/css/swiper.css