<template>
  <div>
    <mytil>列表页</mytil>
    <item v-for="item in list" :key="item.bookId" :item="item" @mydel="fn"></item>
  </div>
</template>

<script>
    import title from '../../common/title.vue'
    import item from './item.vue'
  export default{
        methods:{
          fn(item){
              this.$store.commit('removeList',item)
          }
        },
    components:{
        mytil:title,
        item
    },
      created(){
          if(this.$store.state.isGetList)return;
        this.$store.dispatch('getListData')
      },
      computed:{
          list(){
              return this.$store.state.listData
          }
      }
  }
</script>

<style lang="less" scoped>

</style>
