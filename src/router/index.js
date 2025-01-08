import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(), // 修改为 hash 模式
    routes: [
        {
            path: '/',
            name: '默认',
            redirect: '/home' // 重定向到首页
        },
        {
            path: '/home',
            name: '首页',
            component: () => import('../pages/Home.vue'),
        },
        {
            path: '/:pathMatch(.*)*', // 通配符路由，匹配所有未定义的路径
            name: 'Error',
            component: () => import('../pages/Error.vue'),
            props: route => ({ statusCode: route.params.statusCode })
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to.path);
    next()
})

export default router
