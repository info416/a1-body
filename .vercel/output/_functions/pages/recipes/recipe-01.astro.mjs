import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Recipe01 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u81EA\u52D5\u5316\u30EC\u30B7\u30D4\u306E\u9593\uFF11" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="content-wrapper"> <div id="protected-content" style="display: none;"> <h1 class="page-title">\u81EA\u52D5\u5316\u30EC\u30B7\u30D4\u306E\u9593\uFF11</h1> <p>\uFF08\u3053\u3053\u306B\u3001\u30EC\u30B7\u30D4\uFF11\u306E\u3001\u53E1\u667A\u306B\u6E80\u3061\u305F\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8A18\u8FF0\u3059\u308B\uFF09</p> <br> <a href="/recipes/recipe-02" class="btn btn-primary">\u6B21\u306E\u9593\u3078\u9032\u3080</a> </div> <div id="password-gate"> <h2 class="text-2xl font-bold text-center">\u5165\u5BA4\u8A31\u53EF\u3092\u6C42\u3081\u3088</h2> <p class="text-center mt-2 text-gray-400">\u3053\u306E\u8056\u57DF\u306B\u5165\u308B\u305F\u3081\u306E\u3001\u5408\u8A00\u8449\u3092\u544A\u3052\u3088\u3002</p> <form id="password-form" class="mt-8 max-w-sm mx-auto"> <input id="password-input" type="password" class="form-input" required> <button type="submit" class="btn btn-primary w-full mt-4">\u5165\u5BA4\u3059\u308B</button> <p id="password-error" class="text-red-400 text-center mt-4" style="display: none;"></p> </form> </div> </div> <script>
    // \u3053\u306E\u90E8\u5C4B\u306E\u756A\u53F7
    const pageNumber = 1;
    // \u9B42\u306E\u8A18\u61B6\u88C5\u7F6E\u306B\u4F7F\u3046\u3001\u3053\u306E\u90E8\u5C4B\u5C02\u7528\u306E\u300C\u9375\u300D\u306E\u540D\u524D
    const storageKey = 'recipe_access_' + pageNumber;

    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorDisplay = document.getElementById('password-error');
    const gate = document.getElementById('password-gate');
    const content = document.getElementById('protected-content');
    
    // --- \u8A18\u61B6\u306E\u78BA\u8A8D ---
    // \u30DA\u30FC\u30B8\u8A2A\u554F\u6642\u3001\u9B42\u306E\u8A18\u61B6\u88C5\u7F6E\u306B\u300C\u8A31\u53EF\u8A3C\u300D\u304C\u523B\u307E\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3059\u308B
    if (localStorage.getItem(storageKey) === 'granted') {
        gate.style.display = 'none';
        content.style.display = 'block';
    }

    // --- \u8A8D\u8A3C\u306E\u5100\u5F0F ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorDisplay.style.display = 'none';
        
        const response = await fetch('/api/check-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: passwordInput.value, page: pageNumber })
        });

        if (response.ok) {
            // \u8A8D\u8A3C\u6210\u529F\u3002\u9B42\u306E\u8A18\u61B6\u88C5\u7F6E\u306B\u300C\u8A31\u53EF\u300D\u3092\u523B\u307F\u8FBC\u3080
            localStorage.setItem(storageKey, 'granted');
            gate.style.display = 'none';
            content.style.display = 'block';
        } else {
            errorDisplay.textContent = '\u5408\u8A00\u8449\u304C\u9055\u3046\u3088\u3046\u3060\u3002';
            errorDisplay.style.display = 'block';
        }
    });
<\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/USER/a1-body/src/pages/recipes/recipe-01.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/recipes/recipe-01.astro";
const $$url = "/recipes/recipe-01";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Recipe01,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
