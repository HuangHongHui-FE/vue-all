import { Button, message, ConfigProvider, Input, Tooltip } from 'ant-design-vue';
const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.component(ConfigProvider.name, ConfigProvider);
        Vue.component(Input.name, Input)
        Vue.component(Tooltip.name, Tooltip)
        Vue.prototype.$message = message;
    }
};
export default ant;