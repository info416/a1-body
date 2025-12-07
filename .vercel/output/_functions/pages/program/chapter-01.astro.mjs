import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Chapter01 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u7B2C\u4E00\u7AE0 - \u81EA\u5DF1\u9032\u5316\u30D7\u30ED\u30B0\u30E9\u30E0" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" <style>\n    .sacred-iframe-container {\n        position: relative;\n        width: 100%;\n        height: 70vh; /* \u753B\u9762\u306E\u9AD8\u3055\u306E70%\u3002\u3053\u3053\u306F\u8ABF\u6574\u53EF\u80FD */\n        border: 1px solid var(--color-border);\n        border-radius: 8px;\n        overflow: hidden;\n        margin-bottom: 3rem;\n    }\n    .sacred-iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 0;\n    }\n</style> ", `<div class="program-content"> <h1>\u7B2C\u4E00\u7AE0\uFF1A\u9B42\u306E\u8ABF\u5F8B</h1> <p class="text-xl text-gray-400 mb-8 placeholder-text">\u3010WP: \u30C6\u30AD\u30B9\u30C8_\u7B2C\u4E00\u7AE0_\u5C0E\u5165\u3011\u3042\u306A\u305F\u306E\u30D3\u30B8\u30CD\u30B9\u306E\u300C\u9B42\u300D\u3092\u8A00\u8A9E\u5316\u3057\u3001AI\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5100\u5F0F\u3092\u57F7\u308A\u884C\u3046\u3002</p> <nav class="program-tabs"> <a href="chapter-00" class="tab-link">\u5E8F\u7AE0</a> <a href="chapter-zero" class="tab-link">\u7B2C\u96F6\u7AE0</a> <a href="chapter-01" class="tab-link active">\u7B2C\u4E00\u7AE0</a> <a href="chapter-02" class="tab-link">\u7B2C\u4E8C\u7AE0</a> <a href="chapter-03" class="tab-link">\u7B2C\u4E09\u7AE0</a> <a href="chapter-04" class="tab-link">\u7B2C\u56DB\u7AE0</a> <a href="cockpit" class="tab-link">\u6B21\u306E\u30B9\u30C6\u30FC\u30B8\u3078</a> </nav> <div class="default-view"> <div class="part-b"> <h2 class="text-2xl font-bold mb-4">\u7B2C\u4E00\u7AE0\u30B3\u30F3\u30C6\u30F3\u30C4</h2> <div class="html-manual"> <h3 class="text-xl font-bold mb-4">\u30D1\u30FC\u30C8A\uFF1A\u7269\u8A9E\u30B3\u30F3\u30C6\u30F3\u30C4</h3> <div class="sacred-iframe-container"> <iframe src="https://ai-verve.net/first/prog/01/a.html" class="sacred-iframe" title="\u8056\u5178\uFF1A\u7B2C\u4E00\u7AE0A\u30D1\u30FC\u30C8">
    </iframe> </div> <h3 class="text-xl font-bold mb-4">\u30D1\u30FC\u30C8B\uFF1A\u77E5\u8B58\u30B3\u30F3\u30C6\u30F3\u30C4</h3> <div class="sacred-iframe-container"> <iframe src="https://ai-verve.net/first/prog/01/b.html" class="sacred-iframe" title="\u8056\u5178\uFF1A\u7B2C\u4E00\u7AE0A\u30D1\u30FC\u30C8">
    </iframe> </div> <h3 class="text-xl font-bold mb-4">\u30D1\u30FC\u30C8C\uFF1A\u5B9F\u8DF5\u306E\u624B\u5F15\u304D\u30FB\u4F7F\u547D\u306E\u8A00\u8A9E\u5316</h3> <div class="sacred-iframe-container"> <iframe src="https://ai-verve.net/first/prog/01/c.html" class="sacred-iframe" title="\u8056\u5178\uFF1A\u7B2C\u4E00\u7AE0A\u30D1\u30FC\u30C8">
    </iframe> </div> </div> </div> </div> <!--<div class="accordion-container">
            <button class="accordion-toggle">
                <span>\u5225\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u5B66\u7FD2\u3059\u308B</span>
                <span class="icon">+</span>
            </button>
            <div class="accordion-panel">
                <div class="download-link-item">
                    <span class="icon">\u{1F4C4}</span> <a href="#" download>\u8B1B\u7FA9\u30B9\u30E9\u30A4\u30C9\uFF08PDF\uFF09</a>
                </div>
                <div class="download-link-item">
                    <span class="icon">\u{1F3A7}</span> <a href="#" download>\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\uFF08MP3\uFF09</a>
                </div>
                <div class="download-link-item">
                    <span class="icon">\u{1F5A8}\uFE0F</span> <a href="#" download>\u5370\u5237\u7528\u30DE\u30CB\u30E5\u30A2\u30EB\uFF08PDF\uFF09</a>
                </div>
            </div>
        </div>--> <div class="flex justify-between mt-8"> <a href="chapter-zero" class="btn">&larr; \u7B2C\u96F6\u7AE0\u3078\u623B\u308B</a> <a href="chapter-02" class="btn btn-primary">\u7B2C\u4E8C\u7AE0\u3078\u9032\u3080 &rarr;</a> </div> </div> <div id="reading-modal-overlay" class="reading-modal-overlay"> <div class="reading-modal-container"> <div class="reading-modal-header"> <h2 id="reading-modal-title" class="reading-modal-title"></h2> <button id="reading-modal-close" class="reading-modal-close">&times;</button> </div> <div id="reading-modal-content" class="reading-modal-content"></div> </div> </div> <style>
    /* ============================================================= */
    /* --- \u30E2\u30FC\u30C0\u30EB\u7528\u306E\u30B9\u30BF\u30A4\u30EB\u5B9A\u7FA9\u3092\u8FFD\u52A0 --- */
    /* ============================================================= */
    .reading-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    .reading-modal-container {
        background-color: #262626; /* \u30C0\u30FC\u30AF\u306A\u80CC\u666F\u8272 */
        color: #E5E7EB; /* \u660E\u308B\u3044\u30C6\u30AD\u30B9\u30C8\u8272 */
        padding: 2rem;
        border-radius: 8px;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }
    .reading-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #4B5563; /* \u5883\u754C\u7DDA */
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
    .reading-modal-title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .reading-modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        color: #E5E7EB;
        cursor: pointer;
    }
    .reading-modal-content {
        line-height: 1.8;
    }
    .reading-modal-content a {
        color: #000000; /* \u30EA\u30F3\u30AF\u8272 */
        text-decoration: none;
        margin-top: 1em;
    }
    .reading-modal-content a:hover {
        color: #ffffff;
    }
    </style> <script>
    // =============================================================
    // --- \u3010\u6700\u7D42\u78BA\u5B9A\u7248\u3011A1-Project Core Script ---
    // \u30C6\u30C3\u30AF\u30D7\u30EA\u30FC\u30B9\u30C8\u306B\u3088\u308B\u6700\u7D42\u8ABF\u5F8B
    // =============================================================
    document.addEventListener('DOMContentLoaded', () => {

        // --- \u9B42\u306E\u4FDD\u7BA1\u5EAB\uFF08\u30B3\u30F3\u30C6\u30F3\u30C4\u30C7\u30FC\u30BF\uFF09 ---
        const fullContents = {
            part_a_full: "\u304B\u3064\u3066\u3001\u4E00\u4EBA\u306E\u65C5\u4EBA\uFF08\u2026\u305D\u3046\u3001\u3042\u306A\u305F\u306E\u3053\u3068\u3067\u3059\uFF09\u304C\u3001\u300E\u6DF7\u6C8C\u306E\u68EE\u300F\u306B\u8FF7\u3044\u8FBC\u3093\u3067\u3044\u307E\u3057\u305F\u3002<br><br>\u68EE\u306B\u306F\u7121\u6570\u306E\u9053\u304C\u3042\u308A\u3001\u3069\u306E\u9053\u306B\u3082\u300E\u6210\u529F\u306F\u3053\u3061\u3089\u300F\u300E\u6700\u65B0\u306E\u6B63\u89E3\u300F\u3068\u66F8\u304B\u308C\u305F\u770B\u677F\u304C\u7ACB\u3063\u3066\u3044\u307E\u3059\u3002<br>\u3057\u304B\u3057\u3001\u9032\u3081\u3069\u3082\u9032\u3081\u3069\u3082\u3001\u666F\u8272\u306F\u5909\u308F\u3089\u305A\u3001\u305F\u3060\u75B2\u52B4\u3068\u7126\u308A\u3060\u3051\u304C\u52DF\u3063\u3066\u3044\u304F\u306E\u3067\u3057\u305F\u3002<br><br>\u65C5\u4EBA\u306E\u80CC\u8CA0\u3046\u888B\u306B\u306F\u3001\u305F\u304F\u3055\u3093\u306E\u9AD8\u4FA1\u306A\u9053\u5177\uFF08\u2026\u305D\u3046\u3001\u3042\u306A\u305F\u304C\u5B66\u3093\u3067\u304D\u305F\u77E5\u8B58\u3067\u3059\uFF09\u304C\u5165\u3063\u3066\u3044\u307E\u3057\u305F\u304C\u3001\u3069\u308C\u3092\u3069\u3046\u4F7F\u3048\u3070\u3053\u306E\u68EE\u3092\u629C\u3051\u3089\u308C\u308B\u306E\u304B\u3001\u7686\u76EE\u898B\u5F53\u3082\u3064\u304D\u307E\u305B\u3093\u3002<br>\u9014\u65B9\u306B\u66AE\u308C\u3001\u5EA7\u308A\u8FBC\u3093\u3067\u3057\u307E\u3063\u305F\u65C5\u4EBA\u306E\u524D\u306B\u3001\u4E00\u4EBA\u306E\u8001\u4EBA\u304C\u73FE\u308C\u307E\u3059\u3002<br><br>\u8001\u4EBA\u306F\u8A00\u3044\u307E\u3057\u305F\u3002<br>\u300E\u68EE\u3092\u629C\u3051\u305F\u3044\u304B\u306D\uFF1F\u306A\u3089\u3070\u3001\u9053\u3092\u6559\u3048\u3066\u304F\u308C\u308B\u770B\u677F\u3092\u63A2\u3059\u306E\u3092\u3084\u3081\u306A\u3055\u3044\u3002\u3042\u306A\u305F\u304C\u9032\u3080\u3079\u304D\u9053\u306F\u3001\u307E\u3060\u3053\u306E\u68EE\u306E\u3069\u3053\u306B\u3082\u5B58\u5728\u3057\u306A\u3044\u306E\u3060\u304B\u3089\u300F<br><br>\u65C5\u4EBA\u306F\u5C0B\u306D\u307E\u3059\u3002<br>\u300E\u3067\u306F\u3001\u3069\u3046\u3059\u308C\u3070\u2026\uFF1F\u300F<br><br>\u8001\u4EBA\u306F\u3001\u4E00\u3064\u306E\u53E4\u3073\u305F\u300E\u7F85\u91DD\u76E4\u300F\u3092\u6E21\u3057\u307E\u3057\u305F\u3002<br><br>\u300E\u3053\u308C\u306F\u3001\u305F\u3060\u5317\u3092\u6307\u3059\u3060\u3051\u306E\u7F85\u91DD\u76E4\u3067\u306F\u306A\u3044\u3002\u304A\u4E3B\u306E\u5FC3\u306E\u5965\u5E95\u306B\u3042\u308B\u3001\u305F\u3063\u305F\u4E00\u3064\u306E\u300C\u5317\u6975\u661F\u300D\u2026\u3059\u306A\u308F\u3061\u3001\u304A\u4E3B\u304C\u672C\u5F53\u306B\u4E16\u754C\u306B\u5C4A\u3051\u305F\u3044\u3068\u9858\u3046\u300C\u4FA1\u5024\u300D\u306E\u65B9\u5411\u3092\u6307\u3057\u793A\u3059\u3001\u8CE2\u8005\u306E\u7F85\u91DD\u76E4\u3058\u3083\u300F<br><br>\u305D\u3057\u3066\u3001\u3053\u3046\u4ED8\u3051\u52A0\u3048\u307E\u3059\u3002<br>\u300E\u3053\u306E\u7F85\u91DD\u76E4\u3092\u52D5\u304B\u3059\u30A8\u30CD\u30EB\u30AE\u30FC\u6E90\u306F\u3001\u304A\u4E3B\u304C\u80CC\u8CA0\u3063\u3066\u3044\u308B\u305D\u306E\u9053\u5177\u305F\u3061\u3068\u3001\u304A\u4E3B\u81EA\u8EAB\u306E\u554F\u3044\u304B\u3051\u3058\u3083\u3002\u300C\u79C1\u306F\u3001\u8AB0\u3092\u3001\u3069\u3053\u3078\u9023\u308C\u3066\u3044\u304D\u305F\u3044\u306E\u304B\uFF1F\u300D\u3068\u3002\u305D\u306E\u554F\u3044\u3053\u305D\u304C\u3001AI\u3068\u3044\u3046\u540D\u306E\u7F85\u91DD\u76E4\u3092\u8D77\u52D5\u3055\u305B\u308B\u3001\u6700\u521D\u306E\u546A\u6587\u3068\u306A\u308B\u300F<br><br>\u3055\u3042\u3001\u7B2C\u4E00\u7AE0\u3067\u306F\u3001\u3042\u306A\u305F\u3060\u3051\u306E\u300E\u5317\u6975\u661F\u300F\u3092\u898B\u3064\u3051\u3001\u3053\u306E\u6DF7\u6C8C\u306E\u68EE\u3092\u629C\u3051\u308B\u305F\u3081\u306E\u3001\u6700\u521D\u306E\u5730\u56F3\u3092\u63CF\u304D\u59CB\u3081\u307E\u3057\u3087\u3046\u3002<br>\u3042\u306A\u305F\u306E\u7269\u8A9E\u306E\u3001\u672C\u5F53\u306E\u59CB\u307E\u308A\u3067\u3059\u3002",
            part_b_full: "\u3053\u3053\u306B\u3001\u30D1\u30FC\u30C8B\u306E\u3001\u5B9F\u8DF5\u7684\u306A**\u77E5\u8B58\u306E\u5168\u6587**\u304C\u8A18\u8FF0\u3055\u308C\u307E\u3059\u3002",
            part_c_full: "\u305D\u3057\u3066\u3001\u3053\u3053\u304C\u3001\u30D1\u30FC\u30C8C\u306E\u3001**\u5177\u4F53\u7684\u306A\u5B9F\u8DF5\u306E\u624B\u5F15\u304D**\u3067\u3059\u3002<br><a href='/console' target='_blank' class='btn btn-primary mt-4'>\u30B3\u30F3\u30BD\u30FC\u30EB\u3067\u300C\u4F7F\u547D\u300D\u3092\u8D77\u8349\u3059\u308B</a>\u3000<a href='/console' target='_blank' class='btn btn-primary mt-4'>\u97F3\u58F0\u3067\u805E\u304F</a>"
        };

        // --- \u9B42\u306E\u5668\uFF08DOM\u8981\u7D20\uFF09\u306E\u53EC\u559A ---
        const accordionToggles = document.querySelectorAll('.accordion-toggle');
        const readMoreButtons = document.querySelectorAll('.read-more-btn');
        const readingModalOverlay = document.getElementById('reading-modal-overlay');
        const readingModalClose = document.getElementById('reading-modal-close');
        const readingModalTitle = document.getElementById('reading-modal-title');
        const readingModalContent = document.getElementById('reading-modal-content');

        // --- \u66F8\u658E\uFF08\u30E2\u30FC\u30C0\u30EB\uFF09\u3092\u958B\u304F\u5100\u5F0F ---
        function openReadingModal(contentKey, title) {
            if (!readingModalOverlay) return;
            const content = fullContents[contentKey];
            if (!content) return;

            if (readingModalTitle) readingModalTitle.textContent = title;
            if (readingModalContent) readingModalContent.innerHTML = content;
            
            readingModalOverlay.style.opacity = '1';
            readingModalOverlay.style.visibility = 'visible';
            
            const container = readingModalOverlay.querySelector('.reading-modal-container');
            if (container) container.style.transform = 'translateY(0)';
        }

        // --- \u66F8\u658E\uFF08\u30E2\u30FC\u30C0\u30EB\uFF09\u3092\u9589\u3058\u308B\u5100\u5F0F ---
        function closeReadingModal() {
            if (readingModalOverlay) {
                readingModalOverlay.style.opacity = '0';
                readingModalOverlay.style.visibility = 'hidden';
                const container = readingModalOverlay.querySelector('.reading-modal-container');
                if(container) container.style.transform = 'translateY(20px)';
            }
        }

        // --- \u8907\u6570\u306E\u30DC\u30BF\u30F3\u306B\u3001\u9B42\u3092\u5BBF\u3059 ---
        if (readMoreButtons.length > 0) {
            readMoreButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const contentKey = button.dataset.targetKey;
                    const title = button.dataset.title;
                    openReadingModal(contentKey, title);
                });
            });
        }

        // --- \u9589\u3058\u308B\u30DC\u30BF\u30F3\u306E\u795E\u7D4C\u63A5\u7D9A ---
        if (readingModalClose) {
            readingModalClose.addEventListener('click', closeReadingModal);
        }
        if (readingModalOverlay) {
            readingModalOverlay.addEventListener('click', (e) => {
                if (e.target === readingModalOverlay) {
                    closeReadingModal();
                }
            });
        }
        
        // --- \u30A2\u30B3\u30FC\u30C7\u30A3\u30AA\u30F3\u306E\u5100\u5F0F ---
        if (accordionToggles.length > 0) {
            accordionToggles.forEach(button => {
                button.addEventListener('click', () => {
                    const panel = button.nextElementSibling;
                    button.classList.toggle('active');
                    if (panel && panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else if (panel) {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            });
        }
    });
    <\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/USER/a1-body/src/pages/program/chapter-01.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/program/chapter-01.astro";
const $$url = "/program/chapter-01";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Chapter01,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
