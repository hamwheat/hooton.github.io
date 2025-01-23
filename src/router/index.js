import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(), // 修改为 hash 模式
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/main' // 重定向到首页
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../pages/Home.vue'),
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../pages/Blog.vue'),
        },
        {
            path: '/codeSpace',
            name: 'codeSpace',
            component: () => import('../pages/CodeSpace.vue'),
        },
        {
            path: '/:pathMatch(.*)*', // 通配符路由，匹配所有未定义的路径
            name: 'error',
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
