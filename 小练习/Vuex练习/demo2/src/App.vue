<template>
  <div id="app">
    <ProductList></ProductList>
    <Market></Market>
  </div>
</template>

<script>
  import ProductList from "./components/ProductList";
  import Market from "./components/Market";
  export default {
    name: 'App',
    components:{
      ProductList,
      Market,
    }
  }
</script>

<style>

</style>
