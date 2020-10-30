<!--  -->
<template>
  <div class="">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p class="testa" v-if="show">
      </p>
    </transition>
    <div>------------------------</div>

    <button @click="show2 = !show2">Toggle render</button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__bounceIn"
    >
      <!-- <p v-if="show2">hello</p> -->
      <div class="testa" v-if="show2"></div>
    </transition>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
// import animated from 'animate.css' 

export default {
  // import引入的组件需要注入到对象中才能使用
  props: {},
  components: {},
  data() {
    // 这里存放数据
    return {
      show: true,
      show2: true,
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
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.testa{
    width: 30px;
    height: 20px;
    background-color: red;
    margin-left: 50px;
}
</style>