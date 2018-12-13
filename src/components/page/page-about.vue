<template>
    <lay-series :count="layout.count">

    </lay-series>
</template>

<script>
import LayoutSeries from '../layout/layout-series.vue';

export default {
    components: {
        'lay-series': LayoutSeries
    },
    data: () => ({
        layout: {
            count: 2
        },
    })
};
</script>

<style lang="less" scoped>
@import url(../../global.less);


</style>
