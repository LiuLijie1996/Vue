<template>
  <!-- 详情页 -->
  <div class="ToDetail">
    <Header>
      <h1 slot="title">{{item.ShopName}}</h1>
    </Header>

    <div class="wrapper" ref="wrapper">
      <ul>
        <li v-for="(value,key,index) of item">{{key}} : {{value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from "./Header";
  import BScroll from "better-scroll";

  export default {
    name: "ToDetail",
    props: ['item'],
    data() {
      return {
        options: {
          click: true,//是否可以点击
          scrollY: true,//纵向滚动
        }
      }
    },
    mounted() {
      let scroll = new BScroll(this.$refs.wrapper, this.options)
    },
    components: {
      Header
    }
  }
</script>

<style scoped>
  .ToDetail {
    position: fixed;
    top: 0;
    width: 750px;
    height: 100%;
    background-color: #99fffc;
  }

  .wrapper {
    position: fixed;
    top: 120px;
    bottom: 0;
    width: 750px;
    overflow: hidden;
  }

  ul {
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
    box-sizing: border-box;
    width: 750px;
    word-wrap: break-word;
    word-break: normal;
  }

  li {
    margin-bottom: 10px;
  }
</style>
