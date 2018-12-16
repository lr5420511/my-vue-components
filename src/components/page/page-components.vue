<template>
    <lay-flex>
        <ser-components :width="componentsWidth"></ser-components>
        <sin-dialog v-if="notice.display"
                    :closable="notice.closable" 
                    :movable="notice.movable"
                    :title="notice.title"
                    :type="notice.type"
                    :buttons="notice.buttons"
                    @emitClose="notice.display=false"
                    @emitClick="noticeClick">
            <div class="page-components-notice">
            这些Vue组件是本人辛苦码出来的，如需使用到别处，请标明出处。
            </div>
            <div class="page-components-notice">
            全组件代码仓库地址：<a href="https://github.com/lr5420511/my-vue-components">Alex liao's VUE components.</a>
            </div>
            <div class="page-components-notice">
            和我一起特训：<a href="https://www.codewars.com/users/lr5420511">Alex liao's CODEWARS home.</a>
            </div>
            <div class="page-components-notice">联系我：liaorui5420511@gmail.com</div>
        </sin-dialog>
    </lay-flex>
</template>

<script>
import LayoutFlex from '../layout/layout-flex.vue';
import ServiceComponents from '../service/service-components.vue';
import SingleDialog from '../single/single-dialog.vue';

export default {
    components: {
        'lay-flex': LayoutFlex,
        'ser-components': ServiceComponents,
        'sin-dialog': SingleDialog
    },
    data: () => ({
        componentsWidth: 1,
        notice: {
            display: false,
            closable: false,
            movable: false,
            title: '作者有话说',
            type: 'slide',
            buttons: [
                { id: 'know', text: '我知道了' }
            ]
        }
    }),
    mounted: function() {
        this.componentsWidth = parseFloat(
            getComputedStyle(this.$el).width
        );
        this.notice.display = true;
    },
    methods: {
        noticeClick: function() {
            const notice = arguments[2];
            notice.close(false);
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.page-components-notice {
    width: 500px;
    margin: 20px 0px;
}
</style>
