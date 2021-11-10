<template>
    <div class="menu-demo">
        <a-menu :style="{ width: '200px', borderRadius: '4px' }"
                theme="light"
                :accordion="true"
                :auto-scroll-into-view="true"
                :default-open-keys="['/']"
                :default-selected-keys="['/index']"
                @menu-item-click="routerPath">
            <!-- 首页 -->
            <a-menu-item key="/index">
                <svg-icon name="index"
                          class="icon-right"></svg-icon> 首页
            </a-menu-item>
            <!-- 循环路由数组 -->
            <a-sub-menu v-for="item in menuList"
                        :key="item.path">
                <template #title>
                    <svg-icon name="safety"
                              class="icon-right" /> {{item.meta.title}}
                </template>
                <a-menu-item v-for="items in item.children"
                             :key="items.path">{{items.meta.title}}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script lang="ts">
    import { ref, reactive, toRefs, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    export default {
        setup() {
            const $route = useRouter();
            const store = useStore();
            // 获取菜单栏
            let menuList = computed(() => store.state.menu.menu);
            /**
             * 路由跳转对应的页面
             */
            const routerPath = (key: any) => {
                $route.push({ path: key });
                breadcrumb(key);
            };

            // 面包屑配置
            const breadcrumb = (key: string) => {
                let bread: any[] = [];
                menuList.value.map((item: any) => {
                    if (item.children) {
                        item.children.forEach((targetItem: any) => {
                            if (targetItem.path === key) {
                                bread = [item.meta.title, targetItem.meta.title];
                                return;
                            }
                        });
                    }
                });
                store.commit('menu/breadCrumbPush', bread);
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
    .icon-right {
        margin-right: 10px;
    }
</style>