<template>
    <lay-flex>
        <com-tab :width="tab.width"
                 :keep="tab.keep"
                 :vertical="tab.vertical"
                 v-model="tab.tabIndex"
                 :items="tab.items">
            <template slot="common-tab">
                <ser-tabs></ser-tabs>
            </template>

            <template slot="single-button">
                <ser-buttons></ser-buttons>
            </template>

            <template slot="single-carousel">
                <ser-carousels></ser-carousels>
            </template>

            <template slot="single-check">
                <ser-checks></ser-checks>
            </template>

            <template slot="single-dialog">
                <ser-dialogs></ser-dialogs>
            </template>

            <template slot="single-group">
                <ser-groups></ser-groups>
            </template>

            <template slot="single-icon">
                <ser-icons></ser-icons>
            </template>

            <template slot="single-select">
                <ser-selects></ser-selects>
            </template>

            <template slot="single-text">
                <ser-texts></ser-texts>
            </template>

            <template slot="single-textarea">
                <ser-textareas></ser-textareas>
            </template>
        </com-tab>
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
import SingleDialog from '../single/single-dialog.vue';
import CommonTab from '../common/common-tab.vue';
import ServiceTabs from '../service/service-tab-examples.vue';
import ServiceButtons from '../service/service-button-examples.vue';
import ServiceCarousels from '../service/service-carousel-examples.vue';
import ServiceChecks from '../service/service-check-examples.vue';
import ServiceDialogs from '../service/service-dialog-examples.vue';
import ServiceGroups from '../service/service-group-examples.vue';
import ServiceIcons from '../service/service-icon-examples.vue';
import ServiceSelects from '../service/service-select-examples.vue';
import ServiceTexts from '../service/service-text-examples.vue';
import ServiceTextareas from '../service/service-textarea-examples.vue';

export default {
    components: {
        'lay-flex': LayoutFlex,
        'sin-dialog': SingleDialog,
        'com-tab': CommonTab,
        'ser-tabs': ServiceTabs,
        'ser-buttons': ServiceButtons,
        'ser-carousels': ServiceCarousels,
        'ser-checks': ServiceChecks,
        'ser-dialogs': ServiceDialogs,
        'ser-groups': ServiceGroups,
        'ser-icons': ServiceIcons,
        'ser-selects': ServiceSelects,
        'ser-texts': ServiceTexts,
        'ser-textareas': ServiceTextareas
    },
    data: () => ({
        notice: {
            display: false,
            closable: false,
            movable: false,
            title: '作者有话说',
            type: 'slide',
            buttons: [
                { id: 'know', text: '我知道了' }
            ]
        },
        tab: {
            keep: false,
            vertical: true,
            tabIndex: 0,
            width: 1,
            items: [
                { id: 'common-tab', text: 'Tab' },
                { id: 'single-button', text: 'Button' },
                { id: 'single-carousel', text: 'Carousel' },
                { id: 'single-check', text: 'Check' },
                { id: 'single-dialog', text: 'Dialog' },
                { id: 'single-group', text: 'Group' },
                { id: 'single-icon', text: 'Icon' },
                { id: 'single-select', text: 'Select' },
                { id: 'single-text', text: 'Text' },
                { id: 'single-textarea', text: 'Textarea' }
            ]
        }
    }),
    mounted: function() {
        this.notice.display = true;
        this.tab.width = parseFloat(
            getComputedStyle(this.$el).width
        );
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
