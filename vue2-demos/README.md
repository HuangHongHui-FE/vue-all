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
			store
			views
			App.vue
			main.js
		babel.config.js
		README.md
	
	README.md
```



##### ant-design的使用

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

