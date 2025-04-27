
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5079, hash: '5e966ac0f1f62611fbacae95d450cf16c134dda1b4f2dea0ee53aeaad068636f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '76182d27b56964f7d98da85b46d4a0c8709cae3ed9f521dd1ef38687d8307ff1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12446, hash: '6d4dd7ae348232e6d3d99fa993e67338886a3b7474bc695a13c36a1a6c8522c8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DPQ53L3S.css': {size: 230768, hash: 'eeRGZBkJAUs', text: () => import('./assets-chunks/styles-DPQ53L3S_css.mjs').then(m => m.default)}
  },
};
