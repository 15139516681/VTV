<template>
    <div class="menu-demo">
        <a-menu :style="{ width: '200px', borderRadius: '4px' }"
                theme="light"
                :accordion="true"
                :auto-scroll-into-view="true"
                :default-open-keys="['/']"
                :default-selected-keys="['/home']"
                @menu-item-click="routerPath">

            <a-menu-item key="/index">
                <icon-apps /> 首页
            </a-menu-item>
            <a-sub-menu v-for="item in menuList"
                        :key="item.path">
                <template #title>
                    <icon-apps /> {{item.meta.title}}
                </template>
                <a-menu-item v-for="items in item.children"
                             :key="items.path">{{items.meta.title}}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script lang="ts">
    import { ref, reactive } from 'vue';

    import { useRoute, useRouter } from 'vue-router';
    import {
        IconMenuFold,
        IconMenuUnfold,
        IconApps,
        IconBug,
        IconBulb,
    } from '@arco-design/web-vue/es/icon';

    export default {
        components: {
            IconMenuFold,
            IconMenuUnfold,
            IconApps,
            IconBug,
            IconBulb,
        },
        setup() {
            const $route = useRouter();
            let menuList = reactive([
                {
                    path: '/',
                    meta: { title: '首页' },
                    children: [
                        {
                            path: '/home',
                            name: 'home',
                            meta: { title: '首页' },
                        },
                    ],
                },
                {
                    path: '/monitor',
                    meta: {
                        title: '订单',
                    },
                    children: [
                        {
                            path: '/monitor',
                            name: '/monitor',
                            meta: {
                                title: '订单页面',
                            },
                        },
                    ],
                },
            ]);

            /**
             * 点击被折叠的菜单触发
             */
            const routerPath = (key: any) => {
                $route.push({ path: key });
            };

            return {
                menuList,
                routerPath,
            };
        },
    };
</script>
<style scoped lang="scss">
    .menu-demo {
        box-sizing: border-box;
        width: 100%;
        background: $bgColor;
    }
</style>