'use strict';

export default Vue => 
    Vue.directive('animate', {
        inserted: commandHook,
        update: commandHook
    });

const commandHook = function(el, bind, vn) {
    const [curValue, oldValue] = [
        bind.value, bind.oldValue
    ];
    const cont = !oldValue || Object.keys(curValue).some(key =>
        curValue[key] !== oldValue[key]
    );
    if(!cont) return;
    console.log(...arguments); // 查看runtime数据，为下一步编写指令做充分准备
};