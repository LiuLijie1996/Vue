<template>
  <div class="market">
    <h3>购物车</h3>

    <ul v-if="list.length!==0">
      <li v-for="item in list" :key="item.id">
        <div>
          商品标题: {{item.title}}
        </div>
        <div>
          商品价格: {{item.price}}
        </div>
        <div>
          购买数量:
          <input
            type="number"
            min="0"
            :max="item.max"
            @input="update(item)"
            v-model="item.num>=item.max?item.max:item.num"
          >
        </div>
        <div>
          小计: {{Math.min(item.num,item.max) * item.price}}
        </div>
        <div>
          <button @click="deleteOne(item)">删除</button>
        </div>
      </li>
    </ul>
    <div v-else>购物车空空如也</div>

    <div class="btn">
      <p>
        共计金额: {{get_total}}
      </p>
      <button @click="total">结算</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'vuex';

  export default {
    name: "Market",
    data() {
      return {}
    },
    computed: {
      ...mapState('market', ['list']),//获取market下的list,前提命名空间要设置为true
      ...mapGetters('market', ['get_total']),//获取market下的get_total,前提命名空间要设置为true
    },
    methods: {
      ...mapActions("market", ["act_list"]),//请求购物车商品的方法
      ...mapMutations("market", ["mut_mar_upDate", "mut_mar_deleteAll", "mut_mar_deleteOne"]),//更改购买数量的方法
      ...mapMutations("produc", ["mut_pro_upDate", "mut_pro_addOne"]),//更改库存数量的方法

      //更改购买数量
      update(item) {
        this.mut_mar_upDate(item);//更改购物车数量
        this.mut_pro_upDate(item);//更改库存
      },

      //结算
      total() {
        //共计金额不等于0时进行结算
        if (this.get_total) {
          alert('结算成功');

          this.list.forEach(item => {
            //商品小计不等于0时进行结算
            let price = item.num * item.price;
            if (price) {
              //移除商品
              this.mut_mar_deleteAll(item);
            }
          })
        }
      },

      //删除商品
      deleteOne(item) {
        //移除商品
        this.mut_mar_deleteOne(item);

        //恢复库存
        this.mut_pro_addOne(item);
      }
    },
    filters: {
      min(item) {
        console.log(item);
        return Math.min(item.num, item.max);
      }
    },
    created() {
      //执行仓库中请求购物车商品的方法
      this.act_list();
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    overflow: hidden;
  }

  ul li {
    float: left;
    width: 200px;
    margin-left: 20px;
    border: 1px solid #000;
    padding: 20px;
  }

  ul li div {
    margin-top: 10px;
  }

  ul li div input {
    width: 100px;
  }

  ul li div > button {
    width: 100%;
    padding: 5px 0;
  }

  .btn {
    margin: 20px;
  }

  .btn button {
    padding: 10px 20px;
  }
</style>
