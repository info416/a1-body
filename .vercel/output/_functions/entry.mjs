import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DSjO0D4s.mjs';
import { manifest } from './manifest_D61U1EAA.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/check-password.astro.mjs');
const _page2 = () => import('./pages/codex/alchemist.astro.mjs');
const _page3 = () => import('./pages/codex/artisan.astro.mjs');
const _page4 = () => import('./pages/codex/codex.astro.mjs');
const _page5 = () => import('./pages/codex/empath.astro.mjs');
const _page6 = () => import('./pages/codex/guardian.astro.mjs');
const _page7 = () => import('./pages/codex/innovator.astro.mjs');
const _page8 = () => import('./pages/codex/magician.astro.mjs');
const _page9 = () => import('./pages/codex/mediator.astro.mjs');
const _page10 = () => import('./pages/codex/sage.astro.mjs');
const _page11 = () => import('./pages/console.astro.mjs');
const _page12 = () => import('./pages/dashboard.astro.mjs');
const _page13 = () => import('./pages/login.astro.mjs');
const _page14 = () => import('./pages/password-reset.astro.mjs');
const _page15 = () => import('./pages/program/chapter-00.astro.mjs');
const _page16 = () => import('./pages/program/chapter-01.astro.mjs');
const _page17 = () => import('./pages/program/chapter-02.astro.mjs');
const _page18 = () => import('./pages/program/chapter-03.astro.mjs');
const _page19 = () => import('./pages/program/chapter-04.astro.mjs');
const _page20 = () => import('./pages/program/chapter-zero.astro.mjs');
const _page21 = () => import('./pages/program/cockpit.astro.mjs');
const _page22 = () => import('./pages/recipes/recipe-01.astro.mjs');
const _page23 = () => import('./pages/recipes/recipe-02.astro.mjs');
const _page24 = () => import('./pages/recipes/recipe-03.astro.mjs');
const _page25 = () => import('./pages/sanctuary.astro.mjs');
const _page26 = () => import('./pages/shintaku_no_ma.astro.mjs');
const _page27 = () => import('./pages/treasury/frameworks.astro.mjs');
const _page28 = () => import('./pages/treasury/miniproduct.astro.mjs');
const _page29 = () => import('./pages/treasury/prompts.astro.mjs');
const _page30 = () => import('./pages/treasury.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/check-password.js", _page1],
    ["src/pages/codex/alchemist.astro", _page2],
    ["src/pages/codex/artisan.astro", _page3],
    ["src/pages/codex/codex.astro", _page4],
    ["src/pages/codex/empath.astro", _page5],
    ["src/pages/codex/guardian.astro", _page6],
    ["src/pages/codex/innovator.astro", _page7],
    ["src/pages/codex/magician.astro", _page8],
    ["src/pages/codex/mediator.astro", _page9],
    ["src/pages/codex/sage.astro", _page10],
    ["src/pages/console.astro", _page11],
    ["src/pages/dashboard.astro", _page12],
    ["src/pages/login.astro", _page13],
    ["src/pages/password-reset.astro", _page14],
    ["src/pages/program/chapter-00.astro", _page15],
    ["src/pages/program/chapter-01.astro", _page16],
    ["src/pages/program/chapter-02.astro", _page17],
    ["src/pages/program/chapter-03.astro", _page18],
    ["src/pages/program/chapter-04.astro", _page19],
    ["src/pages/program/chapter-zero.astro", _page20],
    ["src/pages/program/cockpit.astro", _page21],
    ["src/pages/recipes/recipe-01.astro", _page22],
    ["src/pages/recipes/recipe-02.astro", _page23],
    ["src/pages/recipes/recipe-03.astro", _page24],
    ["src/pages/sanctuary.astro", _page25],
    ["src/pages/shintaku_no_ma.astro", _page26],
    ["src/pages/treasury/frameworks.astro", _page27],
    ["src/pages/treasury/miniproduct.astro", _page28],
    ["src/pages/treasury/prompts.astro", _page29],
    ["src/pages/treasury/index.astro", _page30]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bd9f535e-c18a-4685-a1cb-62a549d6247b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
