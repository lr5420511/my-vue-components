<template>
    <div class="single-icon">
        <div class="single-icon-wrap icon-parent"
             :title="tip"
             @click.stop="click">
            <i :class="iconStyle"></i>
        </div>
    </div>
</template>

<script>
import '../../style/web-icons/icon-parent.less';
import '../../style/web-icons/icon-generic.less';
import '../../style/web-icons/icon-color.less';

export default {
    props: {
        tip: {
            type: String,
            default: 'Icon default text.',
            validator: val => val.length > 0
        },
        icon: {
            type: String,
            default: 'speak',
            validator: val => val.length > 0
        }
    },
    computed: {
        iconStyle: cur => 
            `icon-${ cur.icon } icon-${ cur.icon }-color`
    },
    methods: {
        click: function() {
            this.$emit('emitClick', this, ...arguments);
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-icon {
    float: left;
}

.single-icon-wrap {
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color .2s;
}

.single-icon-wrap:hover {
    background-color: @g-fifth-color;
    border-color: @g-fourth-color;
}
</style>
