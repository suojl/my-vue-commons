<!--  -->
<template>
  <div class="my-scroller-wrapper" ref="myScroller">
    <div class="scroller-content">
      <div class="pull-to-refreash">{{ refreashText }}</div>
      <slot></slot>
      <div class="infinite-loading">{{ loadMoreText }}</div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  props: {},
  components: {},
  data() {
    // 这里存放数据
    return {
      refreashText: "下拉刷新数据",
      loadMoreText: "上拉加载更多",
      isNoMore: false,
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    //监听scrollview的滚动
    listenerScroll() {
      this.$refs.myScroller.addEventListener("scroll", this.isScrolling, true);
    },
    //滚动回调方法
    isScrolling(event) {
      let scrollHeight = event.target.scrollHeight; //内容高度
      let scrollerY = event.target.scrollTop; //滚动的高度
      let offsetHeight = event.target.offsetHeight; //视图高度
      //   console.log(
      //     "scrollHeight:",
      //     scrollHeight,
      //     "scrollerY",
      //     scrollerY,
      //     "offsetHeight",
      //     offsetHeight
      //   );
      let overtopY = scrollHeight - scrollerY - offsetHeight;
    //   console.log("距离底部:", overtopY);
      console.log("距离顶部:", scrollerY);

      if (scrollerY < -50 ) {
        this.refreashText = "松开刷新";
      } else {
        this.refreashText = "下拉刷新数据";

        // if (this.isNoMore) {
        //   this.loadMoreText = "没有数据了~";
        // } else {
        //   if (overtopY < 50 && this.loadMoreText != "上拉加载更多") {
        //     this.isLoading = true;
        //     this.loadMoreText = "加载中...";
        //   } else {
        //     if (overtopY < -10) {
        //       this.loadMoreText = "加载中...";
        //     } else {
        //       this.loadMoreText = "上拉加载更多";
        //     }
        //   }
        // }
      }
    },
    onLoading() {},
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.listenerScroll();
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
// @import url(); 引入公共css类
.my-scroller-wrapper {
  position: absolute;
  width: 100%;
  height: calc(100% + 50px);
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  transform: translateY(-50px);
  z-index: 0;
  z-index: 100;
}
.pull-to-refreash {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  // transform: translateY(-50px);
  // background-color: cornflowerblue;
}
.infinite-loading {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
// 隐藏滚动条
.my-scroller-wrapper::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
.scroller-content {
  width: 100%;
  min-height: calc(100% + 1px);
}
.scroller-content::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
</style>