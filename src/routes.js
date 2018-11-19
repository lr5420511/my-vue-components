import PageIcons from './components/page/page-icons.vue';
import PageComponents from './components/page/page-components.vue';
import PageMap from './components/page/page-map.vue';

export default [
    { path: '/', component: PageMap },
    { path: '/components', component: PageComponents },
    { path: '/icons', component: PageIcons }
];