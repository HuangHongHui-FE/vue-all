<template>
  <div>
    <button @click="invokeHtmlMethod">调用html种方法</button>
    <div class="iframestyleset">
      <iframe
        name="iframeMap"
        id="iframeMapViewComponent"
        v-bind:src="getPageUrl"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        ref="iframeDom"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "erthree-two-iframe1",
  data() {
    return {
      getPageUrl: "/static/testMsgWithIframe.html?a=1",
    };
  },
  created() {
    // 初始化时为window绑定一个方法
    window.vueDefinedMyProp = (receiveParams) => {
      this.receiveParamsFromHtml(receiveParams);
    };
  },
  methods: {
    receiveParamsFromHtml(res) {
      console.log(res + '666');
    },
    invokeHtmlMethod() {
      window.frames["iframeMap"].lodaTable();
    },
  },
};
</script>
