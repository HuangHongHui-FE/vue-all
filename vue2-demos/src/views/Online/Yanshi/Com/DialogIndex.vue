<template>
  <div>
    <div @click="openMask" class="open_mask">打开弹窗</div>
    <dialog-com
      v-model="sendVal"
      type="danger"
      title="我是标题"
      content="我是内容"
      v-on:cancel="clickCancel()"
      @danger="clickDanger()"
      @confirm="clickConfirm()"
      dangerText="Delete"
    ></dialog-com>
  </div>
</template>

<script>
import DialogCom from "../../../../components/Dialog.vue";
export default {
  name: "dialog-index",
  components: {
    "dialog-com": DialogCom,
  },
  data() {
    return {
      sendVal: false,
    };
  },
  methods: {
    openMask(index) {
      this.sendVal = true;
    },
    clickCancel() {
      console.log("点击了取消");
    },
    clickDanger() {
      console.log("这里是danger回调");
    },
    clickConfirm() {
      console.log("点击了confirm");
    },
  },
};
</script>

<style scoped lang="less">
  .open_mask{
    color: @black1;
  }
</style>



