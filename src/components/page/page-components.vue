<template>
    <lay-series :count="layout.blockCount">
        <template slot="0">
            <div class="page-components-head">独立组件-Carousel</div>
            <div class="page-components-content">
                <sin-carousel v-model="carousel.value"
                              :items="carousel.items"
                              :vertical="carousel.vertical"
                ></sin-carousel>
            </div>
        </template>
        <template slot="1">
            <div class="page-components-head">独立组件-Button</div>
            <div class="page-components-content">
                <sin-button class="page-components-component"
                            @emitClick="$router.push('/icons')"
                ></sin-button>
            </div> 
        </template>
        <template slot="2">
            <div class="page-components-head">独立组件-Check</div>
            <div class="page-components-content">
                <sin-check class="page-components-component"
                           v-model="check.checked"
                ></sin-check>
            </div>
        </template>
        <template slot="3">
            <div class="page-components-head">独立组件-Text</div>
            <div class="page-components-content">
                <sin-text class="page-components-component"
                          v-model="text.value"
                          :is-password="text.isPassword"
                          @emitEnterDown="text.isPassword=!text.isPassword"
                ></sin-text>
            </div>
        </template>
        <template slot="4">
            <div class="page-components-head">独立组件-Group</div>
            <div class="page-components-content">
                <sin-group class="page-components-component"
                           :duration="group.duration"
                           :items="group.items"
                           :vertical="group.vertical"
                           v-model="group.value"
                           @input="groupToggle"
                ></sin-group>
            </div>
        </template>
    </lay-series>
</template>

<script>
import LayoutSeries from '../layout/layout-series.vue';
import SingleButton from '../single/single-button.vue';
import SingleCheck from '../single/single-check.vue';
import SingleText from '../single/single-text.vue';
import SingleGroup from '../single/single-group.vue';
import SingleCarousel from '../single/single-carousel.vue';

export default {
    components: {
        'lay-series': LayoutSeries,
        'sin-button': SingleButton,
        'sin-check': SingleCheck,
        'sin-text': SingleText,
        'sin-group': SingleGroup,
        'sin-carousel': SingleCarousel
    },
    data: () => ({
        layout: {
            blockCount: 5
        },
        check: {
            checked: true
        },
        text: {
            value: '',
            isPassword: false
        },
        group: {
            vertical: true,
            value: 1,
            duration: 0,
            items: [
                { id: 1, text: 'single-group item1' },
                { id: 2, text: 'single-group item2' },
                { id: 3, text: 'single-group item3' },
                { id: 4, text: 'single-group item4' },
                { id: 5, text: 'single-group item5' },
                { id: 6, text: 'single-group item6' },
                { id: 7, text: 'single-group item7' }
            ]
        },
        carousel: {
            items: [
                { id: 1, src: '/resource/1.jpg' },
                { id: 2, src: '/resource/2.jpg' },
                { id: 3, src: '/resource/3.jpg' },
                { id: 4, src: '/resource/4.jpg' },
                { id: 5, src: '/resource/5.jpg' },
                { id: 6, src: '/resource/6.jpg' }
            ],
            value: 0,
            vertical: true
        }
    }),
    mounted: function() {
        this.$watch('check.checked', (val, old) => 
            console.log(val, old)
        );
    },
    methods: {
        groupToggle: function() {
            const dur = this.group.duration;
            if(dur <= 0) return (this.group.duration = 0);
            this.group.duration -= 20;
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.page-components-head {
    text-align: center;
    padding: 5px 0px;
    border-bottom: solid 1px @g-first-color;
}

.page-components-content {
    padding: 5px;
    overflow: hidden;
}

.page-components-component {
    margin: 50px;
}
</style>
