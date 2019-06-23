import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery.easing/bower_components/jquery-easing-original/jquery.easing'
// import '../public/js/cd-hero'
// import '../public/js/custom'
// import '../public/js/gmap3'
// import '../public/js/html5shiv'
// import '../public/js/ini.isotope'
// import '../public/js/isotope'
// import '../public/js/jquery'
// import '../public/js/jquery.easing.1.3'
// import '../public/js/jquery.flexslider'
// import '../public/js/owl.carousel'
// import '../public/js/smoothscroll'
// import '../public/js/style-switcher'

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
