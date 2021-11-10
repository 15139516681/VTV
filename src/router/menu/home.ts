import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const home: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('/@/components/layout/index.vue'),
        redirect: '/home',
        meta: {
            title: '仪表盘',
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('/@/view/home/home.vue'),
                meta: {
                    title: '工作台',
                },
            },
            {
                path: '/monitor',
                name: 'monitor',
                component: () => import('/@/view/home/monitor.vue'),
                meta: {
                    title: '实时监控',
                },
            },
        ],
    },
];
export default home;
