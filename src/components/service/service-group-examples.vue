<template>
    <div class="service-group">
        <div class="service-group-block">
            single-group组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-group.vue">
            VUE-COMPONENTS-GROUP
            </a><br/><br/>
            <sin-group v-model="defaultGroup.value"></sin-group>
        </div>
        <div class="service-group-block">
        -----以下演示常用的Group组件在各个场景中的应用-----
        </div>
        <div class="service-group-block">
            你可能会需要一个纵向的，内容项和宽度均可自由定制的动画分组。<br/><br/>
            <sin-group :block-width="example1.blockWidth"
                       :duration="example1.duration"
                       :items="example1.items"
                       :vertical="example1.vertical"
                       v-model="example1.value"
            ></sin-group>
        </div>
        <div class="service-group-block">
            你可能会需要一个不同颜色风格，可以响应分组项切换的静态分组。当前选中项的索引是：<b>{{ example2.currentValue }}</b><br/><br/>
            <sin-group :disable-color="example2.disableColor"
                       :enable-color="example2.enableColor"
                       v-model="example2.value"
                       @input="example2Changed"
            ></sin-group>
        </div>
    </div>
</template>

<script>
import SingleGroup from '../single/single-group.vue';

export default {
    components: {
        'sin-group': SingleGroup
    },
    data: () => ({
        defaultGroup: { value: 0 },
        example1: {
            value: 0,
            duration: 2000,
            blockWidth: 300,
            items: [
                { id: 1, text: 'Group example1 item1.' },
                { id: 2, text: 'Group example1 item2.' },
                { id: 3, text: 'Group example1 item3.' },
                { id: 4, text: 'Group example1 item4.' }
            ],
            vertical: true
        },
        example2: {
            value: 0,
            currentValue: 0,
            enableColor: '#ff0099',
            disableColor: '#000000'
        }
    }),
    methods: {
        example2Changed: function(index) {
            this.example2.currentValue = index;
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-group {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-group-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
