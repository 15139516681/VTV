<template>
    <div id="login">
        <n-form ref="formlogin"
                class="form-table"
                :model="form">
            <n-form-item label="账号"
                         path="user"
                         :rule="[{ required: true, message: '请输入账号', trigger: 'blur' }]">
                <n-input class="input-width"
                         v-model:value="form.user"
                         placeholder="请输入账号"></n-input>
            </n-form-item>
            <n-form-item label="密码"
                         path="passWord"
                         :rule="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                <n-input class="input-width"
                         type="password"
                         v-model:value="form.passWord"
                         placeholder="请输入密码"></n-input>
            </n-form-item>
            <n-form-item>
                <n-button type="primary"
                          class="login-btn"
                          @click="submitHandle">登录</n-button>
            </n-form-item>
        </n-form>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { login } from '/@/api/login';
    export default defineComponent({
        setup() {
            // 引入路由
            const router = useRouter();
            // 登录
            const form: { user: string; passWord: string } = reactive({
                user: '15139516681',
                passWord: '123456',
            });
            //获取表单Dom;
            const formlogin = ref(null);

            // 触发提交表单
            const submitHandle = () => {
                (formlogin.value as any).validate((errors: any) => {
                    if (!errors) {
                        login(form).then((res: any) => {
                            localStorage.setItem('Token', res.token);
                            router.push({ name: 'index' });
                        });
                    }
                });
            };

            return {
                submitHandle,
                form,
                formlogin,
            };
        },
    });
</script>
<style scoped lang="scss">
    .input-width {
        width: 200px;
    }
    #login {
        width: 100%;
        height: 100vh;
        @extend .flex-x-center;
        .form-table {
            width: 400px;
        }
        .login-btn {
            margin-left: 60px;
        }
    }
</style>
