<template>
    <lay-half :left-width="layout.leftWidth" :right-width="layout.rightWidth">
        <template slot="left">
            <ul class="page-icons-order">
                <li class="page-icons-icon"
                    v-for="icon in leftIcons"
                    :key="icon.icon">
                    <sin-icon :tip="icon.tip" 
                              :icon="icon.icon"
                              @emitClick="icon.click($router, $data)"
                    ></sin-icon>
                </li>
            </ul>
        </template>
        <template slot="right">
            <ul class="page-icons-order">
                <li class="page-icons-icon"
                    v-for="icon in rightIcons"
                    :key="icon.icon">
                    <sin-icon :tip="icon.tip" 
                              :icon="icon.icon"
                              @emitClick="icon.click($router)"
                    ></sin-icon>
                </li>
            </ul>
        </template>
    </lay-half>
</template>

<script>
import LayoutHalf from '../layout/layout-half.vue';
import SingleIcon from '../single/single-icon.vue';

export default {
    components: {
        'lay-half': LayoutHalf,
        'sin-icon': SingleIcon
    },
    data: () => ({
        layout: {
            leftWidth: 950,
            rightWidth: 300
        },
        leftIcons: [
            { tip: ' 话 筒 ', icon: 'speak', click: router => {} },
            { tip: ' 上 传 ', icon: 'upload', click: router => {} },
            { tip: ' 向 上 ', icon: 'top', click: router => {} },
            { tip: ' 向 左 ', icon: 'left', click: router => {} },
            { tip: ' 新 增 ', icon: 'add', click: router => {} },
            { tip: ' 主 页 ', icon: 'home', click: router => {} },
            { tip: ' 刷 新 ', icon: 'refresh', click: router => {} },
            { tip: ' 聆 听 ', icon: 'listen', click: router => {} },
            { tip: ' 查 询 ', icon: 'search', click: router => {} },
            { tip: ' 下一个 ', icon: 'next', click: router => {} },
            { tip: ' 上一个 ', icon: 'previous', click: router => {} }
        ],
        rightIcons: [
            { tip: ' 固 定 ', icon: 'clip', click: router => {} },
            { tip: ' 下 载 ', icon: 'download', click: router => {} },
            { tip: ' 向 下 ', icon: 'bottom', click: router => {} },
            { tip: ' 向 右 ', icon: 'right', click: router => {} },
            { tip: ' 关 闭 ', icon: 'close', click: router => {} },
            { tip: ' 删 除 ', icon: 'remove', click: router => {} },
            { tip: ' 用 户 ', icon: 'user', click: router => {} },
            { tip: ' 修 改 ', icon: 'modify', click: router => {} },
            { tip: ' 信 号 ', icon: 'signal', click: router => {} },
            { tip: ' 锁 定 ', icon: 'lock', click: router => {} },
            { tip: ' 解 除 ', icon: 'release', click: router => {} },
            { tip: ' 选 项 ', icon: 'options', click: router => {} },
            { tip: ' 窗 口 ', icon: 'window', click: router => {} }
        ]
    })
};
</script>

<style lang="less" scoped>
@import url(../../global.less);

.page-icons-order {
    list-style: none;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
}

.page-icons-icon {
    float: left;
    margin: 19px;
}
</style>
