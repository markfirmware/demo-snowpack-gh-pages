import './App.css.proxy.js';
import {defineComponent, reactive} from "../web_modules/vue.js";
import FooTsxVue from "./components/FooTsx.js";
import FooTsx2 from "./components/Foo.js";
import BarJsxVue from "./components/BarJsx.js";
import BarJsx2 from "./components/Bar.js";
const defaultExport = defineComponent({
  components: {
    FooTsxVue,
    FooTsx: FooTsx2,
    BarJsxVue,
    BarJsx: BarJsx2
  },
  setup() {
    const state = reactive({
      message: "Learn Vue"
    });
    return {
      state
    };
  }
});
import { createVNode as _createVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "../web_modules/vue.js"
import _imports_0 from './logo.svg.js'


const _hoisted_1 = { class: "App" }
const _hoisted_2 = { class: "App-header" }
const _hoisted_3 = /*#__PURE__*/_createVNode("img", {
  src: _imports_0,
  class: "App-logo",
  alt: "logo"
}, null, -1)
const _hoisted_4 = /*#__PURE__*/_createVNode("p", null, [
  /*#__PURE__*/_createTextVNode(" Edit "),
  /*#__PURE__*/_createVNode("code", null, "src/App.vue"),
  /*#__PURE__*/_createTextVNode(" and save to reload. ")
], -1)
const _hoisted_5 = { class: "App-tsx" }
const _hoisted_6 = {
  class: "App-link",
  href: "https://vuejs.org",
  target: "_blank",
  rel: "noopener noreferrer"
}

export function render(_ctx, _cache) {
  const _component_FooTsxVue = _resolveComponent("FooTsxVue")
  const _component_FooTsx = _resolveComponent("FooTsx")
  const _component_BarJsxVue = _resolveComponent("BarJsxVue")
  const _component_BarJsx = _resolveComponent("BarJsx")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("header", _hoisted_2, [
      _hoisted_3,
      _hoisted_4,
      _createVNode("p", _hoisted_5, [
        _createVNode(_component_FooTsxVue),
        _createVNode(_component_FooTsx),
        _createVNode(_component_BarJsxVue),
        _createVNode(_component_BarJsx)
      ]),
      _createVNode("a", _hoisted_6, _toDisplayString(_ctx.state.message), 1)
    ])
  ]))
}

defaultExport.render = render
export default defaultExport