import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import '../public/js/style-switcher.js'
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')