<template>
    <ul class="layout-series-wrap">
        <li class="layout-series-block"
            :style="{ 'margin-top': `${ margin }px`, 'margin-bottom': `${ margin }px` }"
            v-for="ind in slots"
            :key="ind">
            <slot :name="ind"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            default: 3,
            validator: val => val > 1
        },
        margin: {
           type: Number,
           default: 10,
           validator: val => val >= 0
        }
    },
    computed: {
        slots: cur => 
            Array(cur.count).fill(1).map((cur, i) => i)
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.layout-series-wrap {
    list-style: none;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    min-height: @g-content-height;
}

.layout-series-block {
    background-color: @g-sixth-color;
    padding: 5px;
    overflow: hidden;
}
</style>
