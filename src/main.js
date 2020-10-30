import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import animated from 'animate.css'
// import 'animate.min.css';
// import 'animate.compat.css';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')