<template>
    <div class="service-text">
        <div class="service-text-block">
            single-text组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-text.vue">
            VUE-COMPONENTS-TEXT
            </a><br/><br/>
            <sin-text v-model="defaultText.value"></sin-text>
        </div>
        <div class="service-text-block">
        -----以下演示常用的Text组件在各个场景中的应用-----
        </div>
        <div class="service-text-block">
            你可能需要一个宽度和标题可定制，并且可以响应键盘enter键的文本框。提交的输入值是<b>{{ example1.currentValue }}</b><br/><br/>
            <sin-text :width="example1.width"
                      :display-title="example1.title"
                      v-model="example1.value"
                      @emitEnterDown="example1EnterDown"
            ></sin-text>
        </div>
        <div class="service-text-block">
            你可能需要一个颜色可定制的密码输入文本框。<br/><br/>
            <sin-text :disable-color="example2.disableColor"
                      :enable-color="example2.enableColor"
                      :is-password="example2.isPassword"
                      v-model="example2.value"
                      :display-title="example2.title"
            ></sin-text>
        </div>
        <div class="service-text-block">
            你可能需要一个仅用于展示文本的只读文本框。注意绑定时只能使用v-bind单向绑定value，不要用v-model双向绑定，否则达不到只读效果。<br/><br/>
            <sin-text :read-only="example3.readOnly"
                      :value="example3.value"
            ></sin-text>
        </div>
        <div class="service-text-block">
            另外Text组件也提供了合法性验证功能。下面我将演示真实场景中常用的一个实例，当输入邮箱格式非法时使文本框变为红色，并设置状态vaild为false。而不是提交信息时再去验证其合法性。<br/><br/>
            <sin-text :display-title="example4.title"
                      :regular="example4.regular"
                      :vaild="example4.vaild"
                      v-model="example4.value"
                      @emitVaildChanged="example4Changed"
            ></sin-text>
        </div>
        <div class="service-text-block">
        当然你可以根据需要任意组合特性，只要你喜欢。
        </div>
    </div>
</template>

<script>
import SingleText from '../single/single-text.vue';

export default {
    components: {
        'sin-text': SingleText 
    },
    data: () => ({
        defaultText: { value: null },
        example1: {
            value: null,
            title: 'This is TEXT example1:',
            width: 500,
            currentValue: null
        },
        example2: {
            value: null,
            title: 'Password:',
            enableColor: '#ff0099',
            disableColor: '#000000',
            isPassword: true
        },
        example3: {
            value: 'This is a readonly text.',
            readOnly: true
        },
        example4: {
            value: null,
            title: 'YOUR EMAIL:',
            vaild: false,
            regular: /^[^@]+@[\da-z]+(\.[\da-z]+)+$/i
        }
    }),
    methods: {
        example1EnterDown: function() {
            this.example1.currentValue = this.example1.value;
        },
        example4Changed: function(val) {
            this.example4.vaild = val;
        }
    }
};
</script>

<style lang="less" scope>
@import url(../../global.less);

.service-text {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-text-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
