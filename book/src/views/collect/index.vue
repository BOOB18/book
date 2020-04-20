<template>
  <div>
    <mytil>收藏页</mytil>
    <item v-for="item in list "
          :key="item.bookId"
          :item="item"
          isShowCollect="false"
    @mydel="fn"></item>
  </div>
</template>

<script>
    import title from '../../common/title.vue'
    import item from '../list/item.vue'
  export default{

    components:{
        mytil:title,
        item
    },
      computed:{
        list(){
            return this.$store.state.collectData;





        }
      },
      methods:{
        fn(item){
            this.$store.commit('removeCollect',item)


        }
      }
  }
</script>

<style lang="less" scoped>

</style>
