import AxiosManager, { AxiosRequestConfig } from 'super-axios';
const service = new AxiosManager(
    {
        baseURL: '',
        timeout: 3000,
        withCredentials: false,
    },
    {
        trySuccess: () => {
            console.log('重连成功');
        }, // 重连成功的回调
        tryFail: () => {
            console.log('重连失败了》。。。。');
        }, // 重连失败的回调
        tryBegin: () => {
            console.log('重连开始');
        }, // 开始尝试重连
        maxReconnectionTimes: 5, // 最大重连数
        timeStep: 1000, // 断线重连时间间隔
        request: (config: AxiosRequestConfig) => {
            return config;
        },
        response: (res: any) => {
            console.log(res, '-----');
            return res.data;
        },
    },
);

export default service;
