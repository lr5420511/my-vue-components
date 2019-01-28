<template>
    <div class="service-carousel">
        <div class="service-carousel-block">
            single-carousel组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-carousel.vue">
            VUE-COMPONENTS-CAROUSEL
            </a><br/><br/>
            <sin-carousel v-model="defaultCarousel.value"
            ></sin-carousel>
        </div>
        <div class="service-carousel-block">
        -----以下演示常用的Carousel组件在各个场景中的应用-----
        </div>
        <div class="service-carousel-block">
            你可能需要一个尺寸以及内容项可定制，并且逆向（相对于默认移动方向）快速移动的轮播图<br/><br/>
            <sin-carousel :width="example1.width"
                          :height="example1.height"
                          :items="example1.items"
                          :vector="example1.vector"
                          :duration="example1.duration"
                          v-model="example1.value"
            ></sin-carousel>
        </div>
        <div class="service-carousel-block">
            你可能需要一个预览项颜色风格可定制，并且纵向移动的轮播图<br/><br/>
            <sin-carousel :disable-color="example2.disableColor"
                          :enable-color="example2.enableColor"
                          :vertical="example2.vertical"
                          v-model="example2.value"
                          :items="example2.items"
            ></sin-carousel>
        </div>
        <div class="service-carousel-block">
            你可能需要一个没有预览项，并且可以响应图片点击的轮播图。你点击了当前项目的id: <b>{{ example3.currentID }}</b><br/><br/>
            <sin-carousel :previewable="example3.previewable"
                          v-model="example3.value"
                          :items="example3.items"
                          @emitClick="example3Click"
            ></sin-carousel>
        </div>
        <div class="service-carousel-block">
        当然你也可以根据自己需求把以上展示的特性任意组合，你喜欢就好O(∩_∩)O~
        </div>
    </div>
</template>

<script>
import SingleCarousel from '../single/single-carousel.vue';

export default {
    components: {
        'sin-carousel': SingleCarousel
    },
    data: () => ({
        defaultCarousel: { value: 0 },
        example1: {
            width: 500,
            height: 300,
            duration: 2000,
            vector: -1,
            value: 0,
            items: Array(4).fill(null).map((cur, i) => ({
                id: i + 1, src: `/static/${ i + 1 }.jpg`
            }))
        },
        example2: {
            disableColor: '#ffffff',
            enableColor: '#ff0099',
            vertical: true,
            value: 0,
            items: Array(4).fill(null).map((cur, i) => ({
                id: i + 1, src: `/static/${ i + 1 }.jpg`
            }))
        },
        example3: {
            currentID: null,
            previewable: false,
            value: 0,
            items: Array(4).fill(null).map((cur, i) => ({
                id: i + 1, src: `/static/${ i + 1 }.jpg`
            }))
        }
    }),
    methods: {
        example3Click: function() {
            this.example3.currentID = arguments[0].id;
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-carousel {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-carousel-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
