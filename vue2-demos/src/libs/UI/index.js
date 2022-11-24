import FiveStars from './components/FiveStars.vue'

const UI = {};


// 组件多的时候
const componentPool = [
    FiveStars
]

UI.install = function (Vue) {
    // Vue.component(FiveStars.name, FiveStars);  // 注册组件，组件名称，组件本身

    componentPool.forEach(component => {
        Vue.component(component.name, component);
    })
}

export default UI;