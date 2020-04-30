<template>
  <div class="SliderTransition">
    <transition :name="name">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "SliderTransition",
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .center {
    position: absolute;
    width: 100%;
  }


  /* 进入过渡生效时的状态 */
  .left-enter-active {
    transform: translateX(100%);
    transition: 2s;
  }

  /* 进入过渡的结束状态 */
  .left-enter-to {
    transform: translateX(0%);
  }


  /* 离开过渡生效时的状态 */
  .left-leave-active {
    transform: translateX(0%);
    transition: 2s;
  }

  /* 离开过渡的结束状态 */
  .left-leave-to {
    transform: translateX(-100%);
  }


  /* 进入过渡生效时的状态 */
  .right-enter-active {
    transform: translateX(-100%);
    transition: 2s;
  }

  /* 进入过渡的结束状态 */
  .right-enter-to {
    transform: translateX(0px);
  }


  /* 离开过渡生效时的状态 */
  .right-leave-active {
    transform: translateX(0px);
    transition: 2s;
  }

  /* 离开过渡的结束状态 */
  .right-leave-to {
    transform: translateX(100%);
  }
</style>
