import { themes } from "./model";
// 修改页面中的样式变量值
const changeStyle = (obj) => {
  for (const key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]); // css的自定义属性
  }
};
// 改变主题的方法
export const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName); // 保存主题到本地，下次进入使用该主题
  const themeConfig = themes[themeName];
  // 如果有主题名称，那么则采用我们定义的主题
  if (themeConfig) {
    localStorage.setItem("white1", themeConfig.white1); // 保存主题色到本地
    localStorage.setItem("white2", themeConfig.white2); // 保存文字颜色到本地
    localStorage.setItem("black1", themeConfig.black1); // 保存文字颜色到本地
    localStorage.setItem("black2", themeConfig.black2); // 保存文字颜色到本地
    changeStyle(themeConfig); // 改变样式
  } else {
    const themeConfig = {
      white1: localStorage.getItem("white1"),
      white2: localStorage.getItem("white2"),
      black1: localStorage.getItem("black1"),
      black2: localStorage.getItem("black2"),
    };
    changeStyle(themeConfig);
  }
};
