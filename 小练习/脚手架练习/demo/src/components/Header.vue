<template>
  <!-- 页面头部 -->
  <div class="header">
    <slot name="title"></slot>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header{
    height: 100px;
    line-height: 100px;
    text-indent: 20px;
    margin:auto;
    color: #f400ff;
    border-bottom:10px solid #f400ff;
    background-color: #000;
  }
</style>
