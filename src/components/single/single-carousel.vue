<template>
    <div class="single-carousel"
         :style="{ width: `${ width }px`, height: `${ height }px` }">
        <div class="single-carousel-wrap">
            <ul class="single-carousel-domain"
                ref="domain"
                :style="{ 
                    width: `${ domainSize.width }px`, 
                    height: `${ domainSize.height }px`,
                    top: `${ domainPosition.top }px`,
                    left: `${ domainPosition.left }px` 
                }">
                <li class="single-carousel-block"
                    v-for="item in shows"
                    :key="item.id"
                    :style="{ width: `${ width }px`, height: `${ height }px` }"
                    @click.stop="itemClick(item)">
                    <img :src="item.src" />
                </li>
            </ul>
            <div class="single-carousel-next icon-parent"
                 v-show="directionExist.next"
                 :style="{ top: `${ directionTop }px` }"
                 @click.stop="next(1, false)">
                <i class="icon-previous icon-previous-color"></i>
            </div>
            <div class="single-carousel-previous icon-parent"
                 v-show="directionExist.previous"
                 :style="{ top: `${ directionTop }px` }"
                 @click.stop="next(-1, false)">
                <i class="icon-next icon-next-color"></i>
            </div>
            <div class="single-carousel-foot"
                 ref="preview"
                 v-if="previewable"
                 :style="{ left: `${ previewLeft }px` }">
                <i class="single-carousel-item"
                   v-for="(item, index) in items"
                   :key="item.id"
                   :style="{ 'background-color': index === value ? enableColor : disableColor }"
                   @click.stop="request(index, item, false)"
                ></i>
            </div>
        </div>
    </div>
</template>

<script>
import { enableCol, disableCol, veloc } from '../component.config';
import '../../style/web-icons/icon-parent.less';
import '../../style/web-icons/icon-generic.less';
import '../../style/web-icons/icon-color.less';

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
        width: {
            type: Number,
            default: 800,
            validator: val => val > 144
        },
        height: {
            type: Number,
            default: 450,
            validator: val => val > 98
        },
        vertical: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 5000,
            validator: val => val >= 0
        },
        vector: {
            type: Number,
            default: 1,
            validator: val => Math.abs(val) === 1
        },
        value: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        },
        previewable: {
            type: Boolean,
            default: true
        },
        items: {
            type: Array,
            default: () => [
                { id: 1, src: null },
                { id: 2, src: null },
                { id: 3, src: null }
            ],
            validator: val => val.length > 2
        }
    },
    methods: {
        next: async function(vector, auto) {
            const domain = this.$refs.domain;
            if(!(this.togglable && domain)) return;
            this.togglable = false;
            this.toggle();
            await veloc(domain,  
                { 
                    left: `-=${ this.vertical ? 0 : vector * this.width }`,
                    top: `-=${ this.vertical ? vector * this.height : 0 }` 
                },
                { duration: 600 }
            );
            this.togglable = true;
            const items = this.items;
            let index = (this.value + vector) % items.length;
            index = index < 0 ? items.length - 1 : index;
            this.request(index, items[index], auto);
        },
        request: function(index, cur, auto) {
            if(!this.togglable) return;
            this.toggle().$emit('input', index, cur, auto, this);
            this.timer || (this.toggle());
        },
        itemClick: function(cur) {
            this.$emit('emitClick', cur, this);
        },
        toggle: function() {
            if(this.duration) {
                const timer = this.timer;
                (!timer && (this.timer = setTimeout(() =>
                    this.next(this.vector, true), this.duration
                ))) || (
                    clearTimeout(timer) || (this.timer = null)
                );
            }
            return this;
        },
        move: function(event) {
            const { offset } = this.__proto__.__proto__.constructor,
                position = offset(this.$el),
                left = event.pageX - position.left,
                top = event.pageY - position.top,
                enter = left >= 0 && left <= this.width && 
                    top >= 0 && top <= this.height;
            this.direction = enter ? 
                (left > this.width / 2 ? -1 : 1) : 0;
        },
        getWidth: function(el) {
            return parseFloat(getComputedStyle(el).width);
        }
    },
    data: () => ({
        timer: null,
        directionWidth: 0,
        previewWidth: 0,
        direction: 0,
        togglable: true
    }),
    computed: {
        domainSize: cur => cur.vertical ?
            { 
                width: cur.width, 
                height: 3 * cur.height 
            } :
            { 
                width: 3 * cur.width, 
                height: cur.height 
            },
        domainPosition: cur => cur.vertical ?
            {
                left: 0,
                top: -cur.height
            } :
            {
                left: -cur.width,
                top: 0
            },
        directionTop: cur => 
            (cur.height - cur.directionWidth) / 2,
        directionExist: cur =>
            ({
                next: cur.direction === 1,
                previous: cur.direction === -1
            }),
        previewLeft: cur => 
            (cur.width - cur.previewWidth) / 2,
        shows: cur => {
            const ind = cur.value, items = cur.items;
            return [ind - 1, ind, ind + 1].map(cur =>
                cur > -1 && cur < items.length ? items[cur] : (
                    cur < 0 ? items[items.length - 1] : items[0]
                )
            );
        }
    },
    mounted: function() {
        this.previewable && (
            this.previewWidth = this.getWidth(this.$refs.preview)
        );
        this.directionWidth = this.getWidth(this.$refs.domain.nextElementSibling);
        const body = document.body;
        body.addEventListener('mouseenter', this.move);
        body.addEventListener('mousemove', this.move);
        this.toggle();
    },
    destroyed: function() {
        const body = document.body;
        body.removeEventListener('mouseenter', this.move);
        body.removeEventListener('mousemove', this.move);
    },
    watch: {
        value: function() {
            const domain = this.$refs.domain;
            domain.style.left = `${ this.domainPosition.left }px`;
            domain.style.top = `${ this.domainPosition.top }px`;
        },
        items: function() {
            this.previewable && (
                this.previewWidth = this.getWidth(this.$refs.preview)
            );
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-carousel {
    cursor: pointer;
}

.single-carousel-wrap {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.single-carousel-domain {
    position: absolute;
    list-style: none;
    margin: 0px;
    padding: 0px;
}

.single-carousel-block {
    float: left;
}

.single-carousel-block
img {
    width: 100%;
    height: 100%;
}

.single-carousel-next {
    position: absolute;
    left: @g-unit-height;
}

.single-carousel-previous {
    position: absolute;
    right: @g-unit-height;
}

.single-carousel-foot {
    position: absolute;
    bottom: @g-unit-height;
}

.single-carousel-item {
    float: left;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 5px 13px;
    box-shadow: 0 0 5px @g-second-color; 
}
</style>
