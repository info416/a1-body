import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u30ED\u30B0\u30A4\u30F3" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="login-container" style="max-width: 400px; margin: 5rem auto;"> <h1 class="text-3xl font-bold text-center">\u30ED\u30B0\u30A4\u30F3</h1> <form id="login-form" class="mt-8 space-y-6"> <div> <label for="email" class="form-label">\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</label> <input id="email" name="email" type="email" autocomplete="email" required class="form-input"> </div> <div> <label for="password" class="form-label">\u30D1\u30B9\u30EF\u30FC\u30C9</label> <input id="password" name="password" type="password" autocomplete="current-password" required class="form-input"> </div> <div style="margin-top:1em;"> <button type="submit" class="btn btn-primary w-full">\u30ED\u30B0\u30A4\u30F3\u3059\u308B</button> </div> <div class="text-center mt-4"> <a href="https://ai-verve.net/snspack/wp-login.php?wp_lang=ja&action=lostpassword" class="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200" target="_blank">
\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u3067\u3059\u304B\uFF1F
</a> </div> <p id="error-message" class="text-red-400 text-center" style="display: none;"></p> </form> </div> <script>
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    /**
     * \u8A8D\u8A3C\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u65E5\u672C\u8A9E\u306B\u7FFB\u8A33\u3059\u308B\u95A2\u6570
     * @param {string} message - \u30D7\u30E9\u30B0\u30A4\u30F3\u304B\u3089\u8FD4\u3055\u308C\u305F\u82F1\u8A9E\u306E\u30E1\u30C3\u30BB\u30FC\u30B8
     * @returns {string} - \u65E5\u672C\u8A9E\u306B\u7FFB\u8A33\u3055\u308C\u305F\u30E1\u30C3\u30BB\u30FC\u30B8
     */
    function translateAuthError(message) {
        // "Wrong user credentials" \u3092\u542B\u3080\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u691C\u77E5
        if (message && message.toLowerCase().includes('wrong user credentials')) {
            return '\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002';
        }
        // \u305D\u306E\u4ED6\u306E\u30A8\u30E9\u30FC\u306F\u3001\u3088\u308A\u4E00\u822C\u7684\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u307E\u3068\u3081\u308B\u304B\u3001\u305D\u306E\u307E\u307E\u8868\u793A\u3059\u308B
        return message || '\u30ED\u30B0\u30A4\u30F3\u4E2D\u306B\u4E0D\u660E\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002';
    }

    if (form) {
        form.addEventListener('submit', async (e) => {
            // \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A9\u30FC\u30E0\u9001\u4FE1\u3092\u505C\u6B62
            e.preventDefault();
            
            // \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u4E00\u65E6\u975E\u8868\u793A\u306B\u3059\u308B
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            if (!emailInput || !passwordInput) {
                console.error('\u30ED\u30B0\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u306E\u5165\u529B\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002');
                return;
            }

            const emailValue = emailInput.value;
            const passwordValue = passwordInput.value;

            try {
                // WordPress\u306E\u8A8D\u8A3C\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1
                const response = await fetch('https://ai-verve.net/snspack/wp-json/simple-jwt-login/v1/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailValue, password: passwordValue }),
                });

                const data = await response.json();

                // \u30EC\u30B9\u30DD\u30F3\u30B9\u304CNG\u3001\u307E\u305F\u306F\u30EC\u30B9\u30DD\u30F3\u30B9\u5185\u306Esuccess\u304Cfalse\u306E\u5834\u5408
                if (!response.ok || !data.success) {
                    // \u82F1\u8A9E\u306E\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7FFB\u8A33\u3057\u3066\u30B9\u30ED\u30FC\u3059\u308B
                    throw new Error(translateAuthError(data.data.message));
                }

                const token = data.data.jwt;
                if (!token) {
                    throw new Error('\u8A8D\u8A3C\u30C8\u30FC\u30AF\u30F3\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002');
                }

                // --- \u30C8\u30FC\u30AF\u30F3\u304B\u3089\u30DA\u30A4\u30ED\u30FC\u30C9\u3092\u76F4\u63A5\u30C7\u30B3\u30FC\u30C9 ---
                const payloadBase64 = token.split('.')[1];
                const decodedPayload = atob(payloadBase64);
                const payload = JSON.parse(decodedPayload);
                
                // \u30DA\u30A4\u30ED\u30FC\u30C9\u304B\u3089\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u62BD\u51FA
                const userName = payload.username;
                const userEmail = payload.email;

                if (!userName || !userEmail) {
                    throw new Error('\u8A8D\u8A3C\u60C5\u5831\u306F\u5B8C\u5168\u3067\u3059\u304C\u3001\u5185\u90E8\u30C7\u30FC\u30BF\u304C\u6B20\u843D\u3057\u3066\u3044\u307E\u3059\u3002');
                }

                // \u5168\u3066\u306E\u60C5\u5831\u3092\u30D6\u30E9\u30A6\u30B6\u306ElocalStorage\u306B\u4FDD\u5B58
                localStorage.setItem('jwt_token', token);
                localStorage.setItem('a1_userName', userName);
                localStorage.setItem('a1_userEmail', userEmail);
                
                // \u30ED\u30B0\u30A4\u30F3\u6210\u529F\u5F8C\u3001\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\uFF08\u307E\u305F\u306F\u30B3\u30F3\u30BD\u30FC\u30EB\uFF09\u3078\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8
                window.location.href = '/dashboard';

            } catch (error) {
                // \u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u3001\u65E5\u672C\u8A9E\u5316\u3055\u308C\u305F\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A
                if (errorMessage) {
                    errorMessage.textContent = error.message;
                    errorMessage.style.display = 'block';
                }
            }
        });
    }
<\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/USER/a1-body/src/pages/login.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
