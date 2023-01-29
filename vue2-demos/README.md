# vue2-demos

vue2+and-design+less

### 目录结构

```
VUE-all
	vue2-demo
		public
		src
			assets
			components
			config
				antd_design_vue				// antd design组件的按需引入
				url							// 首页用到的外部URL
			libs							// 封装UI组件
			router							// 路由配置
			store							// Vuex状态管理
			views
			App.vue
			main.js
		babel.config.js
		README.md
	
	README.md
```

##### ant-design-vue1.多对应vue2版本;

UI文档：https://1x.antdv.com/components/button-cn/

##### ant-design的使用：

### 2022-11 --- 两套路由配置

```
router
	index.js
```

原理： Online与H5， 通过navigator.userAgent来进行不同设备的跳转。

注意： 同时想要实现在页面为online同时路由不为首页时，也可以切换到H5对应的页面。需要在每个页中加前置路由守卫。不为同设备时跳转进同设备对应的下的路由。

### 2022-11 --- 首页

仿react-native中文网，https://reactnative.cn/docs/getting-started

#### 动画animation

https://www.jianshu.com/p/b7a9349d2630

#### 更改antd-design-vue样式

css module针对全局的样式（使用`:global`包裹的），不会将类名进行hash化，换句话来说，我们可以利用这一点，将antd组件外部用来精细化控制样式的类定义在`:global`中，这样就避免了类名hash化，可以配合antd的类名规则，实现样式控制。

https://blog.csdn.net/qq_43382853/article/details/108324623

#### 首页换肤（更改主题）

CSS Variables（CSS变量，又名CSS自定义属性）:               https://juejin.cn/post/6844903601819615240

##### 分析

颜色：

- 黑： dark_1, dark_2
- 白：white1, white2

有改动的地方

- 头部：
  - 搜索框：白 -> 黑        white2  ->  dark_2
- content:
  - left：
    - 字体： 黑 -> 白        dark_1  -> white1         dark_2 -> white2
    - 背景：白 -> 黑         dark_1  -> white1



.........

##### 方案1： 

采用ant-design-vue的主题方案。（适合多种主题切换，大量）

- https://blog.csdn.net/qq_24922757/article/details/90483983                modifyVars
- 类型https://github.com/vueComponent/ant-design-vue/blob/next/components/style/themes/default.less      ant所有主题类型

##### 方案2： 

采用css Varables方案，自定义主题。（适合自定义主题变量，少量）

- https://juejin.cn/post/7041749661404626980#heading-12
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/var       var的俩参数

### 大文件上传

### cookie相关

### 拦截器结合取消重复请求

https://wubin.work/blog/articles/238

注意判断是否是主动取消的请求



### 移动端单位布局适配

##### postcss-px-to-viewport

原理： px转vw



1500px  --   

750px   ---   100vh

换算下来，按照rn官网的所有px / 2就对了

1vw = 750px

1vh = 3.75px

注意指定不转换的文件夹与iconfont类名

https://blog.csdn.net/hh3167253066/article/details/120338857?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167065304516800192259957%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167065304516800192259957&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-120338857-null-null.nonecase&utm_term=postcss&spm=1018.2226.3001.4450

##### lib-flexible + postcss-px2rem postcss-loader

原理：px转rem

https://tiven.cn/p/b1ab6b72/









webpack配置：

https://segmentfault.com/a/1190000038447000

https://www.cnblogs.com/ypSharing/p/vue-webpack.html

vue cli配置：

https://cli.vuejs.org/zh/config/

优化chunk体积的， 提取出公共代码

https://tiven.cn/p/edae9a97/



### 优化点：

- ##### 不需要双向绑定的数据：


```js
data() {
    this.pageData = {   // 
      gitee_url,
      vue3_constelation_url,
      vue3_visual_url,
      node_all_url,
      react_all_url,
      vue_all_url,
    };
    return {
      theme: "default",
      thmem_icon: "iconfont icon-taiyang",
    };
  },
```

- ##### 重复请求优化

  见”拦截器结合取消重复请求“

### ERROR

##### 跨域情况下的cookie

跨域情况下的set-cookie：

1. 前端设置with-credentials:true，后端即使不设置CORS头也可set-cookie成功
2. 前端不设置with-credentials或者false，set-cookie响应头会被直接忽略

cors需要设置

https://segmentfault.com/a/1190000011811117
