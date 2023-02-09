// 统一管理项目接口的模块
import requests from "./ajax";

// 大文件上传的post接口
export const bigFileUpload = (params) => requests({ url: `/bigFile/upload`, method: "post", data: params });
// 大文件上传的merge接口
export const bigFileMerge = (filename) => requests({ url: `/bigFile/merge?filename=${filename}`, method: 'get' });

export const ererElevenCookieLogin = () => requests({ url: '/ererEleven/cookie/login', method: "get" });
export const ererElevenCookieUser = () => requests({ url: '/ererEleven/cookie/user', method: "get" });

export const erthreeTwoJwt1Sign = (params) => requests({ url: '/erthreeTwo/jwt/sign', method: "post", data: params })
export const erthreeTwoJwt1Check = () => { requests({ url: '/erthreeTwo/jwt/check', method: "get" }) }

// 当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });
// 获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get   
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
// URL:/api/cart/deleteCart/{skuId}   method:DELETE  
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' });