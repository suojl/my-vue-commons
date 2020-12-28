import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueScroller from 'vue-scroller';

import vconsole from 'vconsole';
const v = new vconsole();
Vue.use(VueScroller);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')