<template>
    <div class="single-check">
        <div class="single-check-wrap"
             @mouseenter="enter=true"
             @mouseleave="enter=false"
             @click.stop="click">
            <div class="single-check-radius"
                 :style="{ 'border-color': colorStyle }">
                <i class="single-check-point"
                   :style="{ 'background-color': disableColor, transform: value ? 'scale(1)' : 'scale(0)' }"
                ></i>
            </div>
            <span class="single-check-text"
                  :style="{ color: colorStyle }">
            {{ text }}
            </span>
        </div>
    </div>
</template>

<script>
import { disableCol, enableCol } from '../component.config.js'; 
const re = /^#[\da-f]{6}$/i;

export default {
    props: {
        disableColor: {
            type: String,
            default: disableCol,
            validator: val => re.test(val)
        },
        enableColor: {
            type: String,
            default: enableCol,
            validator: val => re.test(val)
        },
        text: {
            type: String,
            default: 'Check default text.',
            validator: val => val.length > 0
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click: function() {
            this.$emit('input', !this.value, this, ...arguments);
        }
    },
    data: () => ({
        enter: false
    }),
    computed: {
        colorStyle: cur =>
            cur.enter || cur.value ? cur.enableColor : cur.disableColor
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-check {
    float: left;
    height: @g-unit-height;
}

.single-check-wrap {
    position: relative;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    padding: 0px 5px;
}

.single-check-radius {
    float: left;
    width: @g-unit-height - 16px;
    height: @g-unit-height - 16px;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    margin-right: 5px;
    padding: 6px;
}

.single-check-point {
    float: left;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform .2s;
}

.single-check-text {
    float: right;
    height: 100%;
    line-height: @g-unit-height + 6px;
}
</style>
