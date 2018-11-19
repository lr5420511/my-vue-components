<template>
    <div class="layout-flex-wrap">
        <slot></slot>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.layout-flex-wrap {
    background-color: @g-sixth-color;
    padding: 5px;
    overflow: hidden;
    min-height: @g-content-height;
}
</style>
