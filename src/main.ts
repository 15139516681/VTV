import { createApp } from 'vue';
import naive from "naive-ui";
import svgIcon from '/@/components/svgIcon/index.vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '/@/permission/router';

const app = createApp(App);
// 引入UI
app.use(naive);
// 路由
app.use(router);
// vuex 存储
app.use(store);
app.mount('#app');
