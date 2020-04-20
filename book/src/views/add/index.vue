<template>
  <div>
    <mytil>添加页</mytil>
    <div class="inp_box">
      <input type="text" placeholder="书名" v-model="name">
      <input type="text" placeholder="书的信息" v-model="desc">
      <input type="text" placeholder="书的价格"
             v-model="price">
      <button>添加</button>
    </div>
  </div>
</template>

<script>
    import title from '../../common/title.vue'
    export default{
        data(){
          return {
              name:'',
              desc:'',
              price:''
          }
        },
        components:{
            mytil:title
        },
        methods:{
            add(){
                let obj ={
                bookName:this.name,
                    bookInfo:this.desc,
                    bookPrice:this.price,
                    bookId:math.random()
            };
                this.$store.commit('addList',obj)
                this.$router.push('/list')
        }
    }}
</script>

<style lang="less" scoped>
  .inp_box{
    margin: 1.2rem 0;
    text-align: center;
    input{
      border:1px solid #ccc;
      border-radius: 5px;
      height: 0.6rem;
      width: 60%;
    }
    button{
      font-size: 0.4rem;
    }
  }
</style>
