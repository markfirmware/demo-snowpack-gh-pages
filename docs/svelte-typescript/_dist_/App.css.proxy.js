// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-1sqyd3v.svelte-1sqyd3v{text-align:center}.App.svelte-1sqyd3v code.svelte-1sqyd3v{background:#0002;padding:4px 8px;border-radius:4px}.App.svelte-1sqyd3v p.svelte-1sqyd3v{margin:0.4rem}.App-header.svelte-1sqyd3v.svelte-1sqyd3v{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-link.svelte-1sqyd3v.svelte-1sqyd3v{color:#ff3e00}.App-logo.svelte-1sqyd3v.svelte-1sqyd3v{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-1sqyd3v-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-1sqyd3v-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}