import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import menu from './menu/menu';
import layout from '/@/components/layout/index.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('/@/view/login/index.vue'),
    },
    {
        path: '/index',
        name: 'index',
        component: layout,
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('/@/view/index/index.vue'),
                meta: {
                    title: '首页',
                },
            },
        ],
    },
    ...menu,
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
