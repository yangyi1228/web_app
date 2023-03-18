<template>
    <div class="login">
        <div class="login_logo">
            <img src="@/static/images/logo.png" alt="">
        </div>
        <div class="login_body">
            <div class="banner-bg">
                <div class="form">
                    <div @click="isShow = false" class="login-tab login-tab-l">
                        <a :class="{ fc: !isShow }" href="#">扫码登录</a>
                    </div>
                    <div @click="isShow = true" class="login-tab login-tab-r">
                        <a :class="{ fc: isShow }" href="#">账号登录</a>
                    </div>
                    <div v-show="!isShow" class="qrcode-main">
                        <img class="show" src="@/static/images/show.png" />
                        <p>打开<span>手机品优购</span>&nbsp;扫一扫</p>
                    </div>
                    <div v-show="isShow" class="login-box">
                        <div class="formlogin">
                            <div class="formlogin_inp">
                                <label class="formlogin_lable"><i class="formlogin_lable_a"></i></label>
                                <input type="text" placeholder="邮箱/用户名/手机号" v-model="data.account" />
                            </div>
                            <div class="formlogin_inp">
                                <label class="formlogin_lable"><i class="formlogin_lable_b"></i></label>
                                <input type="password" placeholder="请输入密码" v-model="data.password" />
                            </div>
                            <div class="formlogin_btn">
                                <button @click="login">登录</button>
                            </div>
                        </div>

                    </div>
                    <div class="footer">
                        <ul>
                            <li>
                                <img src="@/static/images/regetype.png" />
                            </li>
                            <li>
                                <button @click="toRegister">立即注册</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '@/api/login.js'
export default {
    name: 'LoginPage',

    data() {
        return {
            isShow: true,
            data: {
                account: '',
                password:''
            }
        };
    },

    mounted() {

    },

    methods: {
        toRegister() {
            this.$router.replace({
                path: "/register",
            })
        },
        async login() {
            const result = (await login(this.data)).data
            if (result.status === "1" && result.msg === "登录成功") {
                this.$store.commit('user/SETACCOUNT',this.data.account)
                this.$router.replace({
                    path:'/'
                })
            } else {
                alert('登录失败')
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;

    .login_logo {
        width: 1200px;
        height: 100px;
        line-height: 100px;
        margin: 0 auto;

        img {
            vertical-align: middle;
        }
    }

    .login_body {
        width: 100%;
        height: 533px;
        background-color: #7e00ff;

        .banner-bg {
            width: 1200px;
            height: 533px;
            margin: 0 auto;
            background: url('@/static/images/loginbg.png') no-repeat;
            position: relative;

            .form {
                position: absolute;
                right: 115px;
                top: 62px;
                width: 378px;
                height: 360px;
                background-color: #FFFFFF;

                .login-tab {
                    position: absolute;
                    width: 189px;
                    height: 55px;
                    font-size: 18px;
                    color: #666666;

                    text-align: center;

                    a {
                        position: absolute;
                        top: 18px;
                        left: 0;
                        width: 99%;
                        height: 19px;
                        text-decoration: none;
                    }

                    &:hover a {
                        color: #C81623;
                    }
                }

                .login-tab-l {
                    a {
                        border-right: 1px solid #d4d0d0;
                    }
                }

                .login-tab-r {
                    right: 0;
                }

                .qrcode-main {
                    display: block;
                    margin-top: 55px;
                    height: 168px;
                    text-align: center;

                    .show {
                        margin-top: 30px;
                    }

                    p {
                        font-size: 12px;
                        height: 18px;

                        span {
                            color: #C81623;
                        }
                    }
                }

                .login-box {
                    width: 306px;
                    height: 192px;
                    margin: 0 auto;
                    margin-top: 60px;

                    .formlogin {
                        overflow: hidden;

                        .formlogin_inp {
                            border: 1px solid #ededed;
                            width: 303px;
                            height: 36px;
                            display: flex;
                            margin: 20px 0;

                            .formlogin_lable {
                                border-right: 1px solid #ededed;
                                width: 36px;
                                height: 36px;

                                i {
                                    margin: 0 auto;
                                    margin-top: 8px;
                                    display: block;
                                    width: 21px;
                                    height: 21px;
                                }

                                &_a {
                                    background: url('@/static/images/用户.png') no-repeat;
                                }

                                &_b {
                                    background: url('@/static/images/锁定.png') no-repeat;
                                }
                            }

                            input {
                                border: none;
                                outline: none;
                                padding: 3px 20px;
                                color: #666666;
                                font-size: 14px;
                            }
                        }
                    }

                    .formlogin_btn {
                        button {
                            background-color: #C81623;
                            width: 303px;
                            height: 41px;
                            border: none;
                            font-size: 16px;
                            color: white;
                            cursor: pointer;

                            &:active {
                                transform: translateY(0.4px) translateX(-0.4px);
                            }
                        }
                    }
                }
            }
        }
    }

    .fc {
        color: #C81623;
    }

    .footer {
        margin: 0 auto;
        margin-top: 50px;
        height: 54px;
        line-height: 54px;
        width: 291px;

        ul {
            display: flex;

            button {
                color: #1474AF;
                border: none;
                background-color: #FFFFFF;

                &:hover {
                    color: #C81623;
                }

            }
        }
    }
}
</style>