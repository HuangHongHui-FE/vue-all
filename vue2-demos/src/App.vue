<template>

<!-- 国际化配置 -->
  <a-config-provider :locale="en_US">
    <div id="app">
      <!-- <a-button type="primary">按钮 Button</a-button> -->
      <router-view />
    </div>
  </a-config-provider>
</template>

<style lang="less">
#app {
  // 为了换肤，需要统一设置字体color
  color: @black2;
}
</style>


<script>
import en_US from "ant-design-vue/lib/locale-provider/en_US";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale('zh-cn');

export default {
  name: "App",
  data() {
    return {
      en_US,
    };
  },
};
</script>

