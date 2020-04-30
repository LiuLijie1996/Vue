import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ToDetail from '@/components/ToDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'detail',
          name:"detail",
          component:ToDetail
        }
      ]
    }
  ]
})
