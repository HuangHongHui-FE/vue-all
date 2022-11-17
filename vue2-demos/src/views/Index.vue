<template>
  <div class="Index">
    <header class="head">
      <div class="head_left">
        <img src="../assets/img/index-head.webp" alt="头像">
        <p>追风筝的人的demos</p>
      </div>
      <div></div>
    </header>

    <section class="content">
      <section>head_left</section>
      <section class="middle">中间</section>

      <section class="right">right</section>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/iframe">Iframe</router-link> -->
    </section>

    <footer class="footer">
      <div>底部</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>



<style scoped lang="less">
.Index {
  display: flex;
  flex-direction: column;
  .head {
    background-color: rgb(32, 35, 42);
    display: flex;
    height: 80px;
  }

  .content {
    background-color: aquamarine;
    display: flex;

    .left {
      background-color: azure;
      flex: 2;
    }

    .middle {
      background-color: yellow;
      flex: 5;
    }

    .right {
      background-color: blue;
      flex: 2;
    }
  }

  .footer {
    background-color: rgb(225, 141, 39);
  }
}
</style>>
