import Footer1 from './Footer1.vue'
import Footer2 from './Footer2.vue'

const FooterList = [Footer1, Footer2]
// 添加install方法 （插件方法）
const Footer = {
    install: function(Vue) {
        FooterList.forEach(Footer => {
            // 这里 使用每个组件的 name 属性作为组件名
            Vue.component(Footer.name, Footer)
        })
    }
}

// 导出Button
export default Footer
