<template>
  <div>
    <p>
      nodejs中， res.cookie后，注意控制台cookie， 自动设置cookie,
      发送请求时自动携带cookie
    </p>
    <a-Button @click="login">登录</a-Button>
    <a-Button id="button" @click="sendTongReq">验证用户</a-Button>
  </div>
</template>

<script>
import {
  ererElevenCookieLogin,
  ererElevenCookieUser,
} from "../../../../api/index";
export default {
  name: "erer-eleven-cookie",
  data() {
    return {};
  },
  methods: {
    // 登录，nodejs设置cookie
    login() {
      ererElevenCookieLogin()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendTongReq() {
      ererElevenCookieUser().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>
