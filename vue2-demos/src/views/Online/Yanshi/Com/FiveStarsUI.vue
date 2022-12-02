<template>
  <div>
    <div>点击后注意控制台触发的回调函数的结果！</div>
    <!-- 默认点亮的星星个数，以及星星的大小 -->
    <FiveStars :num="starNum" :size="size" @getStarNum="getStarNum" />
  </div>
</template>

<script>
// import FiveStars from './libs/UI/components/FiveStars.vue'

export default {
  name: "five_stars",
  components: {
    // FiveStars
  },
  data() {
    return {
      // 星星数，星星大小
      starNum: 3,
      size: 30,
    };
  },
  methods: {
    getStarNum(number) {
      this.starNum = number;
      // 这里获取到选择的星星
      console.log(this.starNum);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
