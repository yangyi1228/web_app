<template>
    <div class="homeRecommend">
        <h1>为你推荐</h1>
        <div class="Recommend_list">
            <div class="item" v-for="item in homeGoods"  :key="item.id">
                <router-link to="/">
                    <div class="item_img">
                        <img :src="item.picture" />
                    </div>
                    <div class="item_introduce">
                        <p>{{ item.name }}</p>
                        <span>￥{{ item.price }}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <van-loading v-show="isShow" style="text-align:center;"  type="spinner" color="#1989fa" size="54px">加载中...</van-loading>
    </div>
</template>

<script>
import { goods } from '@/api/home.js'
export default {
    name: 'HomeRecommend',

    data() {
        return {
            pages: 0,
            size: 10,
            homeGoods: [],
            isShow: false,
            timer:null
        };
    },

    created() {
        this.getGoods()  
    },

    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },

    methods: {
        async getGoods() {
            try {
                this.pages++
                const data = (await goods({ pages: this.pages, size: this.size })).data
                if (data.status === 0 && data.msg === '数据已加载完') {
                    window.removeEventListener('scroll', this.onScroll);
                    return
                }
                this.homeGoods.push(...data.homeGoods)
                if (data.sum === this.homeGoods.length-1) return this.timer = 'over'
                this.timer = null
            } catch (error) {
                console.log(error);
            }
        },
        onScroll() {
            if (this.timer) return
            let clientHeight = document.documentElement.clientHeight;
            let scrollTop = document.documentElement.scrollTop; 
            let contentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);  
            let scrolllBtmHeight = contentHeight - scrollTop - clientHeight
            if (scrolllBtmHeight < 300) {
                this.isShow = true
                this.timer = setTimeout(() => {
                    this.getGoods()
                    this.isShow = false
                },1000)
            }
        }
    },













};
</script>

<style lang="scss" scoped>
.homeRecommend{
    margin: 30px 0 80px 0;
    h1{
        text-align: center;
        height: 65px;
    }
    .Recommend_list{
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        .item{
            width: 230px;
            height: 322px;
            text-align: center;
            background-color: #F5F5F5;
            margin-bottom: 20px;
            transition: all .5s;
            .item_img{
                height: 220px;
                line-height: 220px;
                img{
                    width: 200px;
                    height: 200px;
                    vertical-align: middle
                }
            }
            .item_introduce{
                p{
                    margin: 8px auto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ;
                    width: 190px;
                    height: 48px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 18px;
                    color: #666666;
                }
                span{
                    color: #DF3033;
                    font-size: 16px;
                }
            }

            &:hover{
                transform: translate3d(0,-3px,0);
                box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
            }
        }
    }
}
</style>