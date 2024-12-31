import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '默认',
        },
        {
            path: '/home',
            name: '首页',
            component: () => import('../pages/home.vue'),
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path === "/") {
        next("/home")
    } else {
        next()
    }
})

export default router
