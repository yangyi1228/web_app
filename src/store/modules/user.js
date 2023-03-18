export default {
    namespaced: true,
    state() {
        return {
            account: ''
        }
    },
    mutations:{
        SETACCOUNT(state, str) {
            state.account = str
        }
    },
    actions: {
        
    }
}