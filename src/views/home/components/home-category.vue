<!-- 顶部导航左侧分类栏组件 -->
<template>
    <div class="category" @mouseleave="categoryId = null">
        <ul class="cate_menu">
            <li class="cate_menu_item" v-for="item in categoryList" :key="item.id" @mouseenter="categoryId = item.id"
                :class="{ active: categoryId === item.id }">
                <div class="item_box">
                    <a href="#">{{ item.name }}</a>
                </div>
            </li>
        </ul>
        <ul class="layer" v-if="currCategory">
            <li v-for="item in currCategory.goods" :key="item.id">
                <img :src="item.picture" alt="">
                <div class="info">
                    <p class="name ellipsis-2">{{ item.name }}</p>
                    <p class="desc ellipsis">{{ item.desc }}</p>
                    <p class="price">{{ item.price }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'HomeCategory',

    data() {
        return {
            categoryId: ''
        };
    },

    computed: {
        ...mapState('home', ['categoryList']),
        currCategory() {
            return this.categoryList.find(item => item.id == this.categoryId)
        }
    },

    mounted() {
        this.getCategoryList()
    },

    methods: {
        ...mapActions('home', ['getCategoryList'])
    },
};
</script>

<style lang="scss" scoped>
.category {
    width: 209px;
    height: 460px;
    background-color: #C81623;
    position: relative;

    .cate_menu_item {
        height: 46px;
        line-height: 46px;
        box-sizing: border-box;
        text-align: center;

        .item_box {
            a {
                color: #fff;
                font-size: 14px;
            }
        }

        &:hover,
        &.active {
            background-color: #fff;
            border: 1px solid #C81623;

            .item_box {
                a {
                    color: #C81623;
                    font-size: 14px;
                }
            }
        }
    }

    .layer {
        width: 730px;
        height: 460px;
        background: rgba(255, 255, 255, 0.95);
        position: absolute;
        box-sizing: border-box;
        left: 209px;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        z-index: 5;

        li {
            width: 220px;
            height: 130px;
            display: flex;
            margin: 10px 10px;

            img {
                height: 85px;
                margin-top: 22px;
            }

            .info {
                margin-top: 10px;
                padding-left: 10px;
                line-height: 24px;
                width: 190px;

                .name {
                    font-size: 14px;
                    color: #666;
                }

                .desc {
                    color: #999;
                    font-size: 10px;
                }

                .price {
                    font-size: 8px;

                    i {
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>