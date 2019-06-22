import HeaderComponent from './Header.vue'

// 添加install方法 （插件方法）
const Header = {
    install: function(Vue) {
        Vue.component('Header', HeaderComponent)
    }
}

// 导出Header
export default Header
