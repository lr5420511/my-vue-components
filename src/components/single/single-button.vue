<template>
    <div class="single-button">
        <div class="single-button-wrap"
             :style="{ 'background-color': colorStyle }"
             @mouseenter="enter=true"
             @mouseleave="enter=false"
             @click.stop="click">
            <span class="single-button-text"
                  :style="{ color: textColor }"
            >{{ text }}</span>
            <i class="single-button-mask"></i>
        </div>
    </div>
</template>

<script>
import { disableCol, enableCol } from '../component.config.js'; 
const re = /^#[\da-f]{6}$/i;

export default {
    props: {
        initColor: {
            type: String,
            default: disableCol,
            validator: val => re.test(val)
        },
        enterColor: {
            type: String,
            default: enableCol,
            validator: val => re.test(val)
        },
        textColor: {
            type: String,
            default: '#ffffff',
            validator: val => re.test(val)
        },
        text: {
            type: String,
            default: 'Button default text.',
            validator: val => val.length > 0
        }
    },
    methods: {
        click: function() {
            this.$emit('emitClick', this, ...arguments);
        }
    },
    computed: {
        colorStyle: cur =>
            cur.enter ? cur.enterColor : cur.initColor
    },
    data: () => ({
        enter: false
    })
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-button {
    float: left;
    height: @g-unit-height;
}

.single-button-wrap {
    position: relative;
    height: 100%;
    cursor: pointer;
    border-radius: 3px;
    overflow: hidden;
    transition: background-color .2s;
}

.single-button-text {
    float: left;
    height: 100%;
    line-height: @g-unit-height;
    padding: 0px 10px;
}

.single-button-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}
</style>

