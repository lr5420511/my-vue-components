<template>
    <div class="single-group">
        <ul class="single-group-wrap">
            <li class="single-group-focus" 
                ref="focus"
                :style="{
                    width: `${ blockWidth }px`,
                    'border-bottom-color': enableColor,
                    top: `${ focusPosition.top }px`,
                    left: `${ focusPosition.left }px`
                }"
            ></li>
            <li class="single-group-block"
                v-for="(item, index) in items"
                :key="item.id"
                :style="{
                    width: `${ blockWidth }px`,
                    float: vertical ? 'none' : 'left',
                    color: index === enterIndex || index === value ? enableColor : disableColor,
                }"
                @mouseenter="enterIndex=index"
                @mouseleave="enterIndex=null"
                @click.stop="blockClick(index)"
            >{{ item.text }}</li>
        </ul>
    </div>
</template>

<script>
import { enableCol, disableCol } from '../component.config';
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
        blockWidth: {
            type: Number,
            default: 200,
            validator: val => val > 0
        },
        vertical: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            default: 0,
            validator: val => val > -1
        },
        duration: {
            type: Number,
            default: 0,
            validator: val => val > -1
        },
        items: {
            type: Array,
            default: () => [
                { id: 1, text: 'single-group item1' },
                { id: 2, text: 'single-group item2' },
                { id: 3, text: 'single-group item3' }
            ],
            validator: val => val.length > 1
        }
    },
    methods: {
        request: function(index) {
            const items = this.items;
            index = index % items.length;
            this.$emit('input', index, items[index], this);
        },
        go: function() {
            if(!this.duration) return;
            return setInterval(() => 
                this.request(this.value + 1), this.duration
            );
        },
        blockClick: function(index) {
            this.duration && (clearInterval(this.inter));
            this.request(index);
            this.inter = this.go();
        }
    },
    computed: {
        focusPosition: cur => cur.vertical ?
            { left: 0, top: cur.blockHeight * cur.value } :
            { left: cur.blockWidth * cur.value, top: 0 }
    },
    mounted: function() {
        const focus = this.$refs.focus;
        this.blockHeight = ['height', 'borderBottomWidth'].reduce((res, prop) => 
            res + parseInt(getComputedStyle(focus)[prop])
        , 0);
        this.request(this.value);
        this.inter = this.go();
    },
    data: () => ({
        blockHeight: 0,
        enterIndex: null,
        inter: null
    }),
    watch: {
        duration: function(val, old) {
            old && (clearInterval(this.inter));
            this.inter = this.go();
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-group {
    float: left;
}

.single-group
ul, li {
    margin: 0px;
    padding: 0px;
}

.single-group-wrap {
    position: relative;
    list-style: none;
    overflow: hidden;
}

.single-group-focus {
    position: absolute;
    height: @g-unit-height - 2px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    transition: all .4s;
}

.single-group-block {
    position: relative;
    height: @g-unit-height;
    text-align: center;
    line-height: @g-unit-height;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
}
</style>
