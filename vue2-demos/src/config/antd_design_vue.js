import { Button, message, ConfigProvider } from 'ant-design-vue';
const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.component(ConfigProvider.name, ConfigProvider);
        Vue.prototype.$message = message;
    }
};
export default ant;