import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import home from './menu/home';
const routes: Array<RouteRecordRaw> = [...home];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
