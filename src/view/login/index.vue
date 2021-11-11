<template>
    <div id="login">
        <a-form ref="formlogin"
                class="form-table"
                @submit="submitHandle"
                :model="form">
            <a-form-item label="账号"
                         field="user"
                         :rules="[{required:true,message:'请输入账号', trigger: 'blur'}]"
                         :maxLength="16"
                         :minLength="6">
                <a-input class="input-width"
                         v-model="form.user"
                         placeholder="请输入账号"></a-input>
            </a-form-item>
            <a-form-item label="密码"
                         field="password"
                         :rules="[{required: true,message:'请输入密码', trigger:'blur'}]">
                <a-input-password class="input-width"
                                  v-model="form.password"
                                  placeholder="请输入密码"
                                  :maxLength="16"
                                  :minLength="6"></a-input-password>
            </a-form-item>
            <a-form-item>
                <a-button type="primary"
                          html-type="submit"
                          class="login-btn">登录</a-button>
            </a-form-item>
        </a-form>

    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import { useRouter } from 'vue-router';

    import { Message } from '@arco-design/web-vue';
    export default defineComponent({
        setup() {
            const form: any = reactive({
                user: '',
                password: '',
            });

            const router = useRouter();

            // 触发提交表单
            const submitHandle = ({ values, errors }: any) => {
                if (!errors) {
                    console.log('打印form数据', form);
                    Message.success('登录成功');
                    localStorage.setItem('Token', 'true');
                    router.push({ name: 'index' });
                }
            };

            return {
                submitHandle,
                form,
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