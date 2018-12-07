<template>
    <lay-flex>
        <sin-carousel :width="carousel.width"
                      :height="carousel.height"
                      :items="carousel.items"
                      v-model="carousel.value"
                      @emitClick="carouselEmitClick"
        ></sin-carousel>
    </lay-flex>
</template>

<script>
import LayoutFlex from '../layout/layout-flex.vue';
import SingleCarousel from '../single/single-carousel.vue';

export default {
    components: {
        'lay-flex': LayoutFlex,
        'sin-carousel': SingleCarousel
    },
    data: () => ({
        carousel: {
            width: 1270,
            height: 600,
            value: 1,
            items: Array(11).fill(null).map((cur, i) => 
                ({ id: i + 1, src: `/static/${ i + 1 }.jpg` })
            )
        }
    }),
    methods: {
        carouselEmitClick: function() {
            alert(...arguments);
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

</style>
