<template>
    <div class="diverTingness">
        <div class="diverTingness_title">
            <h3>传智播客·有趣区</h3>
        </div>
        <div class="diverTingness_list">
            <img src="@/static/images/01-电商-主页-gai_21.png" />
            <img src="@/static/images/01-电商-主页-gai_22.png" />
            <img src="@/static/images/01-电商-主页-gai_23.png" />
            <img src="@/static/images/01-电商-主页-gai_24.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeDivertingness',

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
.diverTingness{
    width: 1200px;
    margin-top: 22px;
    .diverTingness_title{
        h3{
            height: 38px;
            line-height: 38px;
            font-size: 18px;
            font-weight: 500;
            color: #333333;
        }
    }
    .diverTingness_list{
        border: 1px solid #ededed;
        img{
            height: 405px;
            width: 194px;
        }
        img:not(:nth-child(2),:nth-child(4)){
            width: 405px;
        }
    }
}
</style>