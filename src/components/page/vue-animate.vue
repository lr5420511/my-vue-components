<template>
    <lay-series :count="layout.count">
        <template slot="0">
            <div class="test-block"
                 v-if="show"
                 v-animate:style.duration:500.delay:100.begin:onOpacityBegin.complete:onOpacityComplete="{ opacity: opacity }"
                 v-animate:style.duration:500.delay:100.complete:onLeftComplete="{ translateX: left }"
                 @click="onClick"
            ></div>
        </template>
    </lay-series>
</template>

<script>
import LayoutSeries from "../layout/layout-series.vue";

export default {
  components: {
    "lay-series": LayoutSeries
  },
  data: () => ({
    layout: {
      count: 1
    },
    opacity: 1,
    left: -300,
    show: true
  }),
  methods: {
    onOpacityBegin: function() {
      const el = arguments[2];
      this.opacity &&
        Object.assign(el.style, {
          opacity: 0,
          transform: "translateX(-300px)"
        });
    },
    onOpacityComplete: function() {
      (this.opacity || (this.show = false)) && (this.left = 0);
    },
    onLeftComplete: function() {
      this.left > 0 && (this.opacity = 0);
    },
    onClick: function() {
      this.left += 300;
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.test-block {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #0000ff;
  margin: 50px auto;
}
</style>
