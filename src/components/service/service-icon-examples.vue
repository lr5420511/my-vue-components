<template>
    <div class="service-icon">
        <div class="service-icon-block">
            single-icon组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-icon.vue">
            VUE-COMPONENTS-ICON
            </a><br/><br/>
            <sin-icon></sin-icon>
        </div>
        <div class="service-icon-block">
        -----以下演示常用的Icon组件在各个场景中的应用-----
        </div>
        <div class="service-icon-block">
            根据需求和场景的不同，我们可能需要各种不同的图标按钮。<br/><br/>
            <sin-icon class="service-icon-input" 
                      icon="left" 
                      tip="向左"
            ></sin-icon>
            <sin-icon class="service-icon-input"
                      icon="right" 
                      tip="向右"
            ></sin-icon>
            <sin-icon class="service-icon-input" 
                      icon="top" 
                      tip="向上"
            ></sin-icon>
            <sin-icon class="service-icon-input" 
                      icon="bottom" 
                      tip="向下"
            ></sin-icon>
            <sin-icon class="service-icon-input"
                      icon="download" 
                      tip="下载"
            ></sin-icon>
            <sin-icon class="service-icon-input"
                      icon="upload" 
                      tip="上传"
            ></sin-icon>
            <sin-icon class="service-icon-input"
                      icon="listen" 
                      tip="聆听"
            ></sin-icon>
            <sin-icon class="service-icon-input"
                      icon="close" 
                      tip="关闭"
            ></sin-icon>
            <sin-icon class="service-icon-input"
                      icon="clip" 
                      tip="固定"
            ></sin-icon>
        </div>
    </div>
</template>

<script>
import SingleIcon from '../single/single-icon.vue';

export default {
    components: {
        'sin-icon': SingleIcon
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-icon {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-icon-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}

.service-icon-input {
    margin: @g-unit-height;
}
</style>
