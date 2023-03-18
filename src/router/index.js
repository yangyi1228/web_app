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
            show:true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            show: false
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

export default router
