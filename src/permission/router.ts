import router from '/@/router';

// 路由前置守卫
router.beforeEach((to, from, next) => {
    const Token = localStorage.getItem('Token');
    if (to.path == '/login') {
        next();
    }
    if (!Token) {
        next({ path: '/login' });
    } else {
        next();
    }
});
