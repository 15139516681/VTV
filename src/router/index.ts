import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/components/layout/index.vue"),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: "home",
                component: () => import("@/view/home/home.vue")
            },
            {
               path: "/order",
               name: "order",
               component: ()=> import("@/view/order/index.vue") 
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
