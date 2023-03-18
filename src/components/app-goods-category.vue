<!-- 顶部分类组件 -->
<template>
    <div class="second-floor">
        <div class="header-second-floor">
            <div class="second-floor-list">
                全部商品分类
            </div>
            <div class="nav">
                <ul class="second-floor-group">
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">美妆馆</a></li>
                    <li><a href="#">传智超市</a></li>
                    <li><a href="#">全球购</a></li>
                    <li><a href="#">闪购</a></li>
                    <li><a href="#">团购</a></li>
                    <li><a href="#">拍卖</a></li>
                    <li><a href="#">有趣</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppGoodsCategory',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.second-floor {
    border-bottom: 2px solid #b1191a;

    .header-second-floor {
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;

        .second-floor-list {
            float: left;
            width: 209px;
            height: 45px;
            margin-top: 20px;
            background-color: #B1191A;
            text-align: center;
            line-height: 45px;
            color: #FFFFFF;
            font-size: 16px;
        }

        .nav {
            float: left;
            margin-top: 20px;
            margin-left: 10px;

            .second-floor-group {
                height: 45px;
                text-align: center;
                line-height: 45px;

                li {
                    float: left;
                    width: 90px;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>