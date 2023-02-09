<template>
  <div>
    <a-button type="primary" block @click="signUp"> 登录 </a-button>
    <a-button type="primary" block @click="signCheck"> 验证 </a-button>
  </div>
</template>

<script>
import JSEncrypt from "jsencrypt";
import Qs from "qs";
import { erthreeTwoJwt1Sign, erthreeTwoJwt1Check } from "../../../../api/index";
export default {
  name: "erthree-two-jwt1",
  data() {
    return {
      pubKey:
        "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMy13LHb7iKbHONjjL/Rs5dMRsp1rRS5WHc9ZI0MfKpYEAGaOrOEvqqIVBb9a+5CGhMOvPX2qFrC1VOySHvw9lkCAwEAAQ==-----END PUBLIC KEY-----",
      username: "admin",
      password: "123457",
      token: null,
    };
  },
  created() {},
  methods: {
    signUp() {
      var encryptor = new JSEncrypt();
      encryptor.setPublicKey(this.pubKey);
      var rsaPasswordUsername = encryptor.encrypt(this.username + "---" + this.password);

      // Qs处理下再传
      const params = Qs.stringify({
        rsaPasswordUsername,
      });
      erthreeTwoJwt1Sign(params).then(
        (res) => {
          // console.log(res);
          this.token = res.data.token;
          window.localStorage.setItem("token", res.data.token);
        },
        (err) => {
          console.log("erthreeTwoJwt1Sign-err---", err);
        }
      );
    },
    signCheck() {
      erthreeTwoJwt1Check().then(res => {
        console.log(res);
      }, err => {
        console.log('checkERR---', err);
      })
    },
  },
};
</script>
