
export let code = "._dist_components_Foo_module__foo-tsx {\n    color: green;\n}";
let json = {"foo-tsx":"_dist_components_Foo_module__foo-tsx"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}