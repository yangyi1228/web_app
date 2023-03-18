<template>
    <div>
        <div class="first_floor">
            <ul>
                <li class="first_floor_item">
                    <div>
                        <i style="background-position: -250px 0;"></i>
                    </div>
                    <div>
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li class="first_floor_item">
                    <div>
                        <i style="background-position: -254px -53px;"></i>
                    </div>
                    <div>
                        <h4>急速物流</h4>
                        <p>急速物流,急速送达</p>
                    </div>
                </li>
                <li class="first_floor_item">
                    <div>
                        <i style="background-position: -256px -104px;"></i>
                    </div>
                    <div>
                        <h4>无忧售后</h4>
                        <p>7天无理由退换货</p>
                    </div>
                </li>
                <li class="first_floor_item">
                    <div>
                        <i style="background-position: -257px -157px;"></i>
                    </div>
                    <div>
                        <h4>特色服务</h4>
                        <p>私人订制家电餐具</p>
                    </div>
                </li>
                <li class="first_floor_item">
                    <div>
                        <i style="background-position: -255px -208px;"></i>
                    </div>
                    <div>
                        <h4>帮助中心</h4>
                        <p>您的购物指南</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="second_floor">
            <ul>
                <h4>配送指南</h4>
                <li>购物流程</li>
                <li>会员介绍</li>
                <li>生活旅行</li>
                <li>团购/ 常见问题</li>
                <li>大家电</li>
                <li>联系客服</li>
            </ul>
            <ul>
                <h4>配送方式</h4>
                <li>上门自提</li>
                <li>211限时达</li>
                <li>配送服务查询</li>
                <li>配送费收取标准</li>
                <li>海外配送</li>
            </ul>
            <ul>
                <h4>支付方式</h4>
                <li>货到付款</li>
                <li>在线支付</li>
                <li>分期付款</li>
                <li>邮局汇款</li>
                <li>公司转账</li>
            </ul>
            <ul>
                <h4>售后服务</h4>
                <li>价格保护</li>
                <li>退款说明</li>
                <li>返修/退换货</li>
                <li>取消订单</li>
            </ul>
            <ul>
                <h4>特色服务</h4>
                <li>夺宝岛</li>
                <li>DIY装机</li>
                <li>延保服务</li>
                <li>品优购E卡</li>
                <li>品优购通信</li>
            </ul>
            <ul>
                <h4>帮助中心</h4>
                <li><img src="@/static/images/wx_cz.jpg" /></li>
                <li>品优购客户端</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooterTop',

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
.first_floor {
    ul {
        display: flex;

        .first_floor_item {
            flex: 1;
            display: flex;
            height: 109px;
            justify-content: center;
            align-items: center;

            i {
                display: block;
                width: 52px;
                height: 52px;
                background: url('@/static/images/icons.png') no-repeat;
                margin-right: 5px;
            }

            h4 {
                font-size: 14px;
                margin-bottom: 8px;
            }

            p {
                font-size: 12px;
                font-weight: 200;
            }
        }
    }
}
.second_floor {
    display: flex;
    border-top: 2px solid #ededed;
    border-bottom: 2px solid #ededed;
    padding-top: 40px;
    height: 185px;
    color: #666666;

    ul {
        flex: 1;
        text-align: center;

        h4 {
            font-weight: 500;
            font-size: 16px;
        }

        li {
            color: #333333;
            font-size: 12px;
        }
    }
}
</style>