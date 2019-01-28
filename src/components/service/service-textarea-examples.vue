<template>
    <div class="service-textarea">
        <div class="service-textarea-block">
            single-textarea组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-textarea.vue">
            VUE-COMPONENTS-TEXTAREA
            </a><br/><br/>
            <sin-textarea v-model="defaultTextarea.value"></sin-textarea>
        </div>
        <div class="service-textarea-block">
        -----该组件是Text组件的多行版本，去除了无用的密码功能，添加了对高度和宽度的配置，以下演示常用的Textarea组件在各个场景中的应用-----
        </div>
        <div class="service-textarea-block">
            你可能需要一个宽度、高度和标题可定制，并且可以响应键盘enter键的多行文本框。提交的输入值是<b>{{ example1.currentValue }}</b><br/><br/>
            <sin-textarea :width="example1.width"
                          :height="example1.height"
                          :display-title="example1.title"
                          v-model="example1.value"
                          @emitEnterDown="example1EnterDown"
            ></sin-textarea>
        </div>
        <div class="service-textarea-block">
            你可能需要一个仅用于展示文本的只读文本框，并且他的颜色可定制。<br/><br/>
            <sin-textarea :disable-color="example2.disableColor"
                          :enable-color="example2.enableColor"
                          :read-only="example2.readOnly"
                          :value="example2.value"
            ></sin-textarea>
        </div>
        <div class="service-textarea-block">
            同样的Textarea组件也有验证系统，下面我将演示一个IPv4地址验证功能。当地址格式不正确时改变为红色，并且赋值vaild状态为false。<br/><br/>
            <sin-textarea :display-title="example3.title"
                          :regular="example3.regular"
                          :vaild="example3.vaild"
                          v-model="example3.value"
                          @emitVaildChanged="example3Changed"
            ></sin-textarea>
        </div>
    </div>
</template>

<script>
import SingleTextarea from '../single/single-textarea.vue';

export default {
    components: {
        'sin-textarea': SingleTextarea
    },
    data: () => ({
        defaultTextarea: { value: null },
        example1: {
            width: 700,
            height: 150,
            title: 'This is textarea example1 title:',
            value: null,
            currentValue: null
        },
        example2: {
            enableColor: '#ff0099',
            disableColor: '#e0e0e0',
            readOnly: true,
            value: 'This is a readonly text.'
        },
        example3: {
            title: 'Input IPv4:',
            value: null,
            vaild: false,
            regular: /^(\d|[1-9]\d|1\d{2}|2([0-4]\d|5[0-5]))(\.(\d|[1-9]\d|1\d{2}|2([0-4]\d|5[0-5]))){3}$/
        }
    }),
    methods: {
        example1EnterDown: function() {
            this.example1.currentValue = this.example1.value;
        },
        example3Changed: function(val) {
            this.example3.vaild = val;
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-textarea {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-textarea-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}
</style>
