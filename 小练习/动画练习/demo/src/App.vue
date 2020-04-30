<template>
  <div id="app">

    <SliderTransition :name="name">
      <router-view class="center"/>
    </SliderTransition>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/module/tabbar/Tabbar';
  import SliderTransition from './components/module/SliderTransition/SliderTransition';

  export default {
    name: 'App',
    data() {
      return {
        name: ''
      }
    },

    watch: {
      $route(to, from) {
        if (to.meta.index < from.meta.index) {
          this.name = 'right'
        }else{
          this.name = 'left'
        }
      }
    },

    components: {
      Tabbar,
      SliderTransition
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app{
    position:fixed;
    left:0;
    right:0;
  }
</style>
