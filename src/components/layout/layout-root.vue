<template>
    <div class="layout-root-wrap">
        <div class="layout-root-head"
             :style="{ position: clipable ? 'fixed' : 'relative' }">
            <div class="layout-root-content">
                <slot name="head"></slot>
            </div>
        </div>
        <div class="layout-root-body"
             :style="{ 'margin-top': `${ toTop }px` }">
            <div class="layout-root-content">
                <slot></slot>
            </div>
        </div>
        <div class="layout-root-foot">
            <div class="layout-root-content">
                <slot name="foot"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        clipable: {
            type: Boolean,
            default: false
        },
        top: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        }
    },
    computed: {
        toTop: cur => cur.clipable ? 
            cur.top : 0
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.layout-root-wrap {
    position: relative;
    min-width: @g-content-width;
    overflow: hidden;
    min-height: @g-content-height;
}

.layout-root-head {
    width: 100%;
    background-color: @g-sixth-color;
    margin-bottom: 10px;
    padding: 5px 0px;
    box-shadow: 0px 2px 5px @g-third-color;
    top: 0px;
    left: 0px;
    z-index: 1000;
}

.layout-root-body {
    margin-bottom: 5px;
}

.layout-root-foot {
    background-color: @g-third-color;
    color: @g-fifth-color;
    padding: 5px 0px;
}

.layout-root-content {
    width: @g-content-width;
    overflow: hidden;
    margin: 0px auto;
}
</style>
