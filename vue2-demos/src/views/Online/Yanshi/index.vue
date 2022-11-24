<template>
  <div class="content">
    <section class="left">
      <a-menu
        :default-selected-keys="['1-1']"
        :open-keys.sync="openKeys"
        mode="inline"
      >
        <a-sub-menu v-for="item in pageData.left_data" :key="item.pid">
          <span slot="title">{{ item.title }}</span>
          <a-menu-item v-for="demo in item.demos" :key="demo.id">
            <router-link :to="demo.path">{{ demo.name }}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </section>

    <section class="middle">
      <router-view></router-view>
    </section>

    <section class="right">right</section>
  </div>
</template>



<script>
import { head_mid_urls, gitee_url } from "../../../config/url";
export default {
  name: "yan_shi",
  data() {
    this.pageData = {
      urls: head_mid_urls,
      gitee_url,
      left_data: [
        {
          title: "组件封装",
          pid: "1",
          demos: [
            {
              id: "1-1",
              path: "dialog",
              name: "diolog组件",
            },
            {
              id: "1-2",
              path: "test",
              name: "跳转",
            },
          ],
        },
        {
          title: "2022-11",
          pid: "2",
          demos: [
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
            {
              id: "2-1",
              path: "test2",
              name: "跳转",
            },
            {
              id: "2-2",
              path: "test",
              name: "跳转",
            },
          ],
        },
      ],
    };
    return {
      openKeys: ["1"],
    };
  },
};
</script>


<style scoped lang="less">
.content {
  display: flex;
  padding: 0 4vw;
  min-height: 92vh;
  background-color: @white1;
  height: 92px;
  position: relative;
  .left {
    flex: 2;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: @white2;
    }
    &::-webkit-scrollbar-thumb {
      background: @black2;
      border-radius: 10px;
    }
  }

  .middle {
    // background-color: yellow;
    flex: 6;
    padding: 30px;

  }

  .right {
    // background-color: blue;
    flex: 2;
  }
}

:global(.ant-menu) {
  border: 0 !important;
  padding-right: 2vw !important;
  background-color: @white1 !important;
  width:18vw !important;
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
  border-radius: 5px;
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
</style>
