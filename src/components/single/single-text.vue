<template>
    <div class="single-text"
         :style="{ width: `${ width }px` }">
        <div class="single-text-wrap"
             @mouseenter="enter=true"
             @mouseleave="enter=false">
            <span class="single-text-title"
                  :style="{ color: colorStyle, top: titleTop }"
            >{{ displayTitle }}</span>
            <input class="single-text-in" 
                   :style="{ 'border-bottom-color': colorStyle, color: disableColor }"
                   :type="isPassword ? 'password' : 'text'"
                   :readonly="readOnly"
                   :value="value"
                   @input="valueChange"
                   @keydown.enter.stop="enterDown"
                   @focusin="focus=true"
                   @focusout="focus=false"
            />
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
        width: {
            type: Number,
            default: 300,
            validator: val => val > 0
        },
        displayTitle: {
            type: String,
            default: 'Text default title:',
            validator: val => val.length > 0
        },
        isPassword: {
            type: Boolean,
            default: false
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: null
        },
        regular: {
            type: RegExp,
            default: null
        },
        invaildColor: {
            type: String,
            default: '#ff0000',
            validator: val => re.test(val)
        },
        vaild: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        valueChange: function(ev) {
            const curValue = ev.target.value;
            if(this.regular) {
                const temp = this.regular.test(curValue);
                temp !== this.vaild && (
                    this.$emit('emitVaildChanged', temp, this)
                );
            }
            this.$emit('input', curValue, this);
        },
        enterDown: function() {
            this.$emit('emitEnterDown', this, ...arguments);
        }
    },
    data: () => ({
        enter: false,
        focus: false,
        height: 0
    }),
    computed: {
        colorStyle: cur => {
            const invaild = cur.regular && !cur.vaild,
                enable = cur.enter || cur.focus || (cur.value && cur.value.length);
            return enable ? (
                invaild ? cur.invaildColor : cur.enableColor
            ) : cur.disableColor;
        },
        titleTop: cur => cur.focus || (cur.value && cur.value.length) ? 
            10 - cur.height : 0
    },
    mounted: function() {
        this.height = parseFloat(getComputedStyle(this.$el).height);
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-text {
    height: @g-unit-height;
    margin-top: @g-unit-height;
}

.single-text-wrap {
    position: relative;
    height: 100%;
    cursor: text;
}

.single-text-title {
    position: absolute;
    height: 100%;
    line-height: @g-unit-height;
    transition: top .2s;
}

.single-text-in {
    position: relative;
    width: 100%;
    height: @g-unit-height - 2px;
    border: none;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    background-color: transparent;
    outline: none;
    font-family: @g-font-family;
    font-size: @g-font-size;
}
</style>
