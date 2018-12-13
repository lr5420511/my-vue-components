<template>
    <lay-root :clipable="clipable" :top="top">
        <template slot="head">
            <span class="root-logo">ALEX-COMPONENTS</span>
            <img class="root-me" :src="me" />
            <sin-group class="root-menu" v-right
                       :items="menu.items"
                       v-model="menu.currentIndex"
                       @input="toPath"
            ></sin-group>
        </template>
        <router-view></router-view>
        <template slot="foot">
            <div class="root-copyright">
                Copyright 2018 Alex liao.
            </div>
        </template>
    </lay-root>
</template>

<script>
import LayoutRoot from './components/layout/layout-root.vue';
import SingleGroup from './components/single/single-group.vue';
import ResourceMe from './resource/me.jpg';

export default {
    components: {
        'lay-root': LayoutRoot,
        'sin-group': SingleGroup
    },
    data: () => ({
        clipable: true,
        top: 56,
        me: ResourceMe,
        menu: {
            currentIndex: 0,
            items: [
                { id: 1, text: 'Main' },
                { id: 2, text: 'Css icons' },
                { id: 3, text: 'Vue components' },
                { id: 4, text: 'About me' }
            ]
        }
    }),
    methods: {
        toPath: function() {
            const id = arguments[1].id;
            switch(id) {
                case 1: { this.$router.push('/'); }; break;
                case 2: { this.$router.push('/icons'); }; break;
                case 3: { this.$router.push('/components'); }; break;
                case 4: { this.$router.push('/about'); }; break;
            }
        }
    }
};
</script>

<style lang="less">
@import url(./global.less);

body {
    margin: 0px;
    background-color: @g-fifth-color;
    font-family: @g-font-family;
    font-size: @g-font-size;
    color: @g-third-color;
}

.root-logo {
    float: left;
    height: @g-unit-height;
    color: @g-first-color;
    font-size: 20px;
    line-height: @g-unit-height;
    margin-right: 20px;
}

.root-menu {
    margin-left: 20px;
}

.root-me {
    float: right;
    width: @g-unit-height;
    height: @g-unit-height;
    border-radius: 50%;
    margin-left: 20px;
}

.root-copyright {
    height: @g-unit-height;
    padding: @g-unit-height 0px;
    text-align: center;
    white-space: nowrap;
    line-height: @g-unit-height;
    font-size: 14px;
}
</style>
