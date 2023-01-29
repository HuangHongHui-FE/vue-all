<template>
  <div>{{ fooCount }}</div>
</template>

<script>
// 在这里导入模块，而不是在 `store/index.js` 中
import fooStoreModule from '../store/modules/foo'

export default {
  asyncData ({ store }) {

    // 惰性注册， 将被 webpack 移动到路由组件的异步 chunk 中
    store.registerModule('foo', fooStoreModule)
    return store.dispatch('foo/inc')
  },

  // 重要信息：当多次访问路由时，避免在客户端重复注册模块。
  destroyed () {
    this.$store.unregisterModule('foo')
  },

  computed: {
    fooCount () {
      return this.$store.state.foo.count
    }
  }
}
</script>