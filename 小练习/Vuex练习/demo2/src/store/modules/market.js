import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';//默认的请求地址

export default {
  namespaced: true,//允许使用命名空间
  state: {
    list: []
  },

  mutations: {
    //获取购物车的商品
    mut_list(state, data) {
      state.list = data;
    },

    //添加到购物车
    mut_mar_add(state, data) {
      //查找购物车有没有这个商品
      let item = state.list.find(item => {
        if (item.id === data.id) {
          //增加购买数量
          item.num++;

          return item;
        }
      });

      //如果购物车中没有这个商品
      if (!item) {
        state.list.push({
          id: data.id,
          title: data.title,
          price: data.price,
          num: 1,
          max: data.sku,//最多能买多少个
        })
      }
    },

    //更改购买数量
    mut_mar_upDate(state, data) {
      //判断购买数量最大值和最小值
      data.num = Math.min(data.num, data.max);
      data.num = data.num < 0 ? 0 : data.num;

      //查找对应商品,修改购买个数
      let item = state.list.find(item => {
        if (item.id === data.id) {
          item.num = data.num;

          return item;
        }
      });
    },

    //结算后将购物车中的商品移除
    mut_mar_deleteAll(state, data) {
      setTimeout(() => {
        state.list.forEach((item, index) => {
          if (data.id === item.id) {
            state.list.splice(index, 1);
          }
        });
      })
    },

    //删除购物车商品
    mut_mar_deleteOne(state, data) {
      state.list.forEach((item, index) => {
        if (data.id === item.id) {
          state.list.splice(index, 1);
        }
      });
    }
  },

  actions: {
    act_list(cxt) {
      //请求数据
      return new Promise((resolve, reject) => {
        axios.get('/market').then(({data}) => {
          //保存到list中
          cxt.commit('mut_list', data);

          resolve(data)
        })
      })
    }
  },

  getters: {
    get_total(state) {
      return state.list.reduce((pre, next) => {
        return pre + next.num * next.price;
      }, 0)
    }
  },
}
