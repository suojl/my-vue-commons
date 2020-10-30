<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-view />
  </div>
</template>

<script>
import TabBarView from "./components/TabBarView.vue";

export default {
  name: 'App',
  components: {
    TabBarView
  }
}
</script>

<style>
@import "common/css/normalize.css";
@import "assets/icon-font/iconfont.css";
</style>
