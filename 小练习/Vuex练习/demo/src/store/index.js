import Vue from 'vue';
import Vuex from 'vuex';
import Con_Ajax from "../Config/ConfigAxios";

Vue.use(Vuex);

//返回实例后的vuex
export default new Vuex.Store({
  //存放所有组件都可以使用的数据
  state: {
    Users: [
      {name: "A", age: ~~(Math.random() * 82 + 18)},
      {name: "B", age: ~~(Math.random() * 82 + 18)},
      {name: "C", age: ~~(Math.random() * 82 + 18)},
      {name: "D", age: ~~(Math.random() * 82 + 18)},
      {name: "E", age: ~~(Math.random() * 82 + 18)},
      {name: "F", age: ~~(Math.random() * 82 + 18)},
      {name: "G", age: ~~(Math.random() * 82 + 18)},
      {name: "H", age: ~~(Math.random() * 82 + 18)},
      {name: "I", age: ~~(Math.random() * 82 + 18)},
      {name: "J", age: ~~(Math.random() * 82 + 18)},
      {name: "K", age: ~~(Math.random() * 82 + 18)},
      {name: "L", age: ~~(Math.random() * 82 + 18)},
      {name: "M", age: ~~(Math.random() * 82 + 18)},
      {name: "N", age: ~~(Math.random() * 82 + 18)},
      {name: "O", age: ~~(Math.random() * 82 + 18)},
      {name: "P", age: ~~(Math.random() * 82 + 18)},
      {name: "R", age: ~~(Math.random() * 82 + 18)},
      {name: "S", age: ~~(Math.random() * 82 + 18)},
      {name: "T", age: ~~(Math.random() * 82 + 18)},
      {name: "U", age: ~~(Math.random() * 82 + 18)},
      {name: "V", age: ~~(Math.random() * 82 + 18)},
      {name: "W", age: ~~(Math.random() * 82 + 18)},
      {name: "X", age: ~~(Math.random() * 82 + 18)},
      {name: "Y", age: ~~(Math.random() * 82 + 18)},
      {name: "Z", age: ~~(Math.random() * 82 + 18)},
    ]
  },

  //存放修改state中数据的方法
  mutations: {
    saveUsers(state, data) {
      console.log(data);
    }
  },

  //放置异步请求数据的方法
  actions: {
    //cxt可以通过commit操作mutations下的方法,cxt.commit('mut_users', res)
    getUsers(cxt, data) {
      console.log(data);
      return new Promise((resolve, reject) => {
        Con_Ajax.get("/login").then(res => {
          resolve(res);
        })
      })
    }
  },

  //获取数据之前进行编译，可以理解为state的计算属性
  getters:{
    xiaoUser({Users}){
      return Users.filter(item=>{
        return item.age <= 40;
      })
    },
    daUser({Users}){
      return Users.filter(item=>{
        return item.age > 40;
      })
    },
  }
})
