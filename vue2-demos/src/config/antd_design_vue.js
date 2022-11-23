import { Button, message, ConfigProvider, Input, Tooltip, Menu, Icon } from 'ant-design-vue';
const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.component(ConfigProvider.name, ConfigProvider);
        Vue.component(Input.name, Input);
        Vue.component(Tooltip.name, Tooltip);
        Vue.component(Menu.name, Menu);
        Vue.component(Menu.Item.name, Menu.Item);
        Vue.component(Menu.Item.name, Menu.Item);
        Vue.component(Menu.SubMenu.name, Menu.SubMenu);
        Vue.component(Icon.name, Icon);
        Vue.prototype.$message = message;
    }
};
export default ant;