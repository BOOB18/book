<template>
  <div class="views">
    <router-view/>
    <div class="nav">
      <router-link to="/home">
        <div class="iconfont icon-home"></div>
        <div>首页</div>
        </router-link>
      <router-link to="/list">
        <div class="iconfont icon-list"></div>
        <div>列表页</div>
        </router-link>
      <router-link to="/collect">
        <div class="iconfont icon-shoucang"></div>
        <div>收藏页</div>
        </router-link>
      <router-link to="/add">
        <div class="iconfont icon-tianjia"></div>
        <div>增加页</div>
        </router-link>
    </div>
  </div>
</template>


<style lang="less">

  .nav{
    position: fixed;
    bottom: 0;
    background: #fff;
    left:0;
    width: 100%;
    height: 2rem;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    box-shadow: 0 -0.02rem 0.1rem 0 #ccc ;
    a{
      flex:1;
      text-align: center;
      &.current{
        color: aquamarine;
      }

    }
  }

</style>
