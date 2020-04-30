<template>
  <div class="Page">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Page",
  }
</script>

<style scoped>
  .Page{
    display: flex;
    justify-content: center;
    margin:10px 0;
  }

  span{
    display: inline-block;
    padding:5px;
    margin: 5px;
    cursor: pointer;
    background-color: #fff;
  }
</style>
