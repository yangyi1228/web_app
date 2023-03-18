<template>
    <div class="dailyRecommend">
        <ul>
            <li class="last-img"><img src="@/static/images/01-电商-主页-gai_17.png" alt=""></li>
            <li class="item-img"><img src="@/static/images/01-电商-主页-gai_11.png" alt=""></li>
            <li class="item-img"><img src="@/static/images/01-电商-主页-gai_12.png" alt=""></li>
            <li class="item-img"><img src="@/static/images/01-电商-主页-gai_13.png" alt=""></li>
            <li class="item-img"><img src="@/static/images/01-电商-主页-gai_14.png" alt=""></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeDailyrecommend',

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
.dailyRecommend {
    width: 1200px;
    box-sizing: border-box;
    height: 163px;

    ul {
        li {
            float: left;
        }

        .last-img {
            img {
                width: 208px;
                height: 163px;
            }
        }

        .item-img {
            img {
                width: 248px;
                height: 163px;
            }
        }
    }
}
</style>