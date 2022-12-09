import axios from "axios";
const pendingList = new Map();

// 用于生成各个请求的标识
export const getFetchKey = (config) => {
    const { useCancelToken } = config;
    // useCancelToken 用于配置该接口是否需要检测查复请求
    if (useCancelToken) {
        const { headers, url, data, method, params } = config;
        let token;

        if (method === 'GET') {
            token = [method, url].join('&');
        } else {
            token = [method, url, JSON.stringify(data), JSON.stringify(params)].join('&');
        }

        return token;
    }
};

export const addPending = (config) => {
    console.log("pendingList---", pendingList);
    // debugger;
    const fetchKey = getFetchKey(config);
    if (fetchKey) {
        config.cancelToken =
            config.cancelToken ||
            new axios.CancelToken((cancel) => {
                if (!pendingList.has(fetchKey)) {
                    pendingList.set(fetchKey, cancel);
                }
            });
    }
};

export const removePending = (config) => {
    console.log("pendingList---", pendingList);

    const fetchKey = getFetchKey(config);
    if (fetchKey) {
        if (pendingList.has(fetchKey)) {
            pendingList.delete(fetchKey);
        }
    }
};

export const cancelPending = (config) => {
    console.log("pendingList---", pendingList);

    const fetchKey = getFetchKey(config);
    if (fetchKey) {
        if (pendingList.has(fetchKey)) {
            const cancel = pendingList.get(fetchKey);
            cancel(fetchKey);
            pendingList.delete(fetchKey);
        }
    }
};