<template>
    <div class="service-tab">
        <div class="service-tab-block">
            common-tab组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/common/common-tab.vue">
            VUE-COMPONENTS-TAB
            </a><br/><br/>
            <com-tab v-model="defaultTab.value">
                <template slot="1">TAB DEFAULT CONTENT 1.</template>
                <template slot="2">TAB DEFAULT CONTENT 2.</template>
                <template slot="3">TAB DEFAULT CONTENT 3.</template>
            </com-tab>
        </div>
        <div class="service-tab-block">
            子组件包含：single-group<br/><br/>
            以下演示常用的Tab组件在各个场景中的应用，组件会自适应在切换过程中自身内容的高度变化，还可以配置是否切换时应保留组件状态。<br/><br/>
            你甚至还可以把它当成一个幻灯片播放器，就像是第二个演示做的那样。<br/><br/>
            <com-tab :width="example1.width"
                     :vertical="example1.vertical"
                     v-model="example1.value"
                     :items="example1.items">
                <template slot="1">
                    <div style="height:500px;border:solid 1px #eee;text-align:center;line-height:500px;">A tab content. Height: 500px</div>
                </template>
                <template slot="2">
                    <div style="height:300px;border:solid 1px #eee;text-align:center;line-height:300px;">B tab content. Height: 300px</div>
                </template>
                <template slot="3">
                    <div style="height:100px;border:solid 1px #eee;text-align:center;line-height:100px;">C tab content. Height: 100px</div>
                </template>
            </com-tab>
            <br/><br/>
            <com-tab :width="example2.width"
                     v-model="example2.value"
                     :items="example2.items"
                     :duration="example2.duration"
                     :keep="example2.keep">
                <template slot="1">
                    <img style="width: 100%; height: 500px;" src="/static/1.jpg" />
                </template>
                <template slot="2">
                    <img style="width: 100%; height: 500px;" src="/static/2.jpg" />
                </template>
                <template slot="3">
                    <img style="width: 100%; height: 500px;" src="/static/3.jpg" />
                </template>
            </com-tab>
        </div>
    </div>
</template>

<script>
import CommonTab from '../common/common-tab.vue';

export default {
    components: {
        'com-tab': CommonTab
    },
    data: () => ({
        defaultTab: { value: 0 },
        example1: {
            width: 1000,
            vertical: true,
            value: 0,
            items: [
                { id: 1, text: ' A ' },
                { id: 2, text: ' B '},
                { id: 3, text: ' C '}
            ]
        },
        example2: {
            width: 1000,
            value: 0,
            items: [
                { id: 1, text: ' 第 一 张 ' },
                { id: 2, text: ' 第 二 张 ' },
                { id: 3, text: ' 第 三 张 ' }
            ],
            keep: false,
            duration: 3000
        }
    })
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-tab {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-tab-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
