'use strict';

export default Vue => (
    // Get a offset of current element.
    Vue.offset = function() {
        const offs = { left: 0, top: 0 };
        let [el, rt] = arguments;
        rt || (rt = null);
        while(el && (el !== rt)) {
            offs.left += el.offsetLeft;
            offs.top += el.offsetTop;
            el = el.offsetParent;
        }
        if(!el && rt) return null;
        return offs;
    }
);