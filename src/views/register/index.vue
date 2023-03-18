<template>
    <div class="register">
        <div class="login_logo">
            <img src="@/static/images/logo.png" alt="">
        </div>
        <div class="login_body">
            <h2 class="body-h2">
                <div class="body-h2-l">注册新用户</div>
                <div class="body-h2-r">
                    <span>我有账号，去</span>
                    <button @click="toRegister">登录</button>
                </div>
            </h2>
            <div class="body-form">
                <div class="body-form-input">
                    <label><span>手机号：</span></label>
                    <input @blur="phoneVerify(data.phone)" type="text" v-model="data.phone">
                    <span>{{ hint.phone }}</span>
                </div>
                <div class="body-form-input">
                    <label><span>短信验证码：</span></label>
                    <input @click="codeVerify(data.code)" type="text" v-model="data.code">
                    <button type="button" @click="getCode(data.phone)" :disabled="isDisable">{{ hint.time }}</button>
                    <span>{{ hint.code }}</span>
                </div>
                <div class="body-form-input">
                    <label><span>登陆密码：</span></label>
                    <input @blur="passwordVerify(data.password)" type="password" v-model="data.password">
                    <span>{{ hint.password }}</span>
                </div>
                <div class="body-form-state">
                    <span>安全程度&nbsp;&nbsp;</span>
                    <span v-if="hint.state==='弱'" class="state state-weak">弱</span>
                    <span v-if="hint.state==='中'" class="state state-middle">中</span>
                    <span v-if="hint.state==='高'" class="state state-strong">强</span>
                </div>
                <div class="body-form-input">
                    <label><span>确认密码：</span></label>
                    <input @blur="cipherVerify(data.cipher)" type="password" v-model="data.cipher">
                    <span>{{ hint.cipher }}</span>
                </div>
                <div class="body-form-botton">
                    <button type="button" @click="login">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { code, register } from '@/api/register.js'
export default {
    name: 'RegisterPage',

    data() {
        return {
            data: {
                phone: '',
                password: '',
                code:'',
                cipher:''
            },
            hint: {
                phone: '',
                password: '',
                cipher: '',
                code:'',
                time:'获取'
            },
            isDisable:false
        };
    },

    mounted() {

    },

    methods: {
        toRegister() {
            this.$router.replace({
                path: "/login",
            })
        },
        phoneVerify(phone) {
            if (!/^1[3|4|5|7|8]\d{9}$/.test(phone)) {
                this.hint.phone = '请输入正确的电话格式'
            } else {
                this.hint.phone = ''
            }
        },
        codeVerify(code) {
            if (code === '') {
                this.hint.code = '验证码不能为空'
            } else {
                this.hint.code = ''
            }
        },
        passwordVerify(password) {
            if (password === '') {
                this.hint.password = '请输入密码'
                this.hint.state = ''
            } else if (password.length < 6 || password.length > 16) {
                this.hint.password = '密码不能大于16位或小于六位数'
                this.hint.state = ''
            } else {
                this.hint.password = ''
                if (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(password)) {
                    this.hint.state = '中'
                } else if (/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^&*`~()-+=]+$)(?![0-9\\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\\W_!@#$%^&*`~()-+=]{8,30}$/.test(password)){
                    this.hint.state = '高'
                } else if (/^[A-z]+$/.test(password) || /^[0-9]+$/.test(password)) {
                    this.hint.state = '弱'
                }
            }
        },
        cipherVerify(cipher) {
            if (cipher !== this.data.password) {
                this.hint.cipher = '两次密码不一致'
            } else if (cipher === '') {
                this.hint.cipher = '请确认密码'
            } else {
                this.hint.cipher = ''
            }
        },
        async getCode(phone) {
            this.isDisable = true
            this.hint.time = 60
            const data = await code(phone)
            console.log(data);
            const timer = setInterval(() => {
                this.hint.time--
                if (this.hint.time === 0) {
                    clearInterval(timer)
                    this.hint.time = '获取'
                    this.isDisable = false
                }
            },1000)
        },
        async login() {
            try {
                this.phoneVerify(this.data.phone)
                this.codeVerify(this.data.code)
                this.passwordVerify(this.data.password)
                this.cipherVerify(this.data.cipher)
                const { data } = await register(this.data)
                if (data.status == '1' && data.msg === '注册成功') {
                    this.$store.commit('user/SETACCOUNT', this.data.phone)
                    this.$router.replace({
                        path: '/'
                    })
                } else {
                    alert('登录失败')
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.register {
    width: 100%;

    .login_logo {
        width: 1200px;
        height: 98px;
        line-height: 100px;
        margin: 0 auto;
        border-bottom: 2px solid #b1191a;

        img {
            vertical-align: middle;
        }
    }

    .login_body {
        width: 1198px;
        height: 515px;
        margin: 8px auto;
        border: 1px solid #ececec;

        .body-h2 {
            height: 41px;
            background-color: #ececec;
            display: flex;
            justify-content: space-between;
            line-height: 41px;

            .body-h2-l {
                margin-left: 10px;
                color: #333333;
                font-weight: 400;
                font-size: 18px;
            }

            .body-h2-r {
                margin-right: 10px;
                color: #333333;
                font-weight: 400;
                font-size: 14px;

                button {
                    color: #b1191a;
                    border: none;
                    cursor: pointer;
                }
            }
        }

        .body-form {
            width: 600px;
            margin: 70px auto;

            .body-form-input {
                display: flex;
                margin: 20px 0;

                label {
                    width: 100px;
                    height: 36px;
                    line-height: 36px;
                    display: block;

                    span {
                        color: #666666;
                        font-size: 14px;
                        float: right;
                    }
                }

                input {
                    width: 240px;
                    height: 32px;
                    color: #666666;
                }

                span {
                    color: #b1191a;
                    line-height: 36px;
                    margin-left: 10px;
                }

                button {
                    width: 50px;
                    height: 36px;
                }
            }

            .body-form-botton {
                button {
                    width: 200px;
                    height: 36px;
                    font-size: 14px;
                    border: none;
                    color: white;
                    background-color: #b1191a;
                    margin-left: 110px;
                    cursor: pointer;

                    &:active {
                        transform: translateY(0.4px) translateX(-0.4px);
                    }
                }
            }

            .body-form-state {
                margin-left: 150px;
                display: flex;
                color: #666666;
                line-height: 20px;

                .state {
                    display: block;
                    width: 30px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    color: white;

                    &-weak {
                        background-color: #DE1111;
                    }

                    &-middle {
                        background-color: #40B83F;
                    }

                    &-strong {
                        background-color: #F79100;
                    }
                }
            }
        }
    }
}
</style>