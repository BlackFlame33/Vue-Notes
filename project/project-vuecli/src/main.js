import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery.easing/bower_components/jquery-easing-original/jquery.easing'

import Header from '@/components/Header.js'
Vue.use(Header)

import Footer from '@/components/Footer.js'
Vue.use(Footer)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    $,
    render: h => h(App)
}).$mount('#app')
