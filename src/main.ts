import { createApp } from 'vue'
import { setupStore } from '@/store'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'
import 'animate.css'
// import { createHead } from "@vueuse/head";
import Router from './router'
import App from './App.vue'

const app = createApp(App)
setupStore(app)

app.use(Router)
// app.use(createHead());
app.mount('#app')

// async function bootStrap() {
//   // 设置样式加载
//   setupAssets()

//   // 创建vue
//   const app = createApp(App)

//   // 注册全局常用的 组件
//   setupCustomComponents(app)

//   // 注册全局方法
//   setupGlobalMethods(app)

//   // 注册全局自定义指令
//   // setupDirectives(app)

//   // 挂载状态管理
//   await setupStore(app)

//   // 挂载路由
//   await setupRouter(app)

//   app.mount('#app')
// }
// bootStrap()
