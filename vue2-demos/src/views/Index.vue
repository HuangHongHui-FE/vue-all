<template>
  <div class="Index">
    <header class="head">
      <div class="head_left">
        <img src="../assets/img/index-head.webp" alt="头像" />
        <div>HHH的demos</div>
      </div>
      <div class="head_middle">
        <router-link to="/" class="link">演示</router-link>
        <router-link to="/a" class="link">关于</router-link>
        <nav>星座物语<i class="iconfont icon-fenxiang"></i></nav>
        <nav>funguy<i class="iconfont icon-fenxiang"></i></nav>
        <nav>交友<i class="iconfont icon-fenxiang"></i></nav>
        <nav>讨论<i class="iconfont icon-fenxiang"></i></nav>
      </div>
      <div class="head_right">
        <div>
          <i class="iconfont icon-gitee"></i>
        </div>
        <div>
          <i class="iconfont icon-taiyang"></i>
        </div>
        <div class="head_right_input">
          <a-input placeholder="Search">
            <i slot="prefix" class="iconfont icon-sousuo"></i>
            <a-tooltip slot="suffix" title="Ender ctrl+K to Search">
              <i class="iconfont icon-enterinto"></i>
            </a-tooltip>
          </a-input>
        </div>
      </div>
    </header>

    <section class="content">
      <section class="left">left</section>
      <section class="middle">中间</section>

      <section class="right">right</section>
      <!-- <router-link to="/iframe">Iframe</router-link> -->
    </section>

    <footer class="footer">
      <div>HHH的demos</div>
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
  // background-color: @hhh;
  display: flex;
  flex-direction: column;
  .head {
    padding: 0 4vw;
    font-size: 17px;
    color: rgb(245, 246, 247);
    background-color: rgb(32, 35, 42);
    display: flex;
    height: 8vh;
    &_left {
      &:hover {
        color: rgb(63, 208, 249);
        img {
          animation: imgCyc 600ms ease;
          animation-fill-mode: forwards;
        }
      }
      line-height: 8vh;
      cursor: pointer;
      flex: 2;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 700;
      img {
        width: 6vh;
        height: 6vh;
        border-radius: 50%;
      }
      div {
        padding-left: 1vh;
        line-height: 6vh;
      }
    }
    &_middle {
      flex: 5;
      display: flex;
      justify-content: space-around;
      line-height: 8vh;

      // active路由
      .active {
        color: rgb(63, 208, 249);
        &::after {
          background-color: rgb(63, 208, 249);
        }
      }
      > a {
        &:hover {
          color: rgb(63, 208, 249);
        }
        color: rgb(245, 246, 247);
        cursor: pointer;
        position: relative;
        &::after {
          position: absolute;
          text-align: center;
          bottom: 0;
          left: 50%;
          content: "";
          transform: translateX(-50%);
          width: 70px;
          height: 4px;
        }
      }
      > nav {
        cursor: pointer;
        color: rgb(245, 246, 247);
        &:hover {
          color: rgb(63, 208, 249);
        }
      }
    }
    &_right {
      flex: 2;
      display: flex;
      align-items: center;
      cursor: pointer;
      div {
        flex: 1;
        > i {
          font-size: 26px;
        }
        &:hover {
          color: rgb(63, 208, 249);
        }
      }
      div:nth-last-child(1) {
        flex: 3;
      }
      &_input {
      }
    }
  }

  .content {
    padding: 0 4vw;
    display: flex;
    height: 92vh;
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
    padding: 0 4vw;

    background-color: rgb(225, 141, 39);
  }

  @keyframes imgCyc {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

// 更改antd的默认样式
:global(.ant-input) {
  background-color: rgb(221, 224, 228) !important;
  height: 36px !important;
  border-radius: 10px !important;
  font-weight: 700;
}
:global(.ant-input:hover) {
  border: 3px solid rgb(63, 208, 249) !important;
  background-color: rgb(245, 246, 247) !important;
}
</style>>
