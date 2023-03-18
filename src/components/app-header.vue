<!-- 头部导航组件 -->
<template>
    <div>
        <div class="shortcut">
            <div class="w">
                <ul class="fl">
                    <li v-if="account">品优购欢迎您！
                        <a href="#">{{ account }}</a>
                        <button @click="toLogin">退出</button>
                    </li>
                    <li v-else>
                        <button @click="toLogin">请登录</button>
                        <button @click="toRegister" class="register">免费注册</button>
                    </li>
                </ul>
                <ul class="fr">
                    <li class="shortcut_btn"><a href="">我的订单</a></li>
                    <li class="shortcut_boundar"></li>
                    <li id="shortcut_btn_03" class="shortcut_btn btn_hover">
                        <div class="shortcut_btn-hover">
                            <a href="">我的品优购</a>
                            <i class="iconfont"></i>
                        </div>
                        <div class="dropdown-layer" v-if="headerData.shortcut_03">
                            <div class="myjdlist" v-for="item in headerData.shortcut_03.shortcut_data" :key="item.id">
                                <div v-for="single in item.list" :key="single.id">
                                    <a href="#">{{ single.name }}</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="shortcut_boundar"></li>
                    <li class="shortcut_btn"><a href="">品优购会员</a></li>
                    <li class="shortcut_boundar"></li>
                    <li class="shortcut_btn"><a href="">企业采购</a></li>
                    <li class="shortcut_boundar"></li>
                    <li id="shortcut_btn_09" class="shortcut_btn btn_hover">
                        <div class="shortcut_btn-hover">
                            <a href="">关注品优购</a>
                            <i class="iconfont"></i>
                        </div>
                        <div class="dropdown-layer">
                            <img src="@/static/images/wx_cz.jpg" width="85px" alt="二维码">
                        </div>
                    </li>
                    <li class="shortcut_boundar"></li>
                    <li id="shortcut_btn_11" class="shortcut_btn btn_hover">
                        <div class="shortcut_btn-hover">
                            <a href="">客户服务</a>
                            <i class="iconfont"></i>
                        </div>
                        <div class="dropdown-layer" v-if="headerData.shortcut_11">
                            <div class="myjdlist" v-for="item in headerData.shortcut_11.shortcut_data" :key="item.id">
                                <div v-for="single in item.list" :key="single.id">
                                    <a href="#">{{ single.name }}</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="shortcut_boundar"></li>
                    <li id="shortcut_btn_13" class="shortcut_btn btn_hover">
                        <div class="shortcut_btn-hover">
                            <a href="">网站导航</a>
                            <i class="iconfont"></i>
                        </div>
                        <div class="dropdown-layer h" v-if="headerData.shortcut_13">
                            <dl v-for="(item, index) in headerData.shortcut_13.shortcut_data" :key="item.id"
                                :class="'fore' + (index + 1)">
                                <dt>{{ item.title }}</dt>
                                <dd>
                                    <div v-for="single in item.list" :key="single.id">
                                        <a href="#">{{ single.name }}</a>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header">
            <div class="header-first-floor">
                <div class="logo-refresh">
                    <a href="#" class="logo_tit">
                        <img src="@/static/images/logo.png" alt="" />
                    </a>
                </div>
                <div class="form">
                    <div @click="searchBoxClick" v-show="searchBoolean" class="text">请搜索</div>
                    <input ref="search" class="search" type="text" @blur="searchBoolean = true">
                    <button type="button" class="search_button">搜索</button>
                </div>
                <div class="cart-btn">
                    <button class="cart_button">
                        <i class="cart_icon"></i>
                        我的购物车
                        <i class="ra_icon"></i>
                    </button>
                </div>
                <div class="hotwords">
                    <a href="">优惠购</a>
                    <a href="">亿元优惠</a>
                    <a href="">9.9元团购</a>
                    <a href="">每满99减30</a>
                    <a href="">办公用品</a>
                    <a href="">电脑</a>
                    <a href="">通信</a>
                </div>
            </div>
            <AppGoodsCategory v-if="$route.name === 'home'"></AppGoodsCategory>
        </div>
    </div>
</template>

<script>
import { shortcut } from '@/api/home'
export default {
    name: "AppHeader",

    data() {
        return {
            headerData: {},
            searchBoolean: true
        };
    },

    computed: {
        account() {
            return this.$store.state.user.account
        }
    },

    created() {
        this.getHeaderData()
    },

    mounted() {

    },

    directives: {

    },

    methods: {
        async getHeaderData() {
            try {
                const { data } = await shortcut()
                this.headerData = data.homeShortcut
            } catch (error) {
                console.log(error);
            }
        },
        searchBoxClick() {
            this.searchBoolean = false
            this.$refs.search.focus();
        },
        toLogin() {
            if (this.account) this.$store.commit('user/SETACCOUNT', this.data.account)
            this.$router.replace({
                path: "/login",
            })
        },
        toRegister() {
            this.$router.replace({
                path: "/register",
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.shortcut {
    width: 100%;
    background-color: #F1F1F1;

    .w {
        width: 1200px;
        height: 31px;
        margin: 0 auto;
        font-size: 12px;
        line-height: 31px;

        .fl {
            float: left;
            display: flex;
            width: 185px;
            height: 31px;
            color: #666666;

            .register {
                color: red;
                margin-left: 14px;
            }

            button {
                border: none;
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }
        }

        .fr {
            float: right;
            height: 31px;

            .btn_hover:hover .shortcut_btn-hover {
                background-color: #fff;
                border: 1px solid #ccc;
                border-bottom: none;
            }

            .btn_hover:hover .dropdown-layer {
                top: 30px;
            }

            .shortcut_btn {
                margin: 0 7px;
                height: 31px;
                position: relative;
                float: left;

                .shortcut_btn-hover {
                    position: relative;
                    height: 31px;
                    z-index: 30;
                    padding: 0 5px;
                    box-sizing: border-box;
                    border: 1px solid rgba(200, 200, 200, 0);

                    .iconfont {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        margin-left: 3px;
                        background: url('@/static/images/箭头\ 下.png') no-repeat;
                        color: #F1F1F1;
                    }
                }

                .dropdown-layer {
                    display: grid;
                    position: absolute;
                    top: -230px;
                    z-index: 29;
                    border: 1px solid #ccc;
                    background-color: #fff;
                    text-align: center;
                    box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);

                    .myjdlist {
                        display: grid;
                        grid-template-rows: repeat(30px);
                        grid-template-columns: repeat(3, 90px);
                        border-bottom: 1px solid #f6f3f3;
                    }
                }
            }

            .shortcut_boundar {
                overflow: hidden;
                margin: 11px 5px 0;
                width: 1px;
                height: 10px;
                background-color: #ccc;
                float: left;
            }

            #shortcut_btn_03 {
                .shortcut_btn-hover {
                    width: 90px;
                }
            }

            #shortcut_btn_09 {
                .dropdown-layer {
                    height: 85px;
                }

                .shortcut_btn-hover {
                    width: 87px;
                }
            }

            #shortcut_btn_11 {
                .dropdown-layer {
                    right: 0px;
                }
            }

            #shortcut_btn_13 {
                .h {
                    right: 0;
                    display: flex;
                }

                .fore1,
                .fore2,
                .fore3,
                .fore4 {
                    margin: 15px;

                    dd {
                        display: grid;
                    }
                }

                .fore1,
                .fore2,
                .fore3 {
                    border-right: 1px solid #f6f3f3;
                }

                .fore1 {
                    dd {
                        grid-template-columns: repeat(4, 80px);
                        grid-template-rows: repeat(4, 30px);
                    }
                }

                .fore2,
                .fore4 {
                    dd {
                        grid-template-columns: repeat(3, 80px);
                        grid-template-rows: repeat(5, 30px);
                    }
                }

                .fore3 {
                    dd {
                        grid-template-columns: repeat(4, 80px);
                        grid-template-rows: repeat(3, 30px);
                    }
                }
            }
        }
    }
}



.header {
    width: 100%;
    height: 155px;

    .header-first-floor {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        height: 90px;

        .logo-refresh,
        .form,
        .cart-btn,
        .hotwords {
            position: absolute;
            top: 25px;
        }

        .form {
            left: 347px;
            height: 36px;

            .text {
                position: absolute;
                left: 0;
                height: 36px;
                width: 456px;
                font-size: 14px;
                box-sizing: border-box;
                padding: 9px;
                color: #666666;
            }

            .search {
                border: none;
                outline: none;
                border: 2px solid #b1191a;
                color: #666666;
                box-sizing: border-box;
                font-size: 14px;
                width: 456px;
                height: 36px;
                padding: 9px;
            }

            .search_button {
                float: right;
                width: 78px;
                border: none;
                height: 36px;
                background-color: #b1191a;
                font-size: 16px;
                color: #FFFFFF;

                &:active {
                    transform: translateY(0.4px) translateX(-0.4px);
                }
            }
        }

        .cart-btn {
            right: 63px;

            .cart_button {
                width: 138px;
                height: 34px;
                border: 1px solid #dfdfdf;
                font-size: 12px;
                color: #666666;
                position: relative;

                .cart_icon {
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    top: 8px;
                    left: 10px;
                    background: url('@/static/images/cartPanelViewIcons.png') no-repeat -1px -1px;
                }

                .ra_icon {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    top: 10px;
                    left: 110px;
                    background: url('@/static/images/箭头 下.png') no-repeat;
                    transform: rotateZ(-90deg);
                }

                &:hover {
                    background-color: #b1191a;
                    color: white;
                    .ra_icon{
                        background: url('@/static/images/右箭头.png') no-repeat;
                        transform: rotateZ(0deg);
                    }
                    .cart_icon{
                        background: url('@/static/images/购物车.png') no-repeat;
                    }
                }
            }
        }

        .hotwords {
            top: 68px;
            left: 347px;

            a {
                margin-right: 20px;
                font-size: 12px;
            }

            a:first-child {
                color: red;
            }
        }
    }
}
</style>
