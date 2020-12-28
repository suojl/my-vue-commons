<!--  -->
<template>
  <div class="tab-bar-wrapper">
    <template v-for="item in tabBars">
      <tab-bar-item :key="item.routePath" v-bind="item">
        <template #item-icon>
          <div :class="['iconfont', item.itemIcon]"></div>
        </template>
        <template #item-icon-active>
          <div :class="['iconfont', item.itemIconActive]"></div>
        </template>
        <template #item-text>
          <font>{{ item.itemTitle }}</font>
        </template>
      </tab-bar-item>
    </template>
    <slot></slot>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import TabBarItem from "./TabBarItem.vue";

export default {
  // import引入的组件需要注入到对象中才能使用
  name: "TabBarController",
  props: {
    needAnimat: Boolean,
    items: {
      type: Array,
      default: () => {
        [
          {
            itemTitle: "首页",
            itemIcon: "",
            itemIconActive: "",
            routePath: "",
            showMark: false,
            markNumber: 0,
            activeColor: "#F56358",
            inactiveColor: "#999999",
            needAnimat: false,
          },
        ];
      },
    },
  },
  components: {
    TabBarItem,
  },
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {
    tabBars() {
      if (this.needAnimat) {
        return this.items.map((item) => {
          item.needAnimat = true
          return item
        });
      }
      return this.items;
    },
  },
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
<style  scoped>
.tab-bar-wrapper {
  width: 100%;
  height: 49px;

  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 2px 2px 10px #ececec;

  display: flex;
  align-items: center; /*交叉轴*/
  flex-flow: row nowrap;
}

@media (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .tab-bar-wrapper {
    padding-bottom: 10px;
  }
}
</style>