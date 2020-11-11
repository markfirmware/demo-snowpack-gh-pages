import {h, render} from "../web_modules/preact.js";
import "../web_modules/preact/devtools.js";
import App2 from "./App.js";
import "./index.css.proxy.js";
const root = document.getElementById("root");
if (root) {
  render(/* @__PURE__ */ h(App2, null), root);
}
