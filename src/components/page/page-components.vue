<template>
    <lay-series :count="layout.blockCount">
        <template slot="0">
            <div class="page-components-content">
                这些Vue组件是本人辛苦码出来的，如需使用到别处，请标明出处。仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components">
                    Alex liao's VUE components.
                </a>
            </div>
            <div class="page-components-content">
                和我一起特训：
                <a href="https://www.codewars.com/users/lr5420511">
                    Alex liao's CODEWARS home.
                </a>
            </div>
            <div class="page-components-content">
                联系我：liaorui5420511@gmail.com
            </div>
        </template>
        <template slot="1">
            <div class="page-components-head">独立组件-Carousel</div>
            <div class="page-components-content">
                <sin-carousel v-model="carousel.value"
                              :items="carousel.items"
                              :vertical="carousel.vertical"
                ></sin-carousel>
            </div>
        </template>
        <template slot="2">
            <div class="page-components-head">独立组件-Button</div>
            <div class="page-components-content">
                <sin-button class="page-components-component"
                ></sin-button>
            </div> 
        </template>
        <template slot="3">
            <div class="page-components-head">独立组件-Group</div>
            <div class="page-components-content">
                <sin-group class="page-components-component"
                           :duration="group.duration"
                           :items="group.items"
                           :vertical="group.vertical"
                           v-model="group.value"
                           @input="groupToggle"
                ></sin-group>
            </div>
        </template>
        <template slot="4">
            <div class="page-components-head">独立组件-Text</div>
            <div class="page-components-content">
                <sin-text class="page-components-component"
                          v-model="text.value"
                          :is-password="text.isPassword"
                          @emitEnterDown="text.isPassword=!text.isPassword"
                ></sin-text>
            </div>
        </template>
        <template slot="5">
            <div class="page-components-head">独立组件-Check</div>
            <div class="page-components-content">
                <sin-check class="page-components-component"
                           v-model="check.checked"
                ></sin-check>
            </div>
        </template>
        <template slot="6">
            <div class="page-components-head">独立组件-Select</div>
            <div class="page-components-content">
                <sin-select class="page-components-component"
                            v-model="selects.default.value"
                            :items="selects.default.items"
                ></sin-select>

                <div class="page-components-comment">
                    以下演示常用的select级联选择（Vue多组件交互），类似场景如果使用ajax请求服务器端数据后注意缓存，进而减少ajax request次数。<br/><br/>
                    你选择了国家：<b>{{ selects.selectCountry }}</b>
                </div>
                
                <sin-select class="page-components-component page-components-select"
                            :title="selects.domain.title"
                            v-model="selects.domain.value"
                            :items="selects.domain.items"
                            @input="domainSelected"
                ></sin-select>

                <sin-select class="page-components-component page-components-select"
                            :title="selects.country.title"
                            v-model="selects.country.value"
                            :items="selects.country.items"
                            @input="countrySelected"
                ></sin-select>
            </div>
        </template>
    </lay-series>
</template>

<script>
import LayoutSeries from '../layout/layout-series.vue';
import SingleButton from '../single/single-button.vue';
import SingleCheck from '../single/single-check.vue';
import SingleText from '../single/single-text.vue';
import SingleGroup from '../single/single-group.vue';
import SingleCarousel from '../single/single-carousel.vue';
import SingleSelect from '../single/single-select.vue';

export default {
    components: {
        'lay-series': LayoutSeries,
        'sin-button': SingleButton,
        'sin-check': SingleCheck,
        'sin-text': SingleText,
        'sin-group': SingleGroup,
        'sin-carousel': SingleCarousel,
        'sin-select': SingleSelect
    },
    data: () => ({
        layout: {
            blockCount: 7
        },
        check: {
            checked: true
        },
        text: {
            value: '',
            isPassword: false
        },
        group: {
            vertical: true,
            value: 1,
            duration: 4000,
            items: [
                { id: 1, text: 'single-group item1' },
                { id: 2, text: 'single-group item2' },
                { id: 3, text: 'single-group item3' },
                { id: 4, text: 'single-group item4' },
                { id: 5, text: 'single-group item5' },
                { id: 6, text: 'single-group item6' },
                { id: 7, text: 'single-group item7' }
            ]
        },
        carousel: {
            items: [
                { id: 1, src: '/static/1.jpg' },
                { id: 2, src: '/static/2.jpg' },
                { id: 3, src: '/static/3.jpg' },
                { id: 4, src: '/static/4.jpg' },
                { id: 5, src: '/static/5.jpg' },
                { id: 6, src: '/static/6.jpg' }
            ],
            value: 0,
            vertical: true
        },
        selects: {
            selectCountry: null,
            default: { value: -1 },
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
                },
                items: []
            }
        }
    }),
    methods: {
        groupToggle: function() {
            const dur = this.group.duration;
            if(dur <= 0) return (this.group.duration = 0);
            this.group.duration -= 20;
        },
        domainSelected: function(index, cur) {
            const count = this.selects.country;
            count.value = 0;
            this.selects.country.items = (cur && count.template[cur.id]) || [];
        },
        countrySelected: function(index, cur) {
            this.selects.selectCountry = cur && cur.text;
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.page-components-head {
    text-align: center;
    padding: 5px 0px;
    border-bottom: solid 1px @g-first-color;
}

.page-components-content {
    padding: 10px;
    overflow: hidden;
}

.page-components-component {
    margin: 50px;
}

.page-components-select {
    margin-bottom: 220px;
}

.page-components-comment {
    clear:left;
    margin-left:50px;
}
</style>
