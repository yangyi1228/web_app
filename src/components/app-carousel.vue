<!-- 轮播图组件 -->
<template>
    <div class="carousel" @mouseenter="stop" @mouseleave="start">
        <ul class="carousel-body">
            <li class="carousel-item" v-for="(item, i) in sliders" :key="item.id"
                :class="{ 'carousel-fade': index === i }">
                <router-link to="/">
                    <img :src="item.imgUrl" />
                </router-link>
            </li>
        </ul>
        <a class="carousel-btn prev" @click="toggle(-1)" href="#"><img src="@/static/images/箭头 下 (1).png" /></a>
        <a class="carousel-btn next" @click="toggle(1)" href="#"><img src="@/static/images/箭头 下 (1).png" /></a>
        <div class="carousel-indicator">
            <a href="#" v-for="(item, i) in sliders" :class="{ active: index === i }" :key="i" @click="index = i"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCarousel',

    props: {
        sliders: {
            type: Array,
            default: () => []
        },
        duration: {
            type: Number,
            default: 3000
        },
        autoPlay: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            index: 0,
            timer: null
        };
    },

    mounted() {
        this.autoPlayFn()
    },

    methods: {
        autoPlayFn() {
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                this.index++
                if (this.index >= this.sliders.length) {
                    this.index = 0
                }
            }, this.duration)
        },
        toggle(step) {
            const newIndex = this.index + step
            if (newIndex < 0) {
                this.index = this.sliders.length - 1
                return
            }
            if (newIndex >= this.sliders.length) {
                this.index = 0
                return
            }
            this.index = newIndex
        },
        stop() {
            if (this.timer) clearInterval(this.timer)
        },
        start() {
            if (this.sliders.length && this.autoPlay) {
                this.autoPlayFn()
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    margin:0 10px;
    width: 720px;
    height: 460px;
    position: relative;

    .carousel-body {
        margin-top: 5px;

        .carousel-item {
            position: absolute;
            opacity: 0;
            transition: opacity 0.5s linear;

            img {
                width: 720px;
                height: 455px;
            }
        }

        .carousel-fade {
            z-index: 1;
            opacity: 1;
        }
    }

    .carousel-btn {
        display: inline-block;
        position: absolute;
        z-index: 2;
        top: 215px;
        height: 50px;
        width: 50px;
        vertical-align: middle;
        text-align: center;

        &:hover {
            background-color: #4a4a4a;
            opacity: 0.5;
        }
    }

    .prev {
        transform: rotateZ(90deg);

        img {
            margin-top: 10px;
        }
    }

    .next {
        right: 0;
        transform: rotateZ(-90deg);

        img {
            margin-top: 10px;
        }
    }

    .carousel-indicator {
        position: absolute;
        bottom: 15px;
        z-index: 2;
        display: flex;
        left: 320px;

        a {
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background-color: #fff;
            margin: 0 3px;
        }

        .active {
            background-color: #C81623;
        }
    }
}
</style>