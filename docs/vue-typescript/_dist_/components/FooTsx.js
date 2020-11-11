import './FooTsx.css.proxy.js';
import { Fragment } from '../../web_modules/vue.js';
import {createVNode, isVNode} from '../../web_modules/vue.js';
const slice = Array.prototype.slice;
export function jsx(tag, props = null, children = null) {
  if (arguments.length > 3 || isVNode(children)) {
    children = slice.call(arguments, 2);
  }
  return createVNode(tag, props, children);
}

import {defineComponent, reactive} from "../../web_modules/vue.js";
export default defineComponent({
  name: "FooTsxVue",
  setup() {
    const state = reactive({
      name: "FooTsxVue"
    });
    return () => /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("div", {
      className: "foo-tsx-vue"
    }, state.name));
  }
});