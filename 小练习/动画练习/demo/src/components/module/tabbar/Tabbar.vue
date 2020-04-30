<template>
  <div class="tabbar">
    <ul>
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/classify" tag="li">分类</router-link>
      <router-link to="/shop_car" tag="li">购物车</router-link>
      <router-link to="/my" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  .tabbar{
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    height: 50px;
    background-color: #eee;
  }

  .tabbar>ul{
    display: flex;
    justify-content: space-around;
    line-height:50px;
    list-style: none;
    border-top:1px solid #ccc;
  }
</style>
