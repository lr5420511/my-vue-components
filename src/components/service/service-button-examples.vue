<template>
    <div class="service-button">
        <div class="service-button-block">
            single-button组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-button.vue">
            VUE-COMPONENTS-BUTTON
            </a><br/><br/>
            <sin-button></sin-button>
        </div>
        <div class="service-button-block">
        -----以下演示常用的Button组件在各个场景中的应用-----
        </div>
        <div class="service-button-block">
            你可能需要一个警告按钮：<b>{{ example1.testText }}</b><br/><br/>
            <sin-button :enter-color="example1.enterColor"
                        :init-color="example1.initColor"
                        :text="example1.text"
                        @emitClick="example1.testText='你点击了WARN按钮'"
            ></sin-button>
        </div>
        <div class="service-button-block">
            你可能需要一个长文本按钮，并且可以自适应：<br/><br/>
            <sin-button :text="example2.text"
            ></sin-button>
        </div>
    </div>
</template>

<script>
import SingleButton from '../single/single-button.vue';

export default {
    components: {
        'sin-button': SingleButton
    },
    data: () => ({
        example1: {
            initColor: '#ff0066',
            enterColor: '#ff0000',
            text: 'WARN',
            testText: ''
        },
        example2: {
            text: 'THIS IS A LONG TEXT BUTTON.'
        }
    })
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-button {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-button-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
