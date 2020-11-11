
export let code = "._dist_components_Bar_module__bar-jsx {\n  color: red;\n}\n";
let json = {"bar-jsx":"_dist_components_Bar_module__bar-jsx"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}