import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import svgIcon from '/@/components/svgIcon/index.vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '/@/permission/router';

const app = createApp(App);
app.component('svg-icon', svgIcon);
// UI组件
app.use(ArcoVue);
// UI 图标
app.use(ArcoVueIcon);
// 路由
app.use(router);
// vuex 存储
app.use(store);
app.mount('#app');
