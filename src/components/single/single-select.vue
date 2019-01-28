<template>
    <div class="single-select"
         :style="{ width: `${ width }px` }">
        <div class="single-select-wrap"
             @mouseenter="enter=true"
             @mouseleave="enter=false">
            <div class="icon-parent" v-right ref="icon">
                <i class="icon-operation icon-operation-color"></i>
            </div>
            <span class="single-select-title"
                  :style="{ color: colorStyle, top: `${ titleTop }px` }"
            >{{ title }}</span>
            <div class="single-select-line"
                 :style="{ 'border-bottom-color': colorStyle }"
                 @click.stop="selectable=true">
                <span class="single-select-text"
                      :style="{ color: disableColor, width: `${ textWidth }px` }"
                >{{ selectText }}</span>
            </div>
            <ul class="single-select-domain" ref="domain"
                v-if="selectable"
                @wheel.prevent="onWheel">
                <li class="single-select-item"
                    v-for="(item, index) in items"
                    :key="item.id"
                    :style="{ 
                        color: value == index ? enableColor : (
                            enterIndex == index ? domainColor : disableColor
                        ),
                        'background-color': enterIndex == index ? disableColor : 'transparent'
                    }"
                    @mouseenter="enterIndex=index"
                    @mouseleave="enterIndex=null"
                    @click="request(item, index)"
                >{{ item.text }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { enableCol, disableCol, veloc } from "../component.config";
import "../../style/web-icons/icon-parent.less";
import "../../style/web-icons/icon-generic.less";
import "../../style/web-icons/icon-color.less";

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
      default: 250,
      validator: val => val > 0
    },
    maximum: {
      type: Number,
      default: 7,
      validator: val => val > 0
    },
    title: {
      type: String,
      default: "Select default title:",
      validator: val => val.length > 0
    },
    value: {
      type: Number,
      default: -1,
      validator: val => val >= -1
    },
    items: {
      type: Array,
      default: () => [
        { id: 1, text: "select component item1." },
        { id: 2, text: "select component item2." },
        { id: 3, text: "select component item3." }
      ],
      validator: val => val.length > -1
    }
  },
  methods: {
    request: function(cur, index) {
      this.$emit("input", index, cur, this);
    },
    toggle: async function(height) {
      const domain = this.$refs.domain;
      if (domain) {
        veloc.naiver(domain, "stop");
        await veloc(domain, { height }, { duration: 200 });
      }
      return this;
    },
    hook: async function() {
      await this.toggle(0);
      this.$refs.domain && (this.selectable = false);
    },
    onWheel: function(ev) {
      const domain = this.$refs.domain,
        height = parseFloat(getComputedStyle(domain).height),
        scrollHeight = domain.scrollHeight;
      if (height == scrollHeight) return;
      const max = scrollHeight - height,
        up = ev.deltaY < 0,
        old = domain.scrollTop,
        value = up ? old - this.height : old + this.height;
      domain.scrollTop = value <= max && value >= 0 ? value : old;
    }
  },
  data: () => ({
    enter: false,
    enable: false,
    selectable: false,
    enterIndex: null,
    height: 0,
    iconWidth: 0,
    domainColor: null
  }),
  computed: {
    colorStyle: cur =>
      cur.enter || cur.enable ? cur.enableColor : cur.disableColor,

    titleTop: cur => (cur.enable ? 5 - cur.height : 0),

    textWidth: cur => cur.width - cur.iconWidth,

    selectText: cur => {
      const item = cur.items[cur.value];
      return item ? item.text : null;
    },

    domainHeight: cur => {
      const len = cur.items.length;
      return cur.height * (len > cur.maximum ? cur.maximum : len);
    }
  },
  mounted: function() {
    this.enable = Boolean(this.selectText);
    this.height = parseFloat(getComputedStyle(this.$el).height);
    this.iconWidth = ["borderLeftWidth", "width", "borderRightWidth"].reduce(
      (res, prop) => res + parseFloat(getComputedStyle(this.$refs.icon)[prop]),
      0
    );
    this.request(this.items[this.value], this.value);
    document.body.addEventListener("click", this.hook);
  },
  destroyed: function() {
    document.body.removeEventListener("click", this.hook);
  },
  watch: {
    selectable: function(val) {
      this.enable = val || Boolean(this.selectText);
      if (!val) return;
      this.$nextTick(() => {
        if (!this.domainColor) {
          this.domainColor = getComputedStyle(
            this.$refs.domain
          ).backgroundColor;
        }
        this.toggle(this.domainHeight);
      });
    },
    selectText: function(val) {
      this.enable = Boolean(val);
    },
    items: function() {
      this.request(this.items[this.value], this.value);
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.single-select {
  float: left;
  height: @g-unit-height;
  margin-top: @g-unit-height;
}

.single-select-wrap {
  position: relative;
  height: 100%;
  cursor: pointer;
}

.single-select-title {
  position: absolute;
  height: 100%;
  line-height: @g-unit-height;
  transition: top 0.2s;
}

.single-select-line {
  position: absolute;
  width: 100%;
  height: @g-unit-height - 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.single-select-text {
  float: left;
  height: 100%;
  line-height: @g-unit-height - 2px;
  white-space: nowrap;
  overflow: hidden;
}

.single-select-domain {
  position: absolute;
  width: 100%;
  height: 0px;
  background-color: @g-sixth-color;
  list-style: none;
  margin: 0px;
  padding: 0px;
  box-shadow: 0 0 7px 1px @g-fourth-color;
  z-index: 900;
  overflow: hidden;
}

.single-select-item {
  height: @g-unit-height;
  text-align: center;
  line-height: @g-unit-height;
  white-space: nowrap;
  overflow: hidden;
}
</style>
