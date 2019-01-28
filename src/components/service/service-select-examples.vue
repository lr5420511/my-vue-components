<template>
    <div class="service-select">
        <div class="service-select-block">
            single-select组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-select.vue">
            VUE-COMPONENTS-SELECT
            </a><br/><br/>
            <sin-select v-model="defaultSelect.value"></sin-select>
        </div>
        <div class="service-select-block">
        -----以下演示常用的Select组件在各个场景中的应用-----
        </div>
        <div class="service-select-block">
            你可能需要一个宽度、标题及选择项均可定制，并且可以响应选择项（可不改变）的单选框。当前选择的项的索引是：<b>{{ example1.currentValue }}</b><br/><br/>
            <sin-select :width="example1.width"
                        :title="example1.title"
                        :items="example1.items"
                        v-model="example1.value"
                        @input="example1Selected"
            ></sin-select>
        </div>
        <div class="service-select-block">
            你可能需要一个颜色可定制，并且选择区的最大可容纳项（可通过鼠标滚轮上下翻页）的数量可配置的单选框。<br/><br/>
            <sin-select :disable-color="example2.disableColor"
                        :enable-color="example2.enableColor"
                        :maximum="example2.maximum"
                        v-model="example2.value"
                        :items="example2.items"
            ></sin-select>
        </div>
        <div class="service-select-block">
            下面我将演示在真实场景中常用的select级联选择，如果使用ajax请求服务器端数据后注意缓存，进而减少ajax request次数。<br/><br/>
            你选择了国家：<b>{{ example3.selectedCountry }}</b><br/>
            <sin-select :title="example3.domain.title"
                        v-model="example3.domain.value"
                        :items="example3.domain.items"
                        @input="example3DomainSelected"
            ></sin-select>
            <sin-select :title="example3.country.title"
                        v-model="example3.country.value"
                        :items="example3.country.items"
                        @input="example3CountrySelected"
                        v-right
            ></sin-select>
        </div>
        <div class="service-select-block">
        你还喜欢这样的交互体验吗？O(∩_∩)O~<br/><br/><br/><br/>
        </div>
    </div>
</template>

<script>
import SingleSelect from '../single/single-select.vue';

export default {
    components: {
        'sin-select': SingleSelect
    },
    data: () => ({
        defaultSelect: { value: null },
        example1: {
            value: 0,
            items: [
                { id: 1, text: 'select example1 item1.' },
                { id: 2, text: 'select example1 item2.' },
                { id: 3, text: 'select example1 item3.' },
                { id: 4, text: 'select example1 item4.' },
                { id: 5, text: 'select example1 item5.' }
            ],
            title: 'This is select example1 title:',
            width: 400,
            currentValue: null
        },
        example2: {
            value: 0,
            items: [
                { id: 1, text: 'select example2 item111.' },
                { id: 2, text: 'select example2 item222.' },
                { id: 3, text: 'select example2 item333.' },
                { id: 4, text: 'select example2 item444.' },
                { id: 5, text: 'select example2 item555.' }
            ],
            maximum: 3,
            enableColor: '#ff0099',
            disableColor: '#000000'
        },
        example3: {
            domain: {
                title: '请选择大洲:',
                value: 1,
                items: [
                    { id: 1, text: '欧 洲' },
                    { id: 2, text: '亚 洲' },
                    { id: 3, text: '非 洲' },
                    { id: 4, text: '北 美 洲' },
                    { id: 5, text: '南 美 洲' },
                    { id: 6, text: '大 洋 洲' }
                ]
            },
            country: {
                title: '请选择国家:',
                value: 0,
                template: {
                    '1': [
                        { id: 'o1', text: '英 国' },
                        { id: 'o2', text: '法 国' },
                        { id: 'o3', text: '德 国' },
                        { id: 'o4', text: '西 班 牙' },
                        { id: 'o5', text: '葡 萄 牙' },
                        { id: 'o6', text: '意 大 利' },
                        { id: 'o7', text: '爱 尔 兰' },
                        { id: 'o8', text: '瑞 士' },
                        { id: 'o9', text: '瑞 典' },
                        { id: 'o10', text: '俄 罗 斯' }
                    ],
                    '2': [
                        { id: 'y1', text: '中 国' },
                        { id: 'y2', text: '日 本' },
                        { id: 'y3', text: '韩 国' },
                        { id: 'y4', text: '朝 鲜' },
                        { id: 'y5', text: '泰 国' },
                        { id: 'y6', text: '蒙 古 国' },
                        { id: 'y7', text: '印 度 尼 西 亚' },
                        { id: 'y8', text: '印 度' }
                    ],
                    '3': [
                        { id: 'f1', text: '埃 及' },
                        { id: 'f2', text: '南 非' },
                        { id: 'f3', text: '埃 塞 俄 比 亚' },
                        { id: 'f4', text: '肯 尼 亚' },
                        { id: 'f5', text: '民 主 刚 果' },
                        { id: 'f6', text: '尼 日 利 亚' }
                    ],
                    '4': [
                        { id: 'b1', text: '美 国' },
                        { id: 'b2', text: '加 拿 大' },
                        { id: 'b3', text: '墨 西 哥' }
                    ],
                    '5': [
                        { id: 'n1', text: '巴 西' },
                        { id: 'n2', text: '阿 根 廷' },
                        { id: 'n3', text: '巴 拉 圭' },
                        { id: 'n4', text: '乌 拉 圭' },
                        { id: 'n5', text: '智 利' },
                        { id: 'n6', text: '特 立 尼 达 和 多 巴 哥' },
                        { id: 'n7', text: '古 巴' },
                        { id: 'n8', text: '玻 利 维 亚' },
                        { id: 'n9', text: '哥 伦 比 亚' },
                        { id: 'n10', text: '哥 斯 达 尼 加' }
                    ],
                    '6': [
                        { id: 'd1', text: '澳 大 利 亚' },
                        { id: 'd2', text: '新 西 兰' }
                    ]
                }
            },
            selectedCountry: null
        }
    }),
    methods: {
        example1Selected: function() {
            this.example1.currentValue = arguments[0];
        },
        example3DomainSelected: function(index, cur) {
            const count = this.example3.country;
            count.value = 0;
            count.items = (cur && count.template[cur.id]) || [];
        },
        example3CountrySelected: function(index, cur) {
            this.example3.selectedCountry = cur && cur.text;
        },
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-select {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-select-block {
    margin: 50px 0px;
    padding-left: 60px;
    float: left;
    clear: both;
}
</style>
