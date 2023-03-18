<template>
    <div class="guessLike">
        <div class="guessLike_title">
            <h3>
                <span class="guessLike_title_l">猜你喜欢</span>
                <a href="#" class="guessLike_title_r">换一批<i></i></a>
            </h3>
        </div>
        <div class="guessLike_list">
            <ul>
                <li v-for="item in homeLike" :key="item.id" class="guessLike_item">
                    <router-link to="/">
                        <div class="item_img">
                            <img :src="item.picture" />
                        </div>
                        <div class="item_details">
                            <p>{{ item.desc }}</p>
                            <p>{{ item.name }}</p>
                            <span>¥{{ item.price }}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { like } from '@/api/home';
export default {
    name: 'HomeGuesslike',

    data() {
        return {
            homeLike:[]
        };
    },

    created() {
        this.getLike()  
    },

    mounted() {

    },

    methods: {
        async getLike() {
            try {
                const {homeLike} = (await like()).data
                this.homeLike = homeLike
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.guessLike {
    height: 280px;
    width: 1200px;
    margin-top: 22px;

    .guessLike_title {
        h3 {
            color: #333333;
            line-height: 38px;
            height: 38px;
            position: relative;

            .guessLike_title_l {
                font-size: 18px;
                font-weight: 540;
            }

            .guessLike_title_r {
                position: absolute;
                font-size: 12px;
                right: 41px;
                height: 18px;
                line-height: 18px;
                top: 10px;
                display: inline-block;
                font-weight: 500;

                i {
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    left: 40px;
                    top: 1px;
                    background: url('@/static/images/icons.png') no-repeat -420px -110px;
                }
            }
        }
    }

    .guessLike_list {
        height: 240px;
        border: 1px solid #ededed;

        ul {
            display: flex;
            display: -webkit-flex;

            .guessLike_item {
                height: 240px;
                flex: 1;

                .item_img {
                    height: 160px;
                    text-align: center;
                    line-height: 160px;

                    img {
                        width: 140px;
                        height: 140px;
                        vertical-align: middle;
                    }
                }

                .item_details {
                    height: 70px;
                    margin: 5px 0 5px 36px;

                    p {
                        font-size: 12px;
                        color: #666666;
                    }

                    span {
                        font-size: 14px;
                        color: #DF3033;
                    }
                }
            }

            li:not(:last-child) .item_details {
                border-right: 1px solid #ededed;
            }
        }
    }
}
</style>