<template>
  <div>
    <mytil>首页
    </mytil>
    <my-swiper></my-swiper>
    <hotbook></hotbook>
  </div>
</template>

<script>
  import title from '../../common/title.vue'
  import mySwiper from './swiper.vue'
  import hotbook from './hotbook.vue'
  export default{
    data(){
        return{
            name:'zhufeng'
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        }
    },
    components:{
        mytil:title,
        'my-swiper':mySwiper,
        hotbook
    }
  }
</script>

<style lang="less" scoped>

</style>
