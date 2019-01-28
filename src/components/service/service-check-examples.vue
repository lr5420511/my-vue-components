<template>
    <div class="service-check">
        <div class="service-check-block">
            single-check组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-check.vue">
            VUE-COMPONENTS-CHECK
            </a><br/><br/>
            <sin-check v-model="defaultCheck.value"></sin-check>
        </div>
        <div class="service-check-block">
        -----以下演示常用的Check组件在各个场景中的应用-----
        </div>
        <div class="service-check-block">
            你可能需要一个文本和颜色可定制的逻辑选择框<br/><br/>
            <sin-check :disable-color="example1.disableColor"
                       :enable-color="example1.enableColor"
                       :text="example1.text"
                       v-model="example1.value"
            ></sin-check>
        </div>
        <div class="service-check-block">
            你可能需要一个初始值为真并且可以响应逻辑值切换的逻辑选择框。当前值为：<b>{{ example2.currentValue }}</b><br/><br/>
            <sin-check v-model="example2.value"
                       @input="example2Changed"
            ></sin-check>
        </div>
    </div>
</template>

<script>
import SingleCheck from '../single/single-check.vue';

export default {
    components: {
        'sin-check': SingleCheck
    },
    data: () => ({
        defaultCheck: { value: false },
        example1: {
            disableColor: '#9999ff',
            enableColor: '#ff0099',
            text: '我是check实例一',
            value: false
        },
        example2: {
            value: true,
            currentValue: null
        }
    }),
    methods: {
        example2Changed: function() {
            this.example2.currentValue = arguments[0] ? '真' : '假';
        },
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-check {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-check-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
