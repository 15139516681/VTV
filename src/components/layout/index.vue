<template>
    <div class="frame-work">
        <div class="layout-header flex-x-space-between">
            <div class="layout-header-logo flex-x-space-between">
                <n-space size="medium"
                         align="center">
                    <icon-bytedance-color :style="{ fontSize: '32px' }"
                                          spin />
                    <span class="layout-header-title">TiTok</span>
                </n-space>
            </div>
            <div class="layout-header-user flex-x-start">
                <icon-sun-fill :style="{ fontSize: '30px', color: '#FFD700' }"></icon-sun-fill>
                <div class="layout-header-user-message">
                    <n-avatar :style="{ backgroundColor: '#14a9f8' }">
                        <icon-heart-fill :style="{ color: '#F53F3F' }"
                                         @click="quit"></icon-heart-fill>
                    </n-avatar>
                    <span class="layout-header-user-name">张亚辉</span>
                </div>
            </div>
        </div>
        <div class="frame-box flex-x-start">
            <div class="left-menu">
                <Menu></Menu>
            </div>
            <div class="right-view">
                <div class="right-view-top">
                    <bread-crumb></bread-crumb>
                </div>
                <div class="layout-content">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import Menu from './components/menu.vue';
    import breadCrumb from './components/breadcrumb.vue';
    import { useRouter } from 'vue-router';
    export default defineComponent({
        components: {
            Menu,
            breadCrumb,
        },
        setup() {
            const router = useRouter();
            /**
             * 退出
             */
            const quit = () => {
                localStorage.removeItem('Token');
                router.push({ path: '/login' });
            };

            return {
                quit,
            };
        },
    });
</script>
<style lang="scss" scoped>
    .frame-work {
        width: 100%;
        height: 100%;
        background: #f2f3f5;
        .layout-header {
            height: 60px;
            padding: 0 20px;
            min-width: 1000px;
            width: 100%;
            border-bottom: 1px solid #e5e6eb;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            background: #fff;
            box-sizing: border-box;
            &-logo {
                height: 60px;
            }
            &-title {
                font-size: 18px;
            }
            &-user {
                .layout-header-user-message {
                    margin-left: 20px;
                    .layout-header-user-name {
                        margin-left: 10px;
                    }
                }
            }
        }
        .frame-box {
            padding-top: 60px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-wrap: nowrap;
            .right-view {
                margin: 0 20px;
                background: $bgColor;
                width: 100%;
                height: 100%;
                .layout-content {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
