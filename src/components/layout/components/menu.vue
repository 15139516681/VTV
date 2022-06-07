<template>
    <div class="menu-demo">
        <n-space vertical>
            <n-layout has-sider>
                <n-layout-sider bordered
                                collapse-mode="width"
                                :collapsed-width="64"
                                :width="240"
                                :collapsed="collapsed"
                                show-trigger
                                label-field="name"
                                @collapse="collapsed = true"
                                @expand="collapsed= false">
                    <n-menu :collapsed="collapsed"
                            :collapsed-width="64"
                            :collapsed-icon-size="22"
                            :options="menuList"
                            v-model:value="activeKey"></n-menu>
                </n-layout-sider>
            </n-layout>
        </n-space>
    </div>
</template>
<script lang="ts">
    import { ref, reactive, h, toRefs, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import {
        BookOutline as BookIcon,
        PersonOutline as PersonIcon,
        WineOutline as WineIcon,
    } from '@vicons/ionicons5';
    import { NIcon } from 'naive-ui';

    function renderIcon(icon: any) {
        return () => h(NIcon, null, { default: () => h(icon) });
    }
    export default {
        setup() {
            const $route = useRouter();
            const store = useStore();
            // 获取菜单栏
            let menuList = computed(() => {
                console.log(store.state.menu.menu);
                return [
                    {
                        label: '且听风吟',
                        key: 'hear-the-wind-sing',
                        icon: renderIcon(BookIcon),
                    },
                    {
                        label: '1973年的弹珠玩具',
                        key: 'pinball-1973',
                        icon: renderIcon(BookIcon),
                        disabled: true,
                        children: [
                            {
                                label: '鼠',
                                key: 'rat',
                            },
                        ],
                    },
                    {
                        label: '寻羊冒险记',
                        key: 'a-wild-sheep-chase',
                        disabled: true,
                        icon: renderIcon(BookIcon),
                    },
                    {
                        label: '舞，舞，舞',
                        key: 'dance-dance-dance',
                        icon: renderIcon(BookIcon),
                        children: [
                            {
                                type: 'group',
                                label: '人物',
                                key: 'people',
                                children: [
                                    {
                                        label: '叙事者',
                                        key: 'narrator',
                                        icon: renderIcon(PersonIcon),
                                    },
                                    {
                                        label: '羊男',
                                        key: 'sheep-man',
                                        icon: renderIcon(PersonIcon),
                                    },
                                ],
                            },
                            {
                                label: '饮品',
                                key: 'beverage',
                                icon: renderIcon(WineIcon),
                                children: [
                                    {
                                        label: '威士忌',
                                        key: 'whisky',
                                    },
                                ],
                            },
                            {
                                label: '食物',
                                key: 'food',
                                children: [
                                    {
                                        label: '三明治',
                                        key: 'sandwich',
                                    },
                                ],
                            },
                            {
                                label: '过去增多，未来减少',
                                key: 'the-past-increases-the-future-recedes',
                            },
                        ],
                    },
                ];
            });
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
                activeKey: ref(null),
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