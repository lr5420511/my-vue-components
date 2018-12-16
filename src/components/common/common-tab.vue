<template>
    <div class="common-tab"
         :style="{ width: `${ width }px` }">
        <sin-group ref="group"
                   :enable-color="enableColor"
                   :disable-color="disableColor"
                   :duration="duration"
                   :block-width="blockWidth"
                   :value="value"
                   :vertical="vertical"
                   :items="items"
                   @input="request"
        ></sin-group>
        <div class="common-tab-content"
             v-for="(item, index) in items"
             :key="item.id"
             v-if="keep || index == value"
             v-show="(keep || true) && index == value"
             :style="{ width: `${ contentWidth }px` }">
            <slot :name="item.id"></slot>
        </div>
    </div>
</template>

<script>
import { enableCol, disableCol } from '../component.config';
import SingleGroup from '../single/single-group.vue';

const re = /^#[\da-f]{6}$/i;

export default {
    components: {
        'sin-group': SingleGroup
    },
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
            default: 1000,
            validator: val => val > 0
        },
        keep: {
            type: Boolean,
            default: true
        },
        vertical: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        },
        value: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        },
        items: {
            type: Array,
            default: () => [
                { id: 1, text: 'Tab default title1' },
                { id: 2, text: 'Tab default title2' },
                { id: 3, text: 'Tab default title3' }
            ],
            validator: val => val.length > 1
        }
    },
    data: () => ({
        ctnPadding: 0,
        groupWidth: 0
    }),
    methods: {
        request: function(index, cur) {
            this.$emit('input', index, cur, this);
        }
    },
    computed: {
        contentWidth: cur => 
            cur.width - cur.ctnPadding - (
                cur.vertical ? cur.groupWidth : 0
            ),
        
        blockWidth: cur =>
            [...cur.items].sort((fir, sec) => 
                fir.text.length > sec.text.length ? -1 : 1
            )[0].text.length * 17
    },
    mounted: function() {
        const active = this.$el.getElementsByClassName('common-tab-content')[0];
        this.ctnPadding = [
            'padding-left', 'padding-right'
        ].reduce((res, prop) => 
            res + parseFloat(getComputedStyle(active)[prop]), 0
        );
        this.groupWidth = parseFloat(
            getComputedStyle(this.$refs.group.$el).width
        );
    },
    watch: {
        items: function() {
            this.vertical && this.$nextTick(() => 
                (this.groupWidth = parseFloat(
                    getComputedStyle(this.$refs.group.$el).width
                ))
            );
        },
        vertical: function(val) {
            val && this.$nextTick(() => 
                (this.groupWidth = parseFloat(
                    getComputedStyle(this.$refs.group.$el).width
                ))
            );
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.common-tab {
    overflow: hidden;
}

.common-tab-content {
    float: left;
    padding: 5px;
}
</style>
