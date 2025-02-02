const { defineConfig } = require('@vue/cli-service')

// 提取antd的less变量文件
// const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const path = require("path");

// const options = {
//   antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
//   stylesDir: path.join(__dirname, "./src/styles/theme"), //主题文件所在文件夹
//   varFile: path.join(__dirname, "./src/styles/theme/variables.less"), // 自定义默认的主题色
//   mainLessFile: path.join(__dirname, "./src/styles/theme/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
//   outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
//   themeVariables: [
//     '@primary-color',
//     '@secondary-color',
//     '@text-color',
//     '@text-color-secondary',
//     '@heading-color',
//     '@layout-body-background',
//     '@layout-header-background'
//   ], //要改变的主题变量
//   indexFileName: "./public/index.html", // index.html所在位置
//   generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
// };

module.exports = defineConfig({
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // modifyVars: {
  //       //   "primary-color": "#1DA57A",
  //       //   "link-color": "#1DA57A",
  //       //   "border-radius-base": "2px"
  //       // },
  //       javascriptEnabled: true
  //     }
  //   }
  // },
  // configureWebpack: {
  //   plugins: [new AntDesignThemePlugin(options)]
  // },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 这个是加上自己的路径
        path.resolve(__dirname, "./src/theme/style.less"),
      ],
    },
  },
  transpileDependencies: true  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
})
