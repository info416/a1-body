import { e as createComponent, l as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Frameworks = createComponent(async ($$result, $$props, $$slots) => {
  const CATEGORY_ID = 31;
  const response = await fetch(`https://ai-verve.net/snspack/wp-json/wp/v2/posts?categories=${CATEGORY_ID}&per_page=100&_fields=id,title,acf`);
  const posts = await response.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u601D\u8003\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u66F8\u5EAB - \u53E1\u667A\u306E\u5B9D\u7269\u5EAB" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="content-wrapper"> <h1 class="page-title mb-2">\u601D\u8003\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u66F8\u5EAB</h1> <p class="text-xl text-gray-400 mb-12">\u3053\u3053\u306F\u3001\u601D\u8003\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u63D0\u4F9B\u3059\u308B\u5834\u6240\u3067\u3059\u3002\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306F\u3001\u305D\u308C\u305E\u308C\u304C\u3001\u6839\u62E0\u3068\u5B9F\u7E3E\u306E\u3042\u308B\u3082\u306E\u3067\u3059\u3002\u3084\u3084\u3053\u3057\u3044\u3082\u306E\u3092\u5B9F\u7528\u30EC\u30D9\u30EB\u306B\u3057\u3066\u3042\u308B\u3001\u307E\u3055\u306B\u53E1\u667A\u306E\u7D50\u6676\u3067\u3059\u3002\u305C\u3072\u3054\u6D3B\u7528\u304F\u3060\u3055\u3044\u3002\u8133\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u3082\u306A\u308A\u307E\u3059\u3002</p> ', ' <div class="card-grid"> ', ` </div> </div> <script>
document.addEventListener('DOMContentLoaded', () => {
    // --- \u3053\u306E\u30DA\u30FC\u30B8\u306B\u5B58\u5728\u3059\u308B\u3001\u5168\u3066\u306E\u9B42\u306E\u5668\u3092\u53EC\u559A ---
    const allCards = document.querySelectorAll('.treasure-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    // --- \u66F8\u658E\uFF08\u30E2\u30FC\u30C0\u30EB\uFF09\u3092\u958B\u304F\u5100\u5F0F ---
    function openModal(cardElement) {
        if (!modalOverlay) return;
        const treasure = cardElement.dataset; // \u30AB\u30FC\u30C9\u304C\u8A18\u61B6\u3057\u3066\u3044\u308B\u9B42\u3092\u8AAD\u307F\u53D6\u308B

        modalTitle.textContent = treasure.title;

        let contentHTML = \`<p>\${treasure.description}</p>\`;
        if (treasure.prompt) {
            contentHTML += \`<div class="prompt-output-container mt-6"><div class="prompt-output-header"><h3 class="font-semibold text-gray-300">\u30D7\u30ED\u30F3\u30D7\u30C8</h3></div><pre class="prompt-output">\${treasure.prompt}</pre></div>\`;
        }

        let buttonHTML = '';
        if (treasure.btn1Type && treasure.btn1Type !== '(\u7A7A)') {
            if (treasure.btn1Type === 'copy') buttonHTML += \`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\`;
            else if (treasure.btn1Type === 'pdf') buttonHTML += \`<a href="\${treasure.btn1Value}" target="_blank" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\`;
        }
        if (treasure.btn2Type && treasure.btn2Type !== '(\u7A7A)') {
            if (buttonHTML !== '') buttonHTML += ' ';
            if (treasure.btn2Type === 'copy') buttonHTML += \`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\`;
            else if (treasure.btn2Type === 'pdf') buttonHTML += \`<a href="\${treasure.btn2Value}" target="_blank" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\`;
        }

        modalContent.innerHTML = contentHTML + '<div class="modal-actions">' + buttonHTML + '</div>';

        const copyButtons = modalContent.querySelectorAll('.modal-copy-btn');
        copyButtons.forEach(copyButton => {
            copyButton.addEventListener('click', () => {
                if (!treasure.prompt) return;
                navigator.clipboard.writeText(treasure.prompt).then(() => {
                    copyButton.textContent = '\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01';
                    setTimeout(() => { copyButton.textContent = '\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC'; }, 2000);
                });
            });
        });

        modalOverlay.classList.add('visible');
    }

    // --- \u66F8\u658E\u3092\u9589\u3058\u308B\u5100\u5F0F ---
    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('visible');
    }

    // --- \u3053\u306E\u30DA\u30FC\u30B8\u306E\u5168\u3066\u306E\u30AB\u30FC\u30C9\u306B\u3001\u9B42\u3092\u5BBF\u3059 ---
    allCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    // --- \u9589\u3058\u308B\u30DC\u30BF\u30F3\u306E\u795E\u7D4C\u63A5\u7D9A ---
    if(modalClose) modalClose.addEventListener('click', closeModal);
    if(modalOverlay) modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});
<\/script> `], [" ", '<div class="content-wrapper"> <h1 class="page-title mb-2">\u601D\u8003\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u66F8\u5EAB</h1> <p class="text-xl text-gray-400 mb-12">\u3053\u3053\u306F\u3001\u601D\u8003\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u63D0\u4F9B\u3059\u308B\u5834\u6240\u3067\u3059\u3002\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306F\u3001\u305D\u308C\u305E\u308C\u304C\u3001\u6839\u62E0\u3068\u5B9F\u7E3E\u306E\u3042\u308B\u3082\u306E\u3067\u3059\u3002\u3084\u3084\u3053\u3057\u3044\u3082\u306E\u3092\u5B9F\u7528\u30EC\u30D9\u30EB\u306B\u3057\u3066\u3042\u308B\u3001\u307E\u3055\u306B\u53E1\u667A\u306E\u7D50\u6676\u3067\u3059\u3002\u305C\u3072\u3054\u6D3B\u7528\u304F\u3060\u3055\u3044\u3002\u8133\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u3082\u306A\u308A\u307E\u3059\u3002</p> ', ' <div class="card-grid"> ', ` </div> </div> <script>
document.addEventListener('DOMContentLoaded', () => {
    // --- \u3053\u306E\u30DA\u30FC\u30B8\u306B\u5B58\u5728\u3059\u308B\u3001\u5168\u3066\u306E\u9B42\u306E\u5668\u3092\u53EC\u559A ---
    const allCards = document.querySelectorAll('.treasure-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    // --- \u66F8\u658E\uFF08\u30E2\u30FC\u30C0\u30EB\uFF09\u3092\u958B\u304F\u5100\u5F0F ---
    function openModal(cardElement) {
        if (!modalOverlay) return;
        const treasure = cardElement.dataset; // \u30AB\u30FC\u30C9\u304C\u8A18\u61B6\u3057\u3066\u3044\u308B\u9B42\u3092\u8AAD\u307F\u53D6\u308B

        modalTitle.textContent = treasure.title;

        let contentHTML = \\\`<p>\\\${treasure.description}</p>\\\`;
        if (treasure.prompt) {
            contentHTML += \\\`<div class="prompt-output-container mt-6"><div class="prompt-output-header"><h3 class="font-semibold text-gray-300">\u30D7\u30ED\u30F3\u30D7\u30C8</h3></div><pre class="prompt-output">\\\${treasure.prompt}</pre></div>\\\`;
        }

        let buttonHTML = '';
        if (treasure.btn1Type && treasure.btn1Type !== '(\u7A7A)') {
            if (treasure.btn1Type === 'copy') buttonHTML += \\\`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\\\`;
            else if (treasure.btn1Type === 'pdf') buttonHTML += \\\`<a href="\\\${treasure.btn1Value}" target="_blank" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\\\`;
        }
        if (treasure.btn2Type && treasure.btn2Type !== '(\u7A7A)') {
            if (buttonHTML !== '') buttonHTML += ' ';
            if (treasure.btn2Type === 'copy') buttonHTML += \\\`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\\\`;
            else if (treasure.btn2Type === 'pdf') buttonHTML += \\\`<a href="\\\${treasure.btn2Value}" target="_blank" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\\\`;
        }

        modalContent.innerHTML = contentHTML + '<div class="modal-actions">' + buttonHTML + '</div>';

        const copyButtons = modalContent.querySelectorAll('.modal-copy-btn');
        copyButtons.forEach(copyButton => {
            copyButton.addEventListener('click', () => {
                if (!treasure.prompt) return;
                navigator.clipboard.writeText(treasure.prompt).then(() => {
                    copyButton.textContent = '\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01';
                    setTimeout(() => { copyButton.textContent = '\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC'; }, 2000);
                });
            });
        });

        modalOverlay.classList.add('visible');
    }

    // --- \u66F8\u658E\u3092\u9589\u3058\u308B\u5100\u5F0F ---
    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('visible');
    }

    // --- \u3053\u306E\u30DA\u30FC\u30B8\u306E\u5168\u3066\u306E\u30AB\u30FC\u30C9\u306B\u3001\u9B42\u3092\u5BBF\u3059 ---
    allCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    // --- \u9589\u3058\u308B\u30DC\u30BF\u30F3\u306E\u795E\u7D4C\u63A5\u7D9A ---
    if(modalClose) modalClose.addEventListener('click', closeModal);
    if(modalOverlay) modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});
<\/script> `])), maybeRenderHead(), posts.length === 0 && renderTemplate`<p>現在、この書庫に収められた宝物はまだありません。新たな叡智が届くのをお待ちください。</p>`, posts.map((post) => renderTemplate`<div class="card treasure-card"${addAttribute(post.title.rendered, "data-title")}${addAttribute(post.acf.treasure_description || "", "data-description")}${addAttribute(post.acf.treasure_prompt || "", "data-prompt")}${addAttribute(post.acf.button_1_type || "", "data-btn1-type")}${addAttribute(post.acf.button_1_value || "", "data-btn1-value")}${addAttribute(post.acf.button_2_type || "", "data-btn2-type")}${addAttribute(post.acf.button_2_value || "", "data-btn2-value")}> <div class="card-link"> <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path> </svg> <h3 class="card-title">${post.title.rendered}</h3> <p class="card-description">${post.acf.treasure_description}</p> <span class="card-cta mt-auto">宝を開ける &rarr;</span> </div> </div>`)) })}`;
}, "C:/Users/USER/a1-body/src/pages/treasury/frameworks.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/treasury/frameworks.astro";
const $$url = "/treasury/frameworks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Frameworks,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
