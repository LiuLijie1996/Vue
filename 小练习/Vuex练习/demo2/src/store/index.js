import Vue from 'vue';
import Vuex from 'vuex';

import produclist from './modules/produclist';
import market from './modules/market';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    produc: produclist,//produc表示: 给produclist取得另一个名字
    market: market
  }
})
