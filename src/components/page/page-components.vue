<template>
    <lay-series :count="layout.blockCount">
        <template slot="0">
            <div class="page-components-head">独立组件-Carousel</div>
            <div class="page-components-content">
                <sin-carousel v-model="carousel.value"
                              :items="carousel.items"
                              :vertical="carousel.vertical"
                ></sin-carousel>
            </div>
        </template>
        <template slot="1">
            <div class="page-components-head">独立组件-Button</div>
            <div class="page-components-content">
                <sin-button class="page-components-component"
                ></sin-button>
            </div> 
        </template>
        <template slot="2">
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
        <template slot="3">
            <div class="page-components-head">独立组件-Text</div>
            <div class="page-components-content">
                <sin-text class="page-components-component"
                          v-model="text.value"
                          :is-password="text.isPassword"
                          @emitEnterDown="text.isPassword=!text.isPassword"
                ></sin-text>
            </div>
        </template>
        <template slot="4">
            <div class="page-components-head">独立组件-Check</div>
            <div class="page-components-content">
                <sin-check class="page-components-component"
                           v-model="check.checked"
                ></sin-check>
            </div>
        </template>
        <template slot="5">
            <div class="page-components-head">独立组件-Select</div>
            <div class="page-components-content">
                <sin-select class="page-components-component"
                            v-model="selects.default.value"
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

        <template slot="6">
            <div class="page-components-head">通用组件-Tab</div>
            <div class="page-components-content">
                <com-tab class="page-components-component"
                         v-model="tabs.default.value">
                    <template slot="1">TAB DEFAULT CONTENT 1.</template>
                    <template slot="2">TAB DEFAULT CONTENT 2.</template>
                    <template slot="3">TAB DEFAULT CONTENT 3.</template>
                </com-tab>

                <div class="page-components-comment">
                    子组件包含：single-group<br/><br/>
                    以下演示常用的Tab组件在各个场景中的应用，组件会自适应在切换过程中自身内容的高度变化，还可以配置是否切换时应保留组件状态。<br/><br/>
                    你甚至还可以把它当成一个幻灯片播放器，就像是第二个演示做的那样。<br/>
                </div>

                <com-tab class="page-components-component"
                         :width="tabs.adjust.width"
                         :vertical="tabs.adjust.vertical"
                         v-model="tabs.adjust.value"
                         :items="tabs.adjust.items">
                    <template slot="1">
                        <div style="height:100px;border:solid 1px #eee;text-align:center;line-height:100px;">A tab content. Height: 100px</div>
                    </template>
                    <template slot="2">
                        <div style="height:300px;border:solid 1px #eee;text-align:center;line-height:300px;">B tab content. Height: 300px</div>
                    </template>
                    <template slot="3">
                        <div style="height:500px;border:solid 1px #eee;text-align:center;line-height:500px;">C tab content. Height: 500px</div>
                    </template>
                </com-tab>

                <com-tab class="page-components-component"
                         :width="tabs.auto.width"
                         v-model="tabs.auto.value"
                         :items="tabs.auto.items"
                         :duration="tabs.auto.duration"
                         :keep="tabs.auto.keep">
                    <template slot="1">
                        <img style="width: 100%; height: 500px;" src="/static/1.jpg" />
                    </template>
                    <template slot="2">
                        <img style="width: 100%; height: 500px;" src="/static/2.jpg" />
                    </template>
                    <template slot="3">
                        <img style="width: 100%; height: 500px;" src="/static/3.jpg" />
                    </template>
                </com-tab>
            </div>
        </template>

        <template slot="7">
            <div class="page-components-head">独立组件-Dialog</div>
            <div class="page-components-content">
                <sin-button class="page-components-component"
                            :text="dialogs.default.buttonText"
                            @emitClick="openDialogClick"
                ></sin-button>
                <sin-dialog v-if="dialogs.default.display"
                            @emitClose="dialogs.default.display=false"
                ></sin-dialog>
                <sin-dialog v-if="dialogs.notice.display"
                            :closable="dialogs.notice.closable" 
                            :movable="dialogs.notice.movable"
                            :duration="dialogs.notice.duration" 
                            :title="dialogs.notice.title"
                            :type="dialogs.notice.type"
                            :buttons="dialogs.notice.buttons"
                            @emitClose="dialogs.notice.display=false"
                            @emitClick="noticeClick">
                    <div class="page-components-content" style="width:600px">
                    这些Vue组件是本人辛苦码出来的，如需使用到别处，请标明出处。
                    </div>
                    <div class="page-components-content">
                    全组件代码仓库地址：
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
                </sin-dialog>
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
import CommonTab from '../common/common-tab.vue';
import SingleDialog from '../single/single-dialog.vue';

export default {
    components: {
        'lay-series': LayoutSeries,
        'sin-button': SingleButton,
        'sin-check': SingleCheck,
        'sin-text': SingleText,
        'sin-group': SingleGroup,
        'sin-carousel': SingleCarousel,
        'sin-select': SingleSelect,
        'com-tab': CommonTab,
        'sin-dialog': SingleDialog
    },
    data: () => ({
        layout: {
            blockCount: 8
        },
        check: {
            checked: true
        },
        text: {
            value: null,
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
        },
        tabs: {
            default: { value: 0 },
            adjust: {
                width: 1000,
                vertical: true,
                value: 0,
                items: [
                    { id: 1, text: ' A ' },
                    { id: 2, text: ' B '},
                    { id: 3, text: ' C '}
                ]
            },
            auto: {
                width: 1000,
                value: 0,
                items: [
                    { id: 1, text: ' 第 一 张 ' },
                    { id: 2, text: ' 第 二 张 ' },
                    { id: 3, text: ' 第 三 张 ' }
                ],
                keep: false,
                duration: 3000
            }
        },
        dialogs: {
            default: {
                buttonText: 'OPEN DEFAULT DIALOG',
                display: false
            },
            notice: {
                display: false,
                closable: false,
                movable: false,
                type: 'slide',
                duration: 0,
                title: '作者有话说',
                buttons: [
                    { id: 1, text: 'I KNOW!' }
                ]
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
        },
        openDialogClick: function() {
            this.dialogs.default.display = true;
        },
        noticeClick: function(btn, index, cur) {
            cur.close(false);
        }
    },
    mounted: function() {
        this.dialogs.notice.display = true;
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.page-components-head {
    text-align: center;
    padding: 5px 0px;
    border-bottom: solid 1px @g-fifth-color;
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
