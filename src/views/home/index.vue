<template>
    <div class="home">
        <HomeNavigation />
        <HomeGuesslike />
        <HomeDivertingness />
        <HomeRecommend/>
    </div>
</template>

<script>
import HomeNavigation from './components/home-navigation.vue'
import HomeGuesslike from './components/home-guesslike.vue'
import HomeDivertingness from './components/home-divertingness.vue'
import HomeRecommend from './components/home-recommend.vue'

export default {
    name: 'HomePage',

    data() {
        return {

        };
    },

    components: { HomeNavigation, HomeGuesslike, HomeDivertingness, HomeRecommend },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 1200px;
    margin: 0 auto;
}
</style>