<template>
    <div class="rightNav">
        <div class="rightNav_topNav">
            <div class="topNav_title">
                <h4>
                    <span class="topNav_title_l">品优购快报</span>
                    <span class="topNav_title_r">更多<i class="ra_icon"></i></span>
                </h4>
            </div>
            <ul class="topNav_list">
                <li>
                    <a href="#"><span>[特惠]</span>备战开学季 全民半价购数码</a>
                </li>
                <li>
                    <a href="#"><span>[公告]</span>品优稳占家电网购六成份额</a>
                </li>
                <li>
                    <a href="#"><span>[特惠]</span>百元中秋全品类礼券限量领</a>
                </li>
                <li>
                    <a href="#"><span>[公告]</span>上品优生鲜 享阳澄湖大闸蟹</a>
                </li>
                <li>
                    <a href="#"><span>[特惠]</span>每日享折扣品优品质游</a>
                </li>
            </ul>
            <div class="rightNav_bodyImg">
                <ul>
                    <li class="bodyImg_item">
                        <i style="background-position: -17px -16px;"></i>
                        <span>话费</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -80px -16px;"></i>
                        <span>机票</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -142px -16px;"></i>
                        <span>电影票</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -204px -16px;"></i>
                        <span>游戏</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -17px -88px;"></i>
                        <span>彩票</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -80px -88px;"></i>
                        <span>加油卡</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -142px -88px;"></i>
                        <span>酒店</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -204px -88px;"></i>
                        <span>火车票</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -17px -160px;"></i>
                        <span>众筹</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -80px -160px;"></i>
                        <span>理财</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -142px -160px;"></i>
                        <span>礼品卡</span>
                    </li>
                    <li class="bodyImg_item">
                        <i style="background-position: -204px -160px;"></i>
                        <span>白条</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="rightNav_bottom">
            <img src="@/static/images/01-电商-主页-gai_07.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeToprightnav',

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
.rightNav {
    margin-top: 5px;
    width: 250px;
    height: 460px;

    .rightNav_topNav {
        height: 372px;
        box-sizing: border-box;
        border: 1px solid #e4e4e4;

        h4 {
            width: 250px;
            height: 32px;
            line-height: 32px;
            border-bottom: 1px dashed #e4e4e4;
            font-weight: 500;
            color: #333333;

            .topNav_title_l {
                margin-left: 16px;
                font-size: 14px;
            }

            .topNav_title_r {
                float: right;
                font-size: 13px;
                margin-right: 20px;

                .ra_icon {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    margin-top: 10px;
                    background: url('@/static/images/箭头\ 下.png') no-repeat;
                    transform: rotateZ(-90deg);
                }
            }
        }

        .topNav_list {
            height: 131px;
            border-bottom: 1px solid #e4e4e4;

            li {
                height: 26px;
                line-height: 26px;
                padding-left: 16px;

                a {
                    font-size: 13px;

                    span {
                        font-weight: 600;
                    }
                }
            }
        }
    }

    .rightNav_bodyImg {
        ul {
            display: flex;
            flex-wrap: wrap;
            height: 204px;
            width: 250px;

            .bodyImg_item {
                width: 62px;
                height: 68px;
                position: relative;
                box-sizing: border-box;
                text-align: center;

                i {
                    background: url('@/static/images/icons.png') no-repeat;
                    display: block;
                    width: 27px;
                    margin: 5px 17px;
                    height: 27px;
                }

                span {
                    font-size: 12px;
                }
            }

            .bodyImg_item:not(:nth-child(9), :nth-child(10), :nth-child(11), :nth-child(12)) {
                border-bottom: 1px solid #e4e4e4;
            }

            .bodyImg_item:not(:nth-child(4), :nth-child(8), :nth-child(12)) {
                border-right: 1px solid #e4e4e4;
            }
        }
    }
    .rightNav_bottom{
        margin-top: 8px;
    }
}
</style>