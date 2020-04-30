<template>
  <!-- 所有商品 -->
  <div class="list">
    <Header>
      <h1 slot="title">
        {{res.msg}}
      </h1>
    </Header>
    <ul>
      <li v-for="item in res.data" @click="toDetail(item)">
        <img :src="item.ImgUrl" alt="">
      </li>
    </ul>

    <transition name="fade">
      <div v-if="show">
        <router-view :item="item"></router-view>
      </div>
    </transition>


    <Page>
      <span v-for="num in 10" @click="getData(num)">{{num}}</span>
    </Page>
  </div>
</template>

<script>
  import Header from './Header';
  import Page from './Page';

  export default {
    name: "List",
    data() {
      return {
        res: [],
        show: false,
        item: ""
      }
    },
    watch: {
      $route() {
        if (this.$route.path === '/') {
          this.show = false;
        } else if (this.$route.path === '/detail') {
          this.show = true;
        }
      }
    },
    created() {
      this.$axios.get("HotGoods?AppKey=n54w53x66c&type=2&page=1").then(res => {
        console.log(res);
        this.res = res;
      });

      if (this.$route.path === '/detail') {
        this.show = true;
      }
    },
    methods: {
      toDetail(item) {
        this.item = item;
        this.$router.push({
          name: "detail",
        });
        this.show = true;
      },
      getData(num) {
        console.log(num);
        this.$axios.get("HotGoods?AppKey=n54w53x66c&type=2&page=" + num).then(res => {
          console.log(res);
          this.res = res;
        });
      }
    },
    components: {
      Header,
      Page
    }
  }
</script>

<style scoped>
  .list {
    width: 750px;
    overflow: hidden;
    margin: auto;
  }

  ul {
    width: 750px;
    margin-top: 20px;
    overflow: hidden;
    background-color: #fff;
  }

  ul li {
    float: left;
    list-style: none;
    padding: 15px;
    margin: 1px;
  }

  img {
    width: 200px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
