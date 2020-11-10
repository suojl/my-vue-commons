import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueScroller from 'vue-scroller';

Vue.use(VueScroller);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')