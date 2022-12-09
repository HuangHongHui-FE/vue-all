import axios from 'axios'

import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { cancelPending, addPending, removePending } from './reReqCancel'

const requests = axios.create({
    baseURL: 'http://127.0.0.1:3000/vue-all',
    // res.cookie可以自动设置cookie
    withCredentials: true,
    timeout: 50000
});

requests.interceptors.request.use(config => {
    // console.log('config---', config);
    nProgress.start();

    // 配置该接口是否需要检测查复请求
    config.useCancelToken = true;
    // 发送请求前首先检查该请求是否已经重复，重复则进行取消并移除
    cancelPending(config);
    // 添加该请求到pendingList中
    addPending(config);

    return config
});

requests.interceptors.response.use((res) => {
    nProgress.done();

    const config = res.config;
    // 请求完成后移除该请求
    removePending(config);

    // console.log('res---', res.data);
    return res.data
}, (error) => {
    nProgress.done()

    // 判断当前请求是否是主动取消
    if (axios.isCancel(error)) {
        console.warn('重复请求--' + error.message);
        return;
    }
    return Promise.reject(new Error(error))
})

export default requests;