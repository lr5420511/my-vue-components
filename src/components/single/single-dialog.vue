<template>
    <div class="single-dialog"
         :style="{ left: `${ left }px`, top: `${ top }px` }">
        <div class="single-dialog-wrap">
            <div class="single-dialog-child"
                 :style="{ width: `${ domainWidth }px`, 'background-color': color }">
                <div class="single-dialog-move"
                     :style="{ color: disableColor, width: `${ moveWidth }px` }"
                     @mousedown="onMouseDown">
                    <div class="icon-parent single-dialog-icon">
                        <i class="icon-clip icon-clip-color"></i>
                    </div>
                    {{ title }}
                    <div class="single-dialog-move-mask"
                         :style="{ cursor: movable ? 'move' : 'auto' }"
                    ></div>
                </div>
                <div class="icon-parent single-dialog-icon" ref="close"
                     v-if="closable"
                     @click.stop="close(false)">
                    <i class="icon-close icon-close-color"></i>
                </div>
            </div>
            <div class="single-dialog-child" ref="domain"
                 :style="{ width: `${ domainWidth }px` }">
                <div class="single-dialog-content" ref="content">
                    <slot>Dialog default content.</slot>
                </div>
            </div>
            <div class="single-dialog-child"
                 :style="{ width: `${ domainWidth }px` }"
                 v-if="hasFoot">
                <hr class="single-dialog-line" 
                    :style="{ 'background-color': color }"
                />
                <span class="single-dialog-operat"
                      v-for="(cur, index) in buttons"
                      :key="cur.id"
                      :style="{ color: index == btnIndex ? enableColor : disableColor }"
                      @mouseenter="btnIndex=index"
                      @mouseleave="btnIndex=null"
                      @click.stop="buttonClick(cur, index)"
                >{{ cur.text }}</span>
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
        hasMask: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: 'Dialog default title',
            validator: val => val.length > 0
        },
        color: {
            type: String,
            default: '#e0e0e0',
            validator: val => re.test(val)
        },
        closable: {
            type: Boolean,
            default: true
        },
        movable: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        },
        type: {
            type: String,
            default: 'default', // default, slide or push
            validator: val => /^(default|slide|push)$/.test(val)
        },
        buttons: {
            type: Array,
            default: () => [
                { id: 1, text: 'I ENJOY IT!' }
            ]
        }
    },
    data: () => ({
        mask: null,
        closeWidth: 0,
        domainWidth: 0,
        domainHeight: 0,
        moveToLeft: null,
        moveToTop: null,
        left: 0,
        top: 0,
        btnIndex: null,
        timer: null,
        height: 0
    }),
    computed: {
        moveWidth: cur =>
            cur.domainWidth - cur.closeWidth,
        hasFoot: cur =>
            Boolean(cur.buttons.length) 
    },
    methods: {
        maskOperator: function(create = true) {
            const parent = this.$el.offsetParent;
            if(!create) {
                this.mask && (
                    this.mask = parent.removeChild(this.mask) && null
                );
                return;
            }
            const mask = document.createElement('div');
            Object.assign(mask.style, {
                position: 'absolute',
                zIndex: 2000,
                width: `${ parent.scrollWidth }px`,
                height: `${ parent.scrollHeight }px`,
                backgroundColor: this.disableColor,
                opacity: 0.1,
                top: '0px',
                left: '0px'
            });
            this.mask = parent.appendChild(mask);
        },
        getCloseWidth: function() {
            return this.closable ? 
                ['borderLeftWidth', 'width', 'borderRightWidth'].reduce((res, prop) =>
                    res + parseFloat(getComputedStyle(this.$refs.close)[prop])
                , 0) : 0;
        },
        request: function(auto) {
            this.$emit('emitClose', auto, this);
        },
        onMouseDown: function(ev) {
            if(!this.movable) return;
            const { left, top } = this.getPosition(this.$el);
            this.moveToLeft = ev.pageX - left;
            this.moveToTop = ev.pageY - top;
            const body = document.body;
            body.addEventListener('mousemove', this.mouseMoveHook);
            body.addEventListener('mouseup', this.mouseUpHook);
        },
        mouseMoveHook: function(ev) {
            const { left, top } = this.getPosition(
                this.$el.offsetParent
            );
            this.left = ev.pageX - this.moveToLeft - left;
            this.top = ev.pageY - this.moveToTop - top;
        },
        mouseUpHook: function() {
            const body = document.body;
            body.removeEventListener('mousemove', this.mouseMoveHook);
            body.removeEventListener('mouseup', this.mouseUpHook);
        },
        getPosition: function(el) {
            const offset = this.__proto__.__proto__.constructor.offset;
            return offset(el);
        },
        buttonClick: function(btn, index) {
            this.$emit('emitClick', btn, index, this);
        },
        getInit: function(callback) {
            const root = document.body || document.documentElement,
                parent = this.$el.offsetParent,
                clientPos = callback(this, root, parent),
                parentPos = this.getPosition(parent);
            return {
                left: clientPos.left + root.scrollLeft - parentPos.left,
                top: clientPos.top + root.scrollTop - parentPos.top
            };
        },
        default: async function(show = true) {
            if(!show) return;
            const pos = this.getInit((cur, root) => ({
                left: (root.clientWidth - cur.domainWidth) / 2,
                top: (root.clientHeight - cur.height) / 2
            }));
            Object.assign(this, pos);
        },
        slide: async function(show = true) {
            const wrap = this.$el.children[0],
                domain = this.$refs.domain;
            if(show) {
                const pos = this.getInit((cur, root) => ({
                    left: (root.clientWidth - cur.domainWidth) / 2,
                    top: (root.clientHeight - cur.height) / 2
                }));
                Object.assign(this, pos);
                domain.style.height = wrap.style.width = '0px';
            }
            const temp = show ? { 
                fir: wrap, sec: domain, 
                firOpt: { width: this.domainWidth }, secOpt: { height: this.domainHeight } 
            } : {
                fir: domain, sec: wrap,
                firOpt: { height: 0 }, secOpt: { width: 0 }
            };
            await veloc(temp.fir, temp.firOpt, { duration: 400 });
            await veloc(temp.sec, temp.secOpt, { duration: 400 });
            show && (domain.style.height = wrap.style.width = 'auto');
        },
        push: async function(show = true) {
            const el = this.$el,
                pos = this.getInit((cur, root) => ({
                    left: root.clientWidth,
                    top: root.clientHeight - cur.height
                }));
            show && (Object.assign(el.style, {
                left: `${ pos.left }px`, top: `${ pos.top }px`
            }));
            const temp = show ? {
                left: pos.left - this.domainWidth, top: pos.top
            } : {
                left: pos.left, top: pos.top
            };
            await veloc(el, temp, { duration: 400 });
        },
        close: async function(auto = true) {
            await this[this.type](false);
            this.hasMask && (this.maskOperator(false));
            this.request(auto);
        }
    },
    mounted: async function() {
        this.hasMask && (this.maskOperator(true));
        const content = getComputedStyle(this.$refs.content);
        this.domainWidth = ['paddingLeft', 'width', 'paddingRight'].reduce((res, prop) =>
            res + parseFloat(content[prop])
        , 0);
        this.domainHeight = ['paddingTop', 'height', 'paddingBottom'].reduce((res, prop) =>
            res + parseFloat(content[prop])
        , 0);
        this.height = parseFloat(getComputedStyle(this.$el.children[0]).height);
        this.closeWidth = this.getCloseWidth();
        await this[this.type]();
        clearTimeout(this.timer);
        this.duration && (this.timer =
            setTimeout(() => this.close(), this.duration)
        );
    },
    watch: {
        hasMask: function(val) {
            this.maskOperator(val);
        },
        closable: function() {
            this.$nextTick(() => (
                this.closeWidth = this.getCloseWidth()
            ));
        },
        duration: function(val) {
            clearTimeout(this.timer);
            val && (this.timer = setTimeout(() => this.close(), val));
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-dialog {
    position: absolute;
    z-index: 2001;
}

.single-dialog-wrap {
    position: relative;
    background-color: @g-sixth-color;
    box-shadow: 0 0 10px 1px @g-third-color;
    overflow: hidden;
}

.single-dialog-child {
    overflow: hidden;
}

.single-dialog-move {
    position: relative;
    float: left;
    height: @g-unit-height;
    text-indent: 2px;
    line-height: @g-unit-height;
}

.single-dialog-icon {
    float: left;
}

.single-dialog-move-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
}

.single-dialog-content {
    position: relative;
    float: left;
    min-width: 300px;
    padding: 10px;
    overflow: hidden;
}

.single-dialog-line {
    border: none;
    width: 90%;
    height: 1px;
    margin: 2px auto;
}

.single-dialog-operat {
    float: right;
    height: @g-unit-height;
    line-height: @g-unit-height;
    margin: 5px 20px 5px 0px;
    cursor: pointer;
}
</style>
