<template>
  <div class="produclist">
    <h2>Vuex练习</h2>

    <h3>商品列表</h3>

    <ul>
      <li v-for="item in list">
        <div>
          商品标题: {{item.title}}
        </div>
        <div>
          商品价格: {{item.price}}
        </div>
        <div>
          商品库存: {{item.sku}}
        </div>
        <div>
          <button :disabled="!item.sku" @click="add(item)">
            {{item.sku?'添加到购物车':'库存不足'}}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'vuex';

  export default {
    name: "ProductList",
    data() {
      return {}
    },
    computed: {
      ...mapState("produc", ["list"]),//获取produc下的list,前提命名空间要设置为true
    },
    methods: {
      ...mapActions("produc", ["act_list"]),
      ...mapMutations("produc", ["mut_pro_add"]),
      ...mapMutations("market", ["mut_mar_add"]),

      add(item) {
        //添加到购物车
        this.mut_mar_add(item);

        //减少库存
        this.mut_pro_add(item);
      }
    },

    created() {
      //让仓库请求数据
      this.act_list();
    },
  }
</script>

<style scoped>
  .produclist {
    margin-bottom: 100px;
  }

  ul {
    list-style: none;
    overflow: hidden;
  }

  ul li {
    float: left;
    margin-left: 20px;
    border: 1px solid #000;
    padding: 20px;
  }

  ul li div {
    margin-top: 10px;
  }

  div > button {
    width: 100%;
    padding: 5px 0;
  }
</style>
