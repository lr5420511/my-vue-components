<template>
    <div class="layout-half-wrap">
        <div class="layout-half-left"
             :style="{ width: `${ leftWidth }px`, 'margin-right': `${ margin }px` }">
            <slot name="left"></slot>
        </div>
        <div class="layout-half-right"
             :style="{ width: `${ rightWidth }px`, 'margin-left': `${ margin }px` }">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        leftWidth: {
            type: Number,
            default: 625,
            validator: val => val > 0
        },
        rightWidth: {
            type: Number,
            default: 625,
            validator: val => val > 0
        },
        margin: {
            type: Number,
            default: 5,
            validator: val => val >= 0
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.layout-half-wrap {
    overflow: hidden;
    min-height: @g-content-height;
}

.layout-half-left,
.layout-half-right {
    float: left;
    background-color: @g-sixth-color;
    padding: 5px;
}
</style>
