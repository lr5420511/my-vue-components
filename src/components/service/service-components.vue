<template>
    <com-tab :width="width"
             :keep="keep"
             :vertical="vertical"
             v-model="tabIndex"
             :items="items">
        <template slot="common-tab">
            <div class="service-components-block">
                common-tab组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/common/common-tab.vue">
                VUE-COMPONENTS-TAB
                </a><br/><br/>
                <com-tab v-model="tabs.default.value">
                    <template slot="1">TAB DEFAULT CONTENT 1.</template>
                    <template slot="2">TAB DEFAULT CONTENT 2.</template>
                    <template slot="3">TAB DEFAULT CONTENT 3.</template>
                </com-tab>
            </div>
            <div class="service-components-block">
                子组件包含：single-group<br/><br/>
                以下演示常用的Tab组件在各个场景中的应用，组件会自适应在切换过程中自身内容的高度变化，还可以配置是否切换时应保留组件状态。<br/><br/>
                你甚至还可以把它当成一个幻灯片播放器，就像是第二个演示做的那样。<br/><br/>
                <com-tab :width="tabs.adjust.width"
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
                <br/><br/>
                <com-tab :width="tabs.auto.width"
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
        <template slot="single-button">
            <div class="service-components-block">
                single-button组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-button.vue">
                VUE-COMPONENTS-BUTTON
                </a><br/><br/>
                <sin-button></sin-button>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Button组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                你可能需要一个警告按钮：<b>{{ buttons.warn.testText }}</b><br/><br/>
                <sin-button :enter-color="buttons.warn.enterColor"
                            :init-color="buttons.warn.initColor"
                            :text="buttons.warn.text"
                            @emitClick="buttons.warn.testText='你点击了WARN按钮'"
                ></sin-button>
            </div>
            <div class="service-components-block">
                你可能需要一个长文本按钮，并且可以自适应：<br/><br/>
                <sin-button :text="buttons.long.text"
                ></sin-button>
            </div>
        </template>
        <template slot="single-carousel">
            <div class="service-components-block">
                single-carousel组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-carousel.vue">
                VUE-COMPONENTS-CAROUSEL
                </a><br/><br/>
                <sin-carousel v-model="carousels.default.value"
                ></sin-carousel>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Carousel组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                你可能需要一个尺寸以及内容项可定制，并且逆向（相对于默认移动方向）快速移动的轮播图<br/><br/>
                <sin-carousel :width="carousels.example1.width"
                              :height="carousels.example1.height"
                              :items="carousels.example1.items"
                              :vector="carousels.example1.vector"
                              :duration="carousels.example1.duration"
                              v-model="carousels.example1.value"
                ></sin-carousel>
            </div>
            <div class="service-components-block">
                你可能需要一个预览项颜色风格可定制，并且纵向移动的轮播图<br/><br/>
                <sin-carousel :disable-color="carousels.example2.disableColor"
                              :enable-color="carousels.example2.enableColor"
                              :vertical="carousels.example2.vertical"
                              v-model="carousels.example2.value"
                              :items="carousels.example2.items"
                ></sin-carousel>
            </div>
            <div class="service-components-block">
                你可能需要一个没有预览项，并且可以响应图片点击的轮播图。你点击了当前项目的id: <b>{{ carousels.example3.currentID }}</b><br/><br/>
                <sin-carousel :previewable="carousels.example3.previewable"
                              v-model="carousels.example3.value"
                              :items="carousels.example3.items"
                              @emitClick="carouselExample3Click"
                ></sin-carousel>
            </div>
            <div class="service-components-block">
                当然你也可以根据自己需求把以上展示的特性任意组合，你喜欢就好O(∩_∩)O~
            </div>
        </template>
        <template slot="single-check">
            <div class="service-components-block">
                single-check组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-check.vue">
                VUE-COMPONENTS-CHECK
                </a><br/><br/>
                <sin-check v-model="checks.default.value"></sin-check>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Check组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                你可能需要一个文本和颜色可定制的逻辑选择框<br/><br/>
                <sin-check :disable-color="checks.example1.disableColor"
                           :enable-color="checks.example1.enableColor"
                           :text="checks.example1.text"
                           v-model="checks.example1.value"
                ></sin-check>
            </div>
            <div class="service-components-block">
                你可能需要一个初始值为真并且可以响应逻辑值切换的逻辑选择框。当前值为：<b>{{ checks.example2.currentValue }}</b><br/><br/>
                <sin-check v-model="checks.example2.value"
                           @input="checkExample2Changed"
                ></sin-check>
            </div>
        </template>
        <template slot="single-dialog">
            <div class="service-components-block">
                single-dialog组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-dialog.vue">
                VUE-COMPONENTS-DIALOG
                </a><br/><br/>
                <sin-button :text="dialogs.default.text"
                            @emitClick="dialogs.default.display=true"
                ></sin-button>
                <sin-dialog v-if="dialogs.default.display"
                            @emitClose="dialogs.default.display=false"
                ></sin-dialog>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Dialog组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                你可能需要一个不能移动，没有关闭按钮和掩盖层，并且没有操作按钮的纯消息弹窗。可以配置它定时关闭<br/><br/>
                <sin-button :text="dialogs.example1.text"
                            @emitClick="dialogs.example1.display=true"
                ></sin-button>
                <sin-dialog v-if="dialogs.example1.display"
                            :movable="dialogs.example1.movable"
                            :closable="dialogs.example1.closable"
                            :buttons="dialogs.example1.buttons"
                            :duration="dialogs.example1.duration"
                            :title="dialogs.example1.title"
                            :type="dialogs.example1.type"
                            :has-mask="dialogs.example1.hasMask"
                            @emitClose="dialogs.example1.display=false">
                    <div style="height:36px;line-height:36px;">这是一个消息弹窗！</div>
                </sin-dialog>
            </div>
            <div class="service-components-block">
                你可能需要一个可以自由移动，有关闭按钮和掩盖层，并且操作按钮可定制和响应的内容弹窗。你可能还需要它有一个炫酷的开始。你点击了<b>{{ dialogs.example2.times }}</b>次弹窗按钮<br/><br/>
                <sin-button :text="dialogs.example2.text"
                            @emitClick="dialogs.example2.display=true"
                ></sin-button>
                <sin-dialog v-if="dialogs.example2.display"
                            :buttons="dialogs.example2.buttons"
                            :title="dialogs.example2.title"
                            :type="dialogs.example2.type"
                            @emitClose="dialogs.example2.display=false"
                            @emitClick="dialogExample2Click">
                    <div style="height:50px;line-height:50px;">这是一个内容弹窗，你可以往这里填充内容。</div>
                </sin-dialog>
            </div>
            <div class="service-components-block">
                你可能需要一个颜色风格可以定制，并且可以定时关闭的比较保守的内容弹窗。<br/><br/>
                <sin-button :text="dialogs.example3.text"
                            @emitClick="dialogs.example3.display=true"
                ></sin-button>
                <sin-dialog v-if="dialogs.example3.display"
                            :color="dialogs.example3.color"
                            :disable-color="dialogs.example3.disableColor"
                            :enable-color="dialogs.example3.enableColor"
                            :duration="dialogs.example3.duration"
                            :title="dialogs.example3.title"
                            @emitClose="dialogs.example3.display=false">
                    <div style="height:50px;line-height:50px;">这是一个内容弹窗，你可以往这里填充内容。</div>
                </sin-dialog>
            </div>
            <div class="service-components-block">
                你可能需要一个能够自动适配内容尺寸的弹窗，哪怕是运行时适配。下面我将演示这样的弹窗实例<br/><br/>
                <sin-button :text="dialogs.example4.text"
                            @emitClick="dialogs.example4.display=true"
                ></sin-button>
                <sin-dialog v-if="dialogs.example4.display"
                            :buttons="dialogs.example4.buttons"
                            :closable="dialogs.example4.closable"
                            :title="dialogs.example4.title"
                            :type="dialogs.example4.type"
                            @emitClose="dialogs.example4.display=false"
                            @emitClick="dialogExample4Click">
                    <div style="width:500px">{{ dialogs.example4.content }}</div>
                </sin-dialog>
            </div>
            <div class="service-components-block">
                下面我将演示一个真实场景中的实例，一个用户登录页面。需要用到single-text组件<br/><br/>
                <sin-button :text="dialogs.example5.text"
                            @emitClick="dialogs.example5.display=true"
                ></sin-button>
                <sin-dialog v-if="dialogs.example5.display"
                            :buttons="dialogs.example5.buttons"
                            :movable="dialogs.example5.movable"
                            :title="dialogs.example5.title"
                            :type="dialogs.example5.type"
                            @emitClose="dialogs.example5.display=false"
                            @emitClick="dialogExample5Click">
                    <sin-text class="service-components-input"
                              :width="dialogs.example5.inputWidth"
                              :display-title="dialogs.example5.usernameTitle"
                              v-model="dialogs.example5.usernameValue"
                    ></sin-text>
                    <sin-text class="service-components-input"
                              :width="dialogs.example5.inputWidth"
                              :display-title="dialogs.example5.passwordTitle"
                              :is-password="dialogs.example5.isPassword"
                              v-model="dialogs.example5.passwordValue"
                    ></sin-text>
                </sin-dialog>
            </div>
            <div class="service-components-block">
                弹窗组件应该把关注点放在<b>内容的适配性、操作的可交互性以及动效</b>上面。
            </div>
        </template>
        <template slot="single-group">
            <div class="service-components-block">
                single-group组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-group.vue">
                VUE-COMPONENTS-GROUP
                </a><br/><br/>
                <sin-group v-model="groups.default.value"></sin-group>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Group组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                你可能会需要一个纵向的，内容项和宽度均可自由定制的动画分组。<br/><br/>
                <sin-group :block-width="groups.example1.blockWidth"
                           :duration="groups.example1.duration"
                           :items="groups.example1.items"
                           :vertical="groups.example1.vertical"
                           v-model="groups.example1.value"
                ></sin-group>
            </div>
            <div class="service-components-block">
                你可能会需要一个不同颜色风格，可以响应分组项切换的静态分组。当前选中项的索引是：<b>{{ groups.example2.currentValue }}</b><br/><br/>
                <sin-group :disable-color="groups.example2.disableColor"
                           :enable-color="groups.example2.enableColor"
                           v-model="groups.example2.value"
                           @input="groupExample2Changed"
                ></sin-group>
            </div>
        </template>
        <template slot="single-icon">
            <div class="service-components-block">
                single-icon组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-icon.vue">
                VUE-COMPONENTS-ICON
                </a><br/><br/>
                <sin-icon></sin-icon>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Icon组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                根据需求和场景的不同，我们可能需要各种不同的图标按钮。<br/><br/>
                <sin-icon class="service-components-input" 
                          icon="left" 
                          tip="向左"
                ></sin-icon>
                <sin-icon class="service-components-input"
                          icon="right" 
                          tip="向右"
                ></sin-icon>
                <sin-icon class="service-components-input" 
                          icon="top" 
                          tip="向上"
                ></sin-icon>
                <sin-icon class="service-components-input" 
                          icon="bottom" 
                          tip="向下"
                ></sin-icon>
                <sin-icon class="service-components-input"
                          icon="download" 
                          tip="下载"
                ></sin-icon>
                <sin-icon class="service-components-input"
                          icon="upload" 
                          tip="上传"
                ></sin-icon>
                <sin-icon class="service-components-input"
                          icon="listen" 
                          tip="聆听"
                ></sin-icon>
                <sin-icon class="service-components-input"
                          icon="close" 
                          tip="关闭"
                ></sin-icon>
                <sin-icon class="service-components-input"
                          icon="clip" 
                          tip="固定"
                ></sin-icon>
            </div>
        </template>
        <template slot="single-select">
            <div class="service-components-select">
                single-select组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-select.vue">
                VUE-COMPONENTS-SELECT
                </a><br/><br/>
                <sin-select v-model="selects.default.value"></sin-select>
            </div>
            <div class="service-components-select">
                -----以下演示常用的Select组件在各个场景中的应用-----
            </div>
            <div class="service-components-select">
                你可能需要一个宽度、标题及选择项均可定制，并且可以响应选择项（可不改变）的单选框。当前选择的项的索引是：<b>{{ selects.example1.currentValue }}</b><br/><br/>
                <sin-select :width="selects.example1.width"
                            :title="selects.example1.title"
                            :items="selects.example1.items"
                            v-model="selects.example1.value"
                            @input="selectExample1Selected"
                ></sin-select>
            </div>
            <div class="service-components-select">
                你可能需要一个颜色可定制，并且选择区的最大可容纳项（可通过鼠标滚轮上下翻页）的数量可配置的单选框。<br/><br/>
                <sin-select :disable-color="selects.example2.disableColor"
                            :enable-color="selects.example2.enableColor"
                            :maximum="selects.example2.maximum"
                            v-model="selects.example2.value"
                            :items="selects.example2.items"
                ></sin-select>
            </div>
            <div class="service-components-select">
                下面我将演示在真实场景中常用的select级联选择，如果使用ajax请求服务器端数据后注意缓存，进而减少ajax request次数。<br/><br/>
                你选择了国家：<b>{{ selects.example3.selectedCountry }}</b><br/>
                <sin-select :title="selects.example3.domain.title"
                            v-model="selects.example3.domain.value"
                            :items="selects.example3.domain.items"
                            @input="selectExample3DomainSelected"
                ></sin-select>
                <sin-select :title="selects.example3.country.title"
                            v-model="selects.example3.country.value"
                            :items="selects.example3.country.items"
                            @input="selectExample3CountrySelected"
                            v-right
                ></sin-select>
            </div>
            <div class="service-components-select">
                你还喜欢这样的交互体验吗？O(∩_∩)O~<br/><br/><br/><br/>
            </div>
        </template>
        <template slot="single-text">
            <div class="service-components-block">
                single-text组件原型，源代码仓库地址：
                <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-text.vue">
                VUE-COMPONENTS-TEXT
                </a><br/><br/>
                <sin-text v-model="texts.default.value"></sin-text>
            </div>
            <div class="service-components-block">
                -----以下演示常用的Text组件在各个场景中的应用-----
            </div>
            <div class="service-components-block">
                你可能需要一个宽度和标题可定制，并且可以响应键盘enter键的文本框。提交的输入值是<b>{{ texts.example1.currentValue }}</b><br/><br/>
                <sin-text :width="texts.example1.width"
                          :display-title="texts.example1.title"
                          v-model="texts.example1.value"
                          @emitEnterDown="textExample1EnterDown"
                ></sin-text>
            </div>
            <div class="service-components-block">
                你可能需要一个颜色可定制的密码输入文本框。<br/><br/>
                <sin-text :disable-color="texts.example2.disableColor"
                          :enable-color="texts.example2.enableColor"
                          :is-password="texts.example2.isPassword"
                          v-model="texts.example2.value"
                          :display-title="texts.example2.title"
                ></sin-text>
            </div>
            <div class="service-components-block">
                你可能需要一个仅用于展示文本的只读文本框。注意绑定时只能使用v-bind单向绑定value，不要用v-model双向绑定，否则达不到只读效果。<br/><br/>
                <sin-text :read-only="texts.example3.readOnly"
                          :value="texts.example3.value"
                ></sin-text>
            </div>
            <div class="service-components-block">
                下面我将演示真实场景中常用的一个实例，当输入邮箱格式非法时使文本框变为红色，并设置状态valid为false。而不是提交信息时再去验证其合法性。<br/><br/>
                <sin-text :enable-color="texts.example4.enableColor"
                          :display-title="texts.example4.title"
                          v-model="texts.example4.value"
                          @input="textExample4Changed"
                ></sin-text>
            </div>
            <div class="service-components-block">
                当然你可以根据需要任意组合特性，只要你喜欢。
            </div>
        </template>
    </com-tab>
</template>

<script>
import CommonTab from '../common/common-tab.vue';
import SingleButton from '../single/single-button.vue';
import SingleCarousel from '../single/single-carousel.vue';
import SingleCheck from '../single/single-check.vue';
import SingleDialog from '../single/single-dialog.vue';
import SingleGroup from '../single/single-group.vue';
import SingleIcon from '../single/single-icon.vue';
import SingleSelect from '../single/single-select.vue';
import SingleText from '../single/single-text.vue';

export default {
    components: {
        'com-tab': CommonTab,
        'sin-button': SingleButton,
        'sin-carousel': SingleCarousel,
        'sin-check': SingleCheck,
        'sin-dialog': SingleDialog,
        'sin-group': SingleGroup,
        'sin-icon': SingleIcon,
        'sin-select': SingleSelect,
        'sin-text': SingleText
    },
    props: {
        width: {
            type: Number,
            default: 500,
            validator: val => val > 0
        }
    },
    methods: {
        carouselExample3Click: function() {
            this.carousels.example3.currentID = arguments[0].id;
        },
        checkExample2Changed: function() {
            this.checks.example2.currentValue = arguments[0] ? '真' : '假';
        },
        dialogExample2Click: function(btn, index, cur) {
            this.dialogs.example2.times++;
            btn.id === 2 && (cur.close(false));
        },
        dialogExample4Click: function(btn, index, cur) {
            switch(btn.id) {
                case 1: {  
                    cur.close(false); 
                }; break;
                case 2: { 
                    this.dialogs.example4.content += this.dialogs.example4.content; 
                }; break;
            }
        },
        dialogExample5Click: async function(btn, index, cur) {
            await cur.close(false);
            btn.id === 2 && (alert(`
            获取到用户名：${ this.dialogs.example5.usernameValue }
            密码：${ this.dialogs.example5.passwordValue }
            如果是真实的登录场景，这个时机需要向服务器发出ajax请求。
            `));
        },
        groupExample2Changed: function(index) {
            this.groups.example2.currentValue = index;
        },
        textExample1EnterDown: function() {
            this.texts.example1.currentValue = this.texts.example1.value;
        },
        selectExample1Selected: function() {
            this.selects.example1.currentValue = arguments[0];
        },
        selectExample3DomainSelected: function(index, cur) {
            const count = this.selects.example3.country;
            count.value = 0;
            count.items = (cur && count.template[cur.id]) || [];
        },
        selectExample3CountrySelected: function(index, cur) {
            this.selects.example3.selectedCountry = cur && cur.text;
        },
        textExample4Changed: function(val) {
            const vaild = this.texts.example4.vaild = /^[^@]+@[\da-z]+(\.[^\.]+)+$/i.test(val);
            this.texts.example4.enableColor = vaild || !val.length ? '#6666ff' : '#ff0000';
        }
    },
    data: () => ({
        keep: false,
        vertical: true,
        tabIndex: 0,
        items: [
            { id: 'common-tab', text: 'Tab' },
            { id: 'single-button', text: 'Button' },
            { id: 'single-carousel', text: 'Carousel' },
            { id: 'single-check', text: 'Check' },
            { id: 'single-dialog', text: 'Dialog' },
            { id: 'single-group', text: 'Group' },
            { id: 'single-icon', text: 'Icon' },
            { id: 'single-select', text: 'Select' },
            { id: 'single-text', text: 'Text' }
        ],
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
        buttons: {
            warn: {
                initColor: '#ff0066',
                enterColor: '#ff0000',
                text: 'WARN',
                testText: ''
            },
            long: {
                text: 'THIS IS A LONG TEXT BUTTON.'
            }
        },
        carousels: {
            default: { value: 0 },
            example1: {
                width: 500,
                height: 300,
                duration: 2000,
                vector: -1,
                value: 0,
                items: Array(4).fill(null).map((cur, i) => ({
                    id: i + 1, src: `/static/${ i + 1 }.jpg`
                }))
            },
            example2: {
                disableColor: '#ffffff',
                enableColor: '#ff0099',
                vertical: true,
                value: 0,
                items: Array(4).fill(null).map((cur, i) => ({
                    id: i + 1, src: `/static/${ i + 1 }.jpg`
                }))
            },
            example3: {
                currentID: null,
                previewable: false,
                value: 0,
                items: Array(4).fill(null).map((cur, i) => ({
                    id: i + 1, src: `/static/${ i + 1 }.jpg`
                }))
            }
        },
        checks: {
            default: { value: false },
            example1: {
                disableColor: '#9999ff',
                enableColor: '#ff0099',
                text: '我是check实例一',
                value: false
            },
            example2: {
                value: true,
                currentValue: null
            }
        },
        dialogs: {
            default: { 
                display: false,
                text: 'OPEN DEFAULT DIALOG' 
            },
            example1: {
                display: false,
                text: 'OPEN MESSAGE PUSH DIALOG',
                movable: false,
                closable: false,
                title: 'MESSAGE PUSH',
                buttons: [],
                duration: 5000,
                type: 'push',
                hasMask: false
            },
            example2: {
                display: false,
                text: 'OPEN SLIDE DIALOG',
                title: 'SLIDE CONTENT',
                buttons: [
                    { id: 1, text: '我知道了' },
                    { id: 2, text: '我想关闭它' }
                ],
                type: 'slide',
                times: 0
            },
            example3: {
                display: false,
                text: 'OPEN COLOR DIALOG',
                title: 'COLOR TIMER',
                color: '#6666ff',
                enableColor: '#ff0099',
                disableColor: '#555555',
                duration: 5000
            },
            example4: {
                display: false,
                text: 'OPEN ADAPTER DIALOG',
                buttons: [
                    { id: 1, text: '关闭' },
                    { id: 2, text: '加点料' }
                ],
                closable: false,
                title: 'ADAPTER DIALOG',
                type: 'slide',
                content: 'Test text content.'.repeat(7)
            },
            example5: {
                display: false,
                text: 'OPEN LOGIN DIALOG',
                buttons: [
                    { id: 1, text: 'CANCEL' },
                    { id: 2, text: 'LOGIN' }
                ],
                movable: false,
                title: 'USER LOGIN DIALOG',
                type: 'slide',
                inputWidth: 450,
                usernameTitle: 'User Name:',
                passwordTitle: 'Password:',
                isPassword: true,
                usernameValue: null,
                passwordValue: null
            }
        },
        groups: {
            default: { value: 0 },
            example1: {
                value: 0,
                duration: 2000,
                blockWidth: 300,
                items: [
                    { id: 1, text: 'Group example1 item1.' },
                    { id: 2, text: 'Group example1 item2.' },
                    { id: 3, text: 'Group example1 item3.' },
                    { id: 4, text: 'Group example1 item4.' }
                ],
                vertical: true
            },
            example2: {
                value: 0,
                currentValue: 0,
                enableColor: '#ff0099',
                disableColor: '#000000'
            }
        },
        selects: {
            default: { value: null },
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
        },
        texts: {
            default: { value: null },
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
                enableColor: '#6666ff',
                vaild: false
            }
        }
    }),
    watch: {
        'dialogs.example4.display': function(val) {
            val || (this.$nextTick(() => (
                this.dialogs.example4.content = 'Test text content.'.repeat(7)
            )));
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-components-block,
.service-components-select {
    margin: 50px 0px;
    padding-left: 60px;
}

.service-components-block {
    overflow: hidden;
}

.service-components-select {
    float: left;
    clear: both;
}

.service-components-input {
    margin: @g-unit-height;
}
</style>
