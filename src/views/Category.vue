<!--  -->
<template>
  <div class="base-containner">
    <div class="top-view">top view</div>
    <div class="center-view">
      <!-- <scroller>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
        <div class="context-div">sssss</div>
      </scroller> -->
      <my-scroller>
        <template>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
          <div class="context-div">啊啊啊啊</div>
        </template>
      </my-scroller>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import MyScroller from "../components/MyScroller.vue";

export default {
  // import引入的组件需要注入到对象中才能使用
  props: {},
  components: {
    MyScroller,
  },
  data() {
    // 这里存放数据
    return {};
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
.base-containner {
  width: 100%;
  height: calc(100% - 49px);
}
.top-view {
  position: relative;
  background-color: yellowgreen;
  height: 80px;
  z-index: 1;
}
.context-div {
  height: 100px;
  background-color: ivory;
}
.center-view {
  position: relative;
  background-color: coral;
  /* height: 500px; */
  z-index: 0;
  width: 100%;
  height: calc(100% - 80px);
}


@media (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .base-containner {
    height: calc(100% - 59px);
  }
}
</style>