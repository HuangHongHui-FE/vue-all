<template>
  <div class="content">
    <section class="left">
      <a-menu
        :default-selected-keys="defaultSelect"
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

  // 修复左边默认选中, 默认展开, 会触发一次updated
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next((vm) => {
      const left = vm.pageData.left_data;
      for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < left[i].demos.length; j++) {
          if (left[i].demos[j].path.substr(2) === to.path.substr(7)) {
            vm.defaultSelect.splice(0, 1, left[i].demos[j].id);
            vm.openKeys.splice(0, 1, left[i].pid);
          }
        }
      }
    });
  },
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
              path: "../com/dialog",
              name: "diolog组件",
            },
            {
              id: "1-2",
              path: "../com/five-stars",
              name: "五星好评-UI",
            },
          ],
        },
        {
          title: "大文件上传",
          pid: "2",
          demos: [
            {
              id: "2-1",
              path: "../big-file/basic",
              name: "basic",
            },
            {
              id: "2-2",
              path: "../big-file/pool",
              name: "pool",
            },
          ],
        },
        {
          title: "2022-11",
          pid: "999",
          demos: [
            {
              id: "10-1",
              path: "../erer-eleven/cookie",
              name: "cookie",
            },
            {
              id: "10-2",
              path: "../erer-eleven/link-click",
              name: "linkClick",
            },
          ],
        },
      ],
    };
    return {
      openKeys: ["1"],
      // 默认选中的·侧边栏
      defaultSelect: ["1-1"],
    };
  },
};
</script>


<style scoped lang="less">
@media screen and (min-width: 1000px) {
  .content {
    display: flex;
    padding: 0 30px;
    min-height: 345px;
    background-color: @white1;
    height: 46px;
    position: relative;
    .left {
      flex: 2;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 3px;
        background-color: @white2;
      }
      &::-webkit-scrollbar-thumb {
        background: @black2;
        border-radius: 5px;
      }
    }

    .middle {
      flex: 6;
      padding: 15px;
    }

    .right {
      flex: 2;
    }
  }
}

@media screen and (max-width: 1000px) {
  .content {
    display: none;
    padding: 0 30px;
    min-height: 345px;
    background-color: @white1;
    height: 46px;
    position: relative;
    .left {
      flex: 2;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 3px;
        background-color: @white2;
      }
      &::-webkit-scrollbar-thumb {
        background: @black2;
        border-radius: 5px;
      }
    }

    .middle {
      display: none;
    }

    .right {
      display: none;
    }
  }
}

// 自定义组件样式
:global(.ant-menu) {
  border: 0 !important;
  padding-right: 15px !important;
  background-color: @white1 !important;
  width: 135px !important;
}
:global(.ant-menu-submenu-title span) {
  font-size: 9px;
  font-weight: 800;
}

:global(.ant-menu-submenu-title) {
  height: 15px !important;
  line-height: 15px !important;
  color: @black2 !important;
}

:global(.ant-menu-item) {
  height: 15px !important;
  line-height: 15px !important;
  border-radius: 2.5px;
  left: 7.5px;
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
  border: 2px solid @primaryBlue1;
  content: "";
}
:global(.ant-menu-item-selected::after) {
  position: absolute;
  border: 0 !important;
}
</style>
