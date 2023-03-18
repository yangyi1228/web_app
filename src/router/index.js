import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const register = () => import('@/views/register/index.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            show: true,
            title:'品优购-首页'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            show: false,
            title:'品优购-登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            show: false,
            title:'品优购-注册'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
