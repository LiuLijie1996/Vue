import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/views/home/Home";
import Classify from "../components/views/classify/Classify";
import ShopCar from "../components/views/shopCar/ShopCar";
import My from "../components/views/my/My";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/",
      name:"home",
      component:Home,
      meta:{
        title:"首页",
        index:0
      }
    },
    {
      path:"/classify",
      name:"classify",
      component:Classify,
      meta:{
        title:"分类",
        index:1
      }
    },
    {
      path:"/shop_car",
      name:"shop_car",
      component:ShopCar,
      meta:{
        title:"购物车",
        index:2
      }
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        title:"我的",
        index:3
      }
    },
  ]
})
