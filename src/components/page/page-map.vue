<template>
    <lay-flex>
        <sin-carousel :width="carousel.width"
                      :height="carousel.height"
                      :items="carousel.items"
                      :duration="carousel.duration"
                      v-model="carousel.value"
                      @emitClick="carouselEmitClick"
        ></sin-carousel>
        <sin-dialog v-if="dialog.display"
                    :buttons="dialog.buttons"
                    :closable="dialog.closable"
                    :duration="dialog.duration"
                    :has-mask="dialog.hasMask"
                    :movable="dialog.movable"
                    :title="dialog.title"
                    :type="dialog.type"
                    @emitClose="dialogEmitClose">
            <div class="page-map-message-domain">
                <div>
                    这是一个基于VUE的前端组件库和作者介绍，有各种各样的组件供选择。
                    <br/><br/><br/>
                    如果需要查看API及用法请转到<a href="https://github.com/lr5420511/my-vue-components">作者的git仓库</a>。
                </div>
            </div>
        </sin-dialog>
    </lay-flex>
</template>

<script>
import LayoutFlex from '../layout/layout-flex.vue';
import SingleCarousel from '../single/single-carousel.vue';
import SingleDialog from '../single/single-dialog.vue';

export default {
    components: {
        'lay-flex': LayoutFlex,
        'sin-carousel': SingleCarousel,
        'sin-dialog': SingleDialog
    },
    data: () => ({
        carousel: {
            width: 1270,
            height: 600,
            value: 1,
            duration: 3000,
            items: Array(11).fill(null).map((cur, i) => 
                ({ id: i + 1, src: `/static/${ i + 1 }.jpg` })
            )
        },
        dialog: {
            display: false,
            movable: false,
            closable: false,
            title: '欢迎光临Alex-liao的VUE组件库',
            hasMask: false,
            type: 'push',
            buttons: [],
            duration: 15000
        }
    }),
    methods: {
        carouselEmitClick: function() {
            alert('注入到当前carousel实例的emitClick挂钩点的钩子函数正在执行。');
        },
        dialogEmitClose: function() {
            this.dialog.display = false;
        }
    },
    mounted: function() {
        this.dialog.display = true;
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.page-map-message-domain {
    width: 400px;
}
</style>
