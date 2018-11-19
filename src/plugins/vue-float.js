'use strict';

export default Vue => {
    Vue.directive('left', {
        bind: el => (el.style.float = 'left')
    });

    Vue.directive('right', {
        bind: el => (el.style.float = 'right')
    });

    Vue.directive('center', {
        bind: el => (el.style.float = 'none')
    });
};