<template>
    <div class="service-dialog">
        <div class="service-dialog-block">
            single-dialog组件原型，源代码仓库地址：
            <a href="https://github.com/lr5420511/my-vue-components/blob/master/src/components/single/single-dialog.vue">
            VUE-COMPONENTS-DIALOG
            </a><br/><br/>
            <sin-button :text="defaultDialog.text"
                        @emitClick="defaultDialog.display=true"
            ></sin-button>
            <sin-dialog v-if="defaultDialog.display"
                        @emitClose="defaultDialog.display=false"
            ></sin-dialog>
        </div>
        <div class="service-dialog-block">
        -----以下演示常用的Dialog组件在各个场景中的应用-----
        </div>
        <div class="service-dialog-block">
            你可能需要一个不能移动，没有关闭按钮和掩盖层，并且没有操作按钮的纯消息弹窗。可以配置它定时关闭<br/><br/>
            <sin-button :text="example1.text"
                        @emitClick="example1.display=true"
            ></sin-button>
            <sin-dialog v-if="example1.display"
                        :movable="example1.movable"
                        :closable="example1.closable"
                        :buttons="example1.buttons"
                        :duration="example1.duration"
                        :title="example1.title"
                        :type="example1.type"
                        :has-mask="example1.hasMask"
                        @emitClose="example1.display=false">
                <div style="height:36px;line-height:36px;">这是一个消息弹窗！</div>
            </sin-dialog>
        </div>
        <div class="service-dialog-block">
            你可能需要一个可以自由移动，有关闭按钮和掩盖层，并且操作按钮可定制和响应的内容弹窗。你可能还需要它有一个炫酷的开始。你点击了<b>{{ example2.times }}</b>次弹窗按钮<br/><br/>
            <sin-button :text="example2.text"
                        @emitClick="example2.display=true"
            ></sin-button>
            <sin-dialog v-if="example2.display"
                        :buttons="example2.buttons"
                        :title="example2.title"
                        :type="example2.type"
                        @emitClose="example2.display=false"
                        @emitClick="example2Click">
                <div style="height:50px;line-height:50px;">这是一个内容弹窗，你可以往这里填充内容。</div>
            </sin-dialog>
        </div>
        <div class="service-dialog-block">
            你可能需要一个颜色风格可以定制，并且可以定时关闭的比较保守的内容弹窗。<br/><br/>
            <sin-button :text="example3.text"
                        @emitClick="example3.display=true"
            ></sin-button>
            <sin-dialog v-if="example3.display"
                        :color="example3.color"
                        :disable-color="example3.disableColor"
                        :enable-color="example3.enableColor"
                        :duration="example3.duration"
                        :title="example3.title"
                        @emitClose="example3.display=false">
                <div style="height:50px;line-height:50px;">这是一个内容弹窗，你可以往这里填充内容。</div>
            </sin-dialog>
        </div>
        <div class="service-dialog-block">
            你可能需要一个能够自动适配内容尺寸的弹窗，哪怕是运行时适配。下面我将演示这样的弹窗实例<br/><br/>
            <sin-button :text="example4.text"
                        @emitClick="example4.display=true"
            ></sin-button>
            <sin-dialog v-if="example4.display"
                        :buttons="example4.buttons"
                        :closable="example4.closable"
                        :title="example4.title"
                        :type="example4.type"
                        @emitClose="example4.display=false"
                        @emitClick="example4Click">
                <div style="width:500px">{{ example4.content }}</div>
            </sin-dialog>
        </div>
        <div class="service-dialog-block">
            下面我将演示一个真实场景中的实例，一个用户登录页面。需要用到single-text组件<br/><br/>
            <sin-button :text="example5.text"
                        @emitClick="example5.display=true"
            ></sin-button>
            <sin-dialog v-if="example5.display"
                        :buttons="example5.buttons"
                        :movable="example5.movable"
                        :title="example5.title"
                        :type="example5.type"
                        @emitClose="example5.display=false"
                        @emitClick="example5Click">
                <sin-text class="service-dialog-input"
                          :width="example5.inputWidth"
                          :display-title="example5.usernameTitle"
                          v-model="example5.usernameValue"
                ></sin-text>
                <sin-text class="service-dialog-input"
                          :width="example5.inputWidth"
                          :display-title="example5.passwordTitle"
                          :is-password="example5.isPassword"
                          v-model="example5.passwordValue"
               ></sin-text>
            </sin-dialog>
        </div>
        <div class="service-dialog-block">
        弹窗组件应该把关注点放在<b>内容的适配性、操作的可交互性以及动效</b>上面。
        </div>
    </div>
</template>

<script>
import SingleDialog from '../single/single-dialog.vue';
import SingleText from '../single/single-text.vue';
import SingleButton from '../single/single-button.vue';

export default {
    components: {
        'sin-dialog': SingleDialog,
        'sin-text': SingleText,
        'sin-button': SingleButton
    },
    data: () => ({
        defaultDialog: { 
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
    }),
    methods: {
        example2Click: function(btn, index, cur) {
            this.example2.times++;
            btn.id === 2 && (cur.close(false));
        },
        example4Click: function(btn, index, cur) {
            switch(btn.id) {
                case 1: {  
                    cur.close(false); 
                }; break;
                case 2: { 
                    this.example4.content += this.example4.content; 
                }; break;
            }
        },
        example5Click: async function(btn, index, cur) {
            await cur.close(false);
            btn.id === 2 && (alert(`
            获取到用户名：${ this.example5.usernameValue }
            密码：${ this.example5.passwordValue }
            如果是真实的登录场景，这个时机需要向服务器发出ajax请求。
            `));
        }
    },
    watch: {
        'example4.display': function(val) {
            val || (this.$nextTick(() => (
                this.example4.content = 'Test text content.'.repeat(7)
            )));
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.service-dialog {
    border-left: solid 1px @g-fifth-color;
    overflow: hidden;
}

.service-dialog-block {
    margin: 50px 0px;
    padding-left: 60px;
    overflow: hidden;
}

.service-dialog-input {
    margin: @g-unit-height;
}
</style>
