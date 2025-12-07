import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PasswordReset = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="max-w-md mx-auto my-20 p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700"> <h1 class="text-3xl font-bold text-center text-white mb-2">\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30EA\u30BB\u30C3\u30C8</h1> <p class="text-center text-gray-400 mb-8">
\u3054\u767B\u9332\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30D1\u30B9\u30EF\u30FC\u30C9\u518D\u8A2D\u5B9A\u7528\u306E\u30EA\u30F3\u30AF\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002
</p> <form id="reset-request-form" class="space-y-6"> <div> <label for="email" class="form-label">\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</label> <input id="email" name="email" type="email" required class="form-input" placeholder="your-email@example.com"> </div> <div> <button type="submit" class="btn btn-primary w-full"> <span>\u30EA\u30BB\u30C3\u30C8\u7528\u30EA\u30F3\u30AF\u3092\u9001\u4FE1</span> </button> </div> <p id="feedback-message" class="text-center text-sm pt-2 transition-opacity duration-300 opacity-0"></p> </form> </div> <div class="text-center mt-2"> <p class="text-xs text-gray-500">
\u203B\u8CFC\u5165\u6642\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u4E0D\u660E\u306A\u5834\u5408\u306F\u3001\u3054\u8CFC\u5165\u306E\u969B\u306E\u63A7\u3048\u30E1\u30FC\u30EB\u3092\u6DFB\u3048\u3066\u3001<br>\u300C\u8CFC\u5165\u6642\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u308F\u304B\u308A\u307E\u305B\u3093\u300D\u3068\u3044\u3046\u4EF6\u540D\u3067\u3001\u4E0B\u8A18\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002<br> <a href="mailto:info@ai-verve.net" class="text-blue-400 hover:underline">info@ai-verve.net</a> </p> </div> <script>
    const form = document.getElementById('reset-request-form');
    const messageEl = document.getElementById('feedback-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            // \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A9\u30FC\u30E0\u9001\u4FE1\uFF08\u30DA\u30FC\u30B8\u306E\u30EA\u30ED\u30FC\u30C9\uFF09\u3092\u3001\u307E\u305A\u7121\u52B9\u5316\u3059\u308B
            e.preventDefault();

            // \u2605\u2605\u2605\u3010\u6D44\u5316\u3011\u2605\u2605\u2605
            // \u4EE5\u524D\u306E\u30B3\u30FC\u30C9\u306B\u3042\u3063\u305F\u3001\u7570\u4E16\u754C\u306E\u546A\u6587\uFF08TypeScript\u306E\u578B\u6CE8\u91C8\uFF09\u3092\u5B8C\u5168\u306B\u6392\u9664\u3057\u3001
            // \u7D14\u7C8B\u306AJavaScript\u3068\u3057\u3066\u3001\u78BA\u5B9F\u306B\u52D5\u4F5C\u3059\u308B\u3088\u3046\u4FEE\u6B63\u3059\u308B\u3002
            const emailInput = document.getElementById('email');
            if (!emailInput) {
                console.error('Email input element not found.');
                return;
            }
            const email = emailInput.value;

            // \u51E6\u7406\u4E2D\u3067\u3042\u308B\u3053\u3068\u3092\u30E6\u30FC\u30B6\u30FC\u306B\u793A\u3059\uFF08\u4EFB\u610F\u3060\u304C\u3001\u7F8E\u3057\u3044\u4F53\u9A13\u306B\u306F\u4E0D\u53EF\u6B20\uFF09
            const submitButton = form.querySelector('button[type="submit"]');
            if(submitButton) submitButton.disabled = true;
            if(messageEl) messageEl.textContent = '\u51E6\u7406\u4E2D...';

            try {
                const response = await fetch('/snspack/wp-json/a1-project/v2/request-password-reset', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email })
                });

                const data = await response.json();

                if (!response.ok) {
                    // \u30B5\u30FC\u30D0\u30FC\u304B\u3089\u306E\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3042\u308C\u3070\u3001\u305D\u308C\u3092\u8868\u793A\u3059\u308B
                    throw new Error(data.message || '\u4E0D\u660E\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002');
                }

                // \u6210\u529F\u30FB\u5931\u6557\u306B\u95A2\u308F\u3089\u305A\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u306F\u540C\u3058\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\u3057\u3001\u5B89\u5FC3\u611F\u3092\u4E0E\u3048\u308B
                if (messageEl) {
                    messageEl.textContent = '\u3054\u5165\u529B\u3044\u305F\u3060\u3044\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u5B9B\u306B\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u518D\u8A2D\u5B9A\u306E\u3054\u6848\u5185\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002\uFF08\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30E1\u30FC\u30EB\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\uFF09';
                    messageEl.style.color = 'white';
                    messageEl.style.opacity = '1';
                }

            } catch (error) {
                // \u5931\u6557\u3057\u305F\u5834\u5408\u306F\u3001\u5177\u4F53\u7684\u306A\u30A8\u30E9\u30FC\u5185\u5BB9\u3092\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u8A18\u9332\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u306F\u6C4E\u7528\u7684\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u898B\u305B\u308B
                console.error('Password reset request failed:', error);
                if (messageEl) {
                    messageEl.textContent = '\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002';
                    messageEl.style.color = '#f87171'; // \u8D64\u8272
                    messageEl.style.opacity = '1';
                }
            } finally {
                // \u51E6\u7406\u304C\u6210\u529F\u3057\u3088\u3046\u304C\u5931\u6557\u3057\u3088\u3046\u304C\u3001\u5FC5\u305A\u30DC\u30BF\u30F3\u3092\u518D\u5EA6\u6709\u52B9\u5316\u3059\u308B
                if(submitButton) submitButton.disabled = false;
            }
        });
    }
<\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/USER/a1-body/src/pages/password-reset.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/password-reset.astro";
const $$url = "/password-reset";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PasswordReset,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
