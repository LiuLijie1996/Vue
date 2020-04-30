import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';//默认的请求地址

export default {
  namespaced: true,//允许使用命名空间
  state: {
    list: []
  },

  mutations: {
    //请求到的数据
    mut_list(state, data) {
      state.list = data;
    },

    //添加到购物车
    mut_pro_add(state, data) {
      let item = state.list.find(item => {
        if (item.id === data.id) {
          //减少库存
          item.sku--;

          return item;
        }
      });
    },

    //更改库存
    mut_pro_upDate(state, data) {
      //判断购买数量最大值和最小值
      data.num = Math.min(data.num, data.max);
      data.num = data.num < 0 ? 0 : data.num;

      //查找对应商品,修改库存个数
      state.list.find(item => {
        if (item.id === data.id) {
          item.sku = data.max - data.num;

          return item;
        }
      });
    },

    //删除商品恢复库存
    mut_pro_addOne(state, data) {
      state.list.forEach((item, index) => {
        if (data.id === item.id) {
          item.sku = data.max;
        }
      });
    }
  },

  actions: {
    act_list(cxt) {
      //请求数据
      return new Promise((resolve, reject) => {
        axios.get('/produc').then(({data}) => {
          //保存到list中
          cxt.commit('mut_list', data);

          resolve(data)
        })
      })
    }
  },

  getters: {},
}
