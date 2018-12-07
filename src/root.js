import Vue from 'vue';
import 'babel-polyfill';
import Router from 'vue-router';
import VueFloat from './plugins/vue-float';
import VueOffset from './plugins/vue-offset';
import routes from './routes';
import Root from './root.vue';

Vue.use(Router);
Vue.use(VueFloat);
Vue.use(VueOffset);

new Vue({
    el: '#root',
    render: h => h(Root),
    router: new Router({
        mode: 'history',
        routes
    })
});