import axios from 'axios'

import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const requests = axios.create({
    baseURL: 'http://127.0.0.1:3000/vue-all',
    // res.cookie可以自动设置cookie
    withCredentials: true,
    timeout: 50000
});

requests.interceptors.request.use(config => {
    // console.log('config---', config);
    nProgress.start();
    return config
});

requests.interceptors.response.use((res) => {
    nProgress.done();
    // console.log('res---', res.data);
    return res.data
}, (error) => {
    nProgress.done()
    return Promise.reject(new Error(error))
})

export default requests;