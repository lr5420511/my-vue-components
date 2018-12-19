<template>
    <div class="single-textarea">
        <div class="single-textarea-wrap"
             @mouseenter="enter=true"
             @mouseleave="enter=false">
            <span class="single-textarea-title" ref="title"
                  :style="{ color: colorStyle, top: titleTop }"
            >{{ displayTitle }}</span>
            <textarea class="single-textarea-in"
                      :style="{ 
                          width: `${ width }px`, height: `${ height }px`, 
                          color: disableColor, 'border-color': colorStyle 
                      }"
                      :readonly="readOnly"
                      :value="value"
                      @focusin="focus=true"
                      @focusout="focus=false"
                      @keydown.enter.stop="onKeyDown"
                      @input="valueChanged"
            ></textarea>
        </div>
    </div>
</template>

<script>
import { disableCol, enableCol } from '../component.config';

const re = /^#[\da-f]{6}$/i;

export default {
    props: {
        enableColor: {
            type: String,
            default: enableCol,
            validator: val => re.test(val)
        },
        disableColor: {
            type: String,
            default: disableCol,
            validator: val => re.test(val)
        },
        invaildColor: {
            type: String,
            default: '#ff0000',
            validator: val => re.test(val)
        },
        width: {
            type: Number,
            default: 500,
            validator: val => val > 0
        },
        height: {
            type: Number,
            default: 200,
            validator: val => val > 0
        },
        displayTitle: {
            type: String,
            default: 'Textarea default title:',
            validator: val => val.length > 0
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
        vaild: {
            type: Boolean,
            default: true
        }
    },
    data: () => ({
        enter: false,
        focus: false,
        titleHeight: 0
    }),
    computed: {
        colorStyle: cur => {
            const invaild = cur.regular && !cur.vaild,
                enable = cur.enter || cur.focus || (cur.value && cur.value.length);
            return enable ? (invaild ?
                cur.invaildColor : cur.enableColor
            ) : cur.disableColor;
        },

        titleTop: cur => cur.focus || (cur.value && cur.value.length) ?
            4 - cur.titleHeight : 0
    },
    mounted: function() {
        this.titleHeight = parseFloat(getComputedStyle(this.$refs.title).height);
    },
    methods: {
        valueChanged: function(ev) {
            const curValue = ev.target.value;
            if(this.regular) {
                const temp = this.regular.test(curValue);
                temp !== this.vaild && (
                    this.$emit('emitVaildChanged', temp, this)
                );
            }
            this.$emit('input', curValue, this);
        },
        onKeyDown: function() {
            this.$emit('emitEnterDown', this);
        }
    } 
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-textarea {
    float: left;
    margin-top: @g-unit-height;
}

.single-textarea-wrap {
    position: relative;
    float: left;
}

.single-textarea-title {
    position: absolute;
    height: @g-unit-height;
    line-height: @g-unit-height;
    left: 7px;
    transition: top .2s;
}

.single-textarea-in {
    position: relative;
    border-style: solid;
    border-width: 2px;
    outline: none;
    background-color: transparent;
    padding: 5px;
    font-family: @g-font-family;
    font-size: @g-font-size;
}
</style>
