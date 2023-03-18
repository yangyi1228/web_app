import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Loading } from 'vant';
import 'vant/lib/index.css';
Vue.use(Loading);

//全局样式
import './style/index.scss'
//注册全局组件
import plugns from '@/components/index'
plugns.installComponents()


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')
