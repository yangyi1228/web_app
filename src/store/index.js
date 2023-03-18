import vue from 'vue'
import vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'

vue.use(vuex)

export default new vuex.Store({
    modules: {
        home,
        user
    }
})