import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router/index.js' // 引入路由
import ElementPlus from "element-plus"; // 引入element-plus
import zhCn from "element-plus/es/locale/lang/zh-cn"; // 引入中文包
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入图标
import '../src/assets/style/global.css'; // 引入全局样式文件
import '../src/assets/style/animate.css'; // 引入动画样式文件

const app = createApp(App)
// 引入全部图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(ElementPlus, { size: "small", locale: zhCn });

app.mount('#app')
