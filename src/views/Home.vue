<!--  -->
<template>
  <div class="">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p class="testa" v-if="show"></p>
    </transition>
    <div>------------------------</div>

    <button @click="show2 = !show2">Toggle render</button>
    <!-- <transition appear
      name="custom-classes-transition"
      enter-active-class="bounce-enter-active"
      leave-active-class="bounce-leave-active"
    >
      <div class="testa" v-if="show2"></div>
    </transition> -->

    <!-- 使用 animate__ 动画 -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show2">hello</p>
    </transition>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import animated from "animate.css"; //使用 animate__ 动画

export default {
  // import引入的组件需要注入到对象中才能使用
  props: {},
  components: {},
  data() {
    // 这里存放数据
    return {
      show: false,
      show2: false,
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 3s linear;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse linear;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.6) translateX(110px);
    opacity: 0;
  }
  50% {
    transform: scale(0.8) translateX(55px);
    opacity: 0.5;
    /* transform: translateX(55px); */
  }
  100% {
    transform: scale(1) translateX(0px);
    opacity: 1;
    /* transform: translateX(0px); */
  }
}

.testa {
  width: 80%;
  height: 200px;
  background-color: cornflowerblue;
  margin-left: 50px;
}
.test-background {
  background-color: darkolivegreen;
}
.appear {
  background-color: red;
}
</style>