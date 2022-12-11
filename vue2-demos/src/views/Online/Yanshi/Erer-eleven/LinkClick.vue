<template>
  <div class="navbar">
    <div>
      native修饰符官方介绍：你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用
      v-on 的 .native 修饰符：
      
      <pre class="preCode">
        &lt;custom-component v-on:click.native="onClick" />
      </pre>
    </div>
    <router-link
      v-for="item in list"
      :key="item.path"
      tag="div"
      :to="{ path: item.path }"
      class="nav-list"
    >
      <div class="nav-text" @click="click('home')">{{ item.title }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          path: "/home",
          className: "nav-ico-home",
          title: "首页",
        },
        {
          path: "/list",
          className: "nav-ico-list",
          title: "列表",
        },
      ],
    };
  },
  methods: {
    click(text) {
      console.log(text);
      // 埋点事件
      this.$message.success('触发了router-link的点击埋点事件')
    },
  },
};
</script>


<style scoped lang="less">
    .nav-text{
        font-size: 15px;
        border: 1px solid rgb(17, 13, 13);
        width: 50px;
        text-align: center;
        color: rgb(30, 211, 211);
        background-color: antiquewhite;
        cursor: pointer;
    }
</style>