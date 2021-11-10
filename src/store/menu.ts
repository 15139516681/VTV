import menuList from '../router/menu/menu';

const menu = {
    namespaced: true,
    state: {
        menu: menuList,
        breadcrumb: [],
    },
    mutations: {
        // 面包屑
        breadCrumbPush(state: any, data: any) {
            state.breadcrumb = data;
        },
    },
};

export default menu;
