<!--  -->
<template>
  <div class="tab-bar-item-wrapper" :style="activeStyle" @click="tabClick">
    <div v-if="needAnimat">
      <div v-show="isActive">
        <transition
          name="bounce"
          enter-active-class="animate__animated animate__bounceIn"
        >
          <div class="tab-bar-content-wrapper" v-show="isActive">
            <div class="icon-wrapper">
              <div class="icon-div">
                <div
                  class="mark"
                  :style="{ backgroundColor: activeColor }"
                  v-show="showMark"
                >
                  <span>{{ showMarkNumber }}</span>
                </div>
                <slot name="item-icon-active"></slot>
              </div>
            </div>
            <div class="text-div"><slot name="item-text"></slot></div>
          </div>
        </transition>
      </div>
    </div>
    <div v-else>
      <div class="tab-bar-content-wrapper" v-show="isActive">
        <div class="icon-wrapper">
          <div class="icon-div">
            <div
              class="mark"
              :style="{ backgroundColor: activeColor }"
              v-show="showMark"
            >
              <span>{{ showMarkNumber }}</span>
            </div>
            <slot name="item-icon-active"></slot>
          </div>
        </div>
        <div class="text-div"><slot name="item-text"></slot></div>
      </div>
    </div>
    <div class="tab-bar-content-wrapper" v-show="!isActive">
      <div class="icon-wrapper">
        <div class="icon-div">
          <div
            class="mark"
            :style="{ backgroundColor: inactiveColor }"
            v-show="showMark"
          >
            <span>{{ showMarkNumber }}</span>
          </div>
          <slot name="item-icon"></slot>
        </div>
      </div>
      <div class="text-div"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  props: {
    //激活颜色
    activeColor: {
      type: String,
      default: "#F56358",
    },
    //未激活颜色
    inactiveColor: {
      type: String,
      default: "#999999",
    },
    //跳转的路由
    routePath: String,
    showMark: false, //是否显示标记符号
    markNumber: Number | String, //标记的数字
    needAnimat: false, //是否需要开启动画
  },
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.routePath) !== -1;
    },
    activeStyle() {
      return this.isActive
        ? { color: this.activeColor }
        : { color: this.inactiveColor };
    },
    showMarkNumber() {
      if (this.markNumber == "0") return "";
      return this.markNumber || "";
    },
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    tabClick() {
      // this.$router.push(this.routePath)
      if (this.isActive) return;

      this.$router.replace(this.routePath);
    },
  },
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
.tab-bar-item-wrapper {
  flex: 1;
  text-align: center;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
}
.tab-bar-item-wrapper .tab-bar-content-wrapper {
  white-space: nowrap;
}
.icon-wrapper {
  display: flex;
  justify-content: center;
}
.icon-div {
  position: relative;
}
.mark {
  position: absolute;
  min-width: 12px;
  height: 12px;
  left: 12px;
  top: -6px;
  border-radius: 50%;
  line-height: 12px;

  color: #fff;
  font-size: 8px;
  text-align: center;

  border: 1px solid #fff;
}
.mark span{
  margin: 0 2px;
}
.text-div {
  padding-top: 2px;
}
</style>