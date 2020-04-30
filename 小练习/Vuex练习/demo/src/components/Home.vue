<template>
  <div class="home">
    <button @click="all">全部用户</button>
    <button @click="da">大龄用户</button>
    <button @click="xiao">年轻用户</button>

    <ul>
      <li v-for="item in user">
        <span v-for="(value, key, index) in item">
           {{key}} : {{value}};
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';

  export default {
    name: 'home',
    data() {
      return {
        user:[]
      }
    },

    computed: {
      ...mapState({//从仓库中国获取state下的Users属性
        'stateUser':'Users'
      }),
      ...mapGetters(['xiaoUser']),//从仓库中国获取getters下的xiaoUser属性
      ...mapGetters(['daUser']),//从仓库中国获取getters下的daUser属性
    },
    methods: {
      ...mapMutations(['saveUsers']),//从仓库中国获取actions下的mut_users属性
      ...mapActions(['getUsers']),//从仓库中国获取actions下的mut_users属性

      all(){
        this.user = this.stateUser
      },
      da(){
        this.user = this.daUser
      },
      xiao(){
        this.user = this.xiaoUser
      }
    },
    mounted() {
      this.user = this.stateUser;
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
