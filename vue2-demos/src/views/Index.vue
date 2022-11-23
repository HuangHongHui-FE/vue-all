<template>
  <div class="Index">
    <header class="head">
      <div class="head_left">
        <img src="../assets/img/index-head.webp" alt="头像" />
        <div>HHH的demos</div>
      </div>

      <div class="head_middle" @click="goUrl()">
        <router-link to="/" class="link">演示</router-link>
        <router-link to="/a" class="link">关于</router-link>
        <!-- 项目链接 -->
        <nav
          v-for="(item, index) in pageData.urls"
          :key="index"
          :data-url="item.url"
        >
          {{ item.name }}<i class="iconfont icon-fenxiang"></i>
        </nav>
      </div>

      <div class="head_right">
        <div @click="goUrl(pageData.gitee_url)">
          <i class="iconfont icon-gitee"></i>
        </div>
        <div @click="changeTheme">
          <i :class="[thmem_icon]"></i>
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
      <section class="left">
        <!-- <LeftAside :data="" /> -->

        <a-menu
          :default-selected-keys="['1']"
          :open-keys.sync="openKeys"
          mode="inline"
          @click="handleClick"
        >
          <a-sub-menu v-for="item in pageData.left_data" :key="item.pid">
            <span slot="title">{{ item.title }}</span>
            <a-menu-item v-for="demo in item.demos" :key="demo.id">
              <router-link to="test2">{{ demo.name }}</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </section>

      <section class="middle">
        <router-view></router-view>
      </section>

      <section class="right">right</section>
      <!-- <router-link to="/iframe">Iframe</router-link> -->
    </section>

    <footer class="footer">
      <div>HHH的demos</div>
    </footer>
  </div>
</template>

<script>
import { setTheme } from "../theme/theme";
import { head_mid_urls, gitee_url } from "../config/url";
// import LeftAside from "../components/Online/LeftAside";

export default {
  name: "HomeView",
  components: {
    // LeftAside,
  },
  data() {
    this.pageData = {
      urls: head_mid_urls,
      gitee_url,
      left_data: [
        {
          title: "2022-11",
          pid: "1",
          demos: [
            {
              id: "1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2",
              path: "test",
              name: "跳转",
            },
            {
              id: "3",
              path: "test2",
              name: "跳转",
            },
            {
              id: "4",
              path: "test",
              name: "跳转",
            },
          ],
        },
        {
          title: "2022-10",
          pid: "2",
          demos: [
            {
              id: "1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2",
              path: "test",
              name: "跳转",
            },
            {
              id: "3",
              path: "test2",
              name: "跳转",
            },
            {
              id: "4",
              path: "test",
              name: "跳转",
            },
          ],
        },
      ],
    };
    return {
      theme: "default",
      thmem_icon: "iconfont icon-taiyang",
      openKeys: ["1"],
      current: ["mail"],
    };
  },
  mounted() {
    this.init(); // 初始化主题
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
    init() {
      setTheme(this.theme);
    },
    changeTheme() {
      if (this.theme === "default") {
        this.theme = "dark";
        this.thmem_icon = "iconfont icon-icon_yejianqingtian";
        this.theme = "dark";
        setTheme("dark");
      } else {
        this.theme = "default";
        this.thmem_icon = "iconfont icon-taiyang";
        setTheme("default");
      }
    },

    // 跳转路由， 第二各参数'out'为外部网站
    goUrl(path) {
      if (path) {
        window.open(path, "_blank");
      } else {
        const url = event.target?.dataset?.url;
        if (url) {
          window.open(url, "_blank");
        }
      }
    },

    handleClick(e) {
      console.log("click", e);
    },
  },
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
    color: @primaryWhite1;
    background-color: @primaryBlack1;
    display: flex;
    height: 8vh;
    &_left {
      &:hover {
        color: @primaryBlue1;
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
        color: @primaryBlue1;
        &::after {
          background-color: @primaryBlue1;
        }
      }
      > a {
        &:hover {
          color: @primaryBlue1;
        }
        color: @primaryWhite1;
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
        color: @primaryWhite1;
        &:hover {
          color: @primaryBlue1;
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
          color: @primaryBlue1;
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
    min-height: 92vh;
    background-color: @white1;
    .left {
      flex: 2;
      padding-right: 1vw;
    }

    .middle {
      // background-color: yellow;
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
  background-color: @white2 !important;
  height: 36px !important;
  border-radius: 10px !important;
  font-weight: 700;
}
:global(.ant-input:hover) {
  border: 3px solid @primaryBlue1 !important;
  background-color: @primaryWhite1 !important;
}
:global(.ant-menu) {
  border: 0 !important;
  padding-right: 2vw !important;
  background-color: @white1 !important;
}
:global(.ant-menu-submenu-title span) {
  font-size: 18px;
  font-weight: 800;
}

:global(.ant-menu-submenu-title) {
  height: 4vh !important;
  line-height: 4vh !important;
  color: @black2 !important;
}

:global(.ant-menu-item) {
  height: 4vh !important;
  line-height: 4vh !important;
  border-radius: 1vw;
  left: 1vw;
}

:global(.ant-menu-item a) {
    color: @black2 !important;

}
:global(.ant-menu-item:not(:last-child)) {
  margin-bottom: 1px !important;
}
:global(.ant-menu-item:hover) {
  background-color: @white2 !important;
}
:global(.ant-menu-item-selected) {
  background-color: @white2 !important;
}
:global(.ant-menu-item-selected::before) {
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  border: 4px solid @primaryBlue1;
  content: "";
}
:global(.ant-menu-item-selected::after) {
  position: absolute;
  border: 0 !important;
}
</style>>
