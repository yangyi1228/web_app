<template>
    <div class="Footer_box">
        <div class="homeFooter">
            <AppFooterTop v-show="$route.meta.show" />
            <div class="third_layer">
                <ul>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>联系客服</li>
                    <li>商家入驻</li>
                    <li>营销中心</li>
                    <li>手机品优购</li>
                    <li>友情链接</li>
                    <li>销售联盟</li>
                    <li>品优购社区</li>
                    <li>English Site</li>
                    <li>Contact U</li>
                    <li></li>
                </ul>
                <p>地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱：zhanghj+icast.cn 京ICP08001421号
                    京公安备110108007702</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooter',

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
.Footer_box {
    width: 100%;
    background-color: #F5F5F5;

    .homeFooter {
        width: 1200px;
        margin: 0 auto;

        .third_layer {
            width: 972px;
            height: 120px;
            margin: 0 auto;
            font-size: 12px;
            color: #333333;
            overflow: hidden;

            ul {
                margin-top: 20px;
                display: flex;

                li {
                    flex: 1;
                }
            }

            p {
                margin: 5px auto;
                width: 728px;
                text-align: center;
                line-height: 20px;
            }
        }
    }
}
</style>