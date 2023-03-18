<!-- 主页顶部导航 -->
<template>
    <div class="navigation">
        <HomeCategory />
        <AppCarousel :sliders="homeBanner" :autoPlay="true" />
        <HomeToprightnav/>
        <HomeDailyrecommend/>
    </div>
</template>

<script>
import HomeCategory from './home-category.vue'
import HomeToprightnav from './home-toprightnav'
import HomeDailyrecommend from './home-dailyrecommend.vue'
import { banner } from '@/api/home'

export default {
    name: 'HomeNavigation',

    data() {
        return {
            homeBanner: []
        };
    },

    components: { HomeCategory, HomeToprightnav, HomeDailyrecommend },

    created() {
        this.getBanner()
    },

    mounted() {

    },

    methods: {
        async getBanner() {
            try {
                const { homeBanner } = (await banner()).data
                this.homeBanner = homeBanner
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-wrap: wrap;
}
</style>