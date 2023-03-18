import { category, brand } from '@/api/home'
export default { 
    namespaced: true,
    state() {
        return {
            categoryList:[]
        }
    },
    mutations: {
        SETCATEGORYLIST(state,data) {
            state.categoryList = data
        }
    },
    actions: {
        async getCategoryList(context) {
            const { homeCategory } = (await category()).data
            homeCategory.push({id:12313123,name:'品牌',goods:[]})
            const { homeBrand } =  (await brand()).data
            homeCategory.forEach(item => {
                if (item.name === '品牌') {
                    item.goods = homeBrand
                }
            })
            context.commit('SETCATEGORYLIST', homeCategory)
        }
    }
}