import { e as createComponent, l as renderComponent, r as renderTemplate, n as Fragment, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZFEmLUr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TREASURE_CATEGORY_ID = 20;
  let formattedTreasures = [];
  try {
    const response = await fetch(`https://ai-verve.net/snspack/wp-json/wp/v2/posts?categories=${TREASURE_CATEGORY_ID}&per_page=100&_fields=id,title,acf`);
    if (response.ok) {
      const treasuresFromWP = await response.json();
      formattedTreasures = treasuresFromWP.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        description: post.acf.treasure_description || "\u8AAC\u660E\u304C\u3042\u308A\u307E\u305B\u3093",
        category: post.acf.treasure_category || "idea",
        button_1_type: post.acf.button_1_type,
        button_1_value: post.acf.button_1_value,
        button_2_type: post.acf.button_2_type,
        button_2_value: post.acf.button_2_value,
        treasure_prompt: post.acf.treasure_prompt
        // この行を追加
      }));
    }
  } catch (e) {
    console.error("Failed to fetch treasures:", e);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u5B9D\u7269\u5EAB", "data-astro-cid-gxs2336v": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="flex justify-between items-center mb-8" data-astro-cid-gxs2336v> <div data-astro-cid-gxs2336v> <h1 class="page-title mb-2" data-astro-cid-gxs2336v>\u53E1\u667A\u306E\u5B9D\u7269\u5EAB</h1> <p class="text-xl text-gray-400 placeholder-text" data-astro-cid-gxs2336v>\u3053\u3053\u3067\u306F\u3001\u30D7\u30ED\u30F3\u30D7\u30C8\u3084\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306A\u3069\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u79C1\u306F\u3042\u307E\u308A\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u8FFD\u3044\u304B\u3051\u308B\u3053\u3068\u306B\u91CD\u304D\u3092\u304A\u3044\u3066\u3044\u307E\u305B\u3093\u304C\u3001\u3082\u3061\u308D\u3093\u5F79\u7ACB\u3064\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002\u305C\u3072\u6D3B\u7528\u304F\u3060\u3055\u3044\u3002\u304B\u306A\u308A\u91CF\u304C\u591A\u3044\u306E\u3067\u3001\u307E\u305A\u306F\u30D4\u30F3\u3068\u304F\u308B\u3082\u306E\u3060\u3051\u3067\u3082\u3002</p> </div> <div class="archives-nav mb-12" data-astro-cid-gxs2336v> <h2 class="text-2xl font-bold text-center mb-6" data-astro-cid-gxs2336v>\u5C02\u9580\u66F8\u5EAB\u304B\u3089\u63A2\u3059</h2> <div class="flex justify-center flex-wrap gap-4" data-astro-cid-gxs2336v> <a href="/treasury/prompts" class="archive-link" data-astro-cid-gxs2336v>\u30D7\u30ED\u30F3\u30D7\u30C8\u306E\u6B66\u5668\u5EAB</a> <a href="/treasury/frameworks" class="archive-link" data-astro-cid-gxs2336v>\u601D\u8003\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u66F8\u5EAB</a> <a href="/treasury/miniproduct" class="archive-link" data-astro-cid-gxs2336v>\u30DF\u30CB\u30D7\u30ED\u30C0\u30AF\u30C8\u8A2D\u8A08\u56F3\u96C6</a> </div> </div> <h2 class="text-2xl font-bold text-center mb-6" data-astro-cid-gxs2336v>\u4E00\u89A7\u304B\u3089\u63A2\u3059</h2> <div class="view-toggle" data-astro-cid-gxs2336v> <button id="library-toggle" class="toggle-btn active" data-astro-cid-gxs2336v>\u56F3\u66F8\u9928\u30E2\u30FC\u30C9</button> <button id="compass-toggle" class="toggle-btn" data-astro-cid-gxs2336v>\u7F85\u91DD\u76E4\u30E2\u30FC\u30C9</button> </div> </div> <div id="library-view" data-astro-cid-gxs2336v> <div class="library-controls" data-astro-cid-gxs2336v> <input type="text" id="search-bar" class="search-bar" placeholder="\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u5B9D\u7269\u3092\u63A2\u3059..." data-astro-cid-gxs2336v> <p data-astro-cid-gxs2336v>\u3042\u306A\u305F\u306E\u6C42\u3081\u3066\u3044\u308B\u3082\u306E\u3092\u63A2\u3059\u306B\u306F\u3001\u691C\u7D22\u3059\u308B\u304B\u3001\u7F85\u91DD\u76E4\u30E2\u30FC\u30C9\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002</p> </div> <div id="library-grid" class="card-grid" data-astro-cid-gxs2336v></div> </div> <div id="compass-view" style="display: none;" data-astro-cid-gxs2336v> <div class="compass-question" data-astro-cid-gxs2336v> <h2 class="placeholder-text" data-astro-cid-gxs2336v>\u8CE2\u660E\u306A\u308B\u5EAD\u5E2B\u3088\u3002\n<br data-astro-cid-gxs2336v>\u4ECA\u3001\u3042\u306A\u305F\u306E\u5EAD\u3067\u3001\u6700\u3082\u624B\u3092\u8CB8\u3057\u3066\u307B\u3057\u3044\u3068\u9858\u3046\u8AB2\u984C\u306F\u3001\n<br data-astro-cid-gxs2336v>\u6B21\u306E\u3046\u3061\u3069\u308C\u3060\u308D\u3046\u304B\uFF1F\n</h2> <div class="compass-choices" data-astro-cid-gxs2336v> <button class="choice-btn" data-category="idea" data-astro-cid-gxs2336v>\u6295\u7A3F\u30CD\u30BF\u304C\u601D\u3044\u3064\u304B\u305A\u3001\u7B46\u304C\u6B62\u307E\u3063\u3066\u3044\u308B</button> <button class="choice-btn" data-category="copywriting" data-astro-cid-gxs2336v>\u81EA\u5206\u306E\u5546\u54C1\u306E\u9B45\u529B\u304C\u3001\u3046\u307E\u304F\u4F1D\u308F\u3089\u306A\u3044</button> <button class="choice-btn" data-category="efficiency" data-astro-cid-gxs2336v>\u65E5\u3005\u306E\u4F5C\u696D\u306B\u8FFD\u308F\u308C\u3001\u6642\u9593\u304C\u8DB3\u308A\u306A\u3044</button> <button class="choice-btn" data-category="engagement" data-astro-cid-gxs2336v>\u9867\u5BA2\u3068\u306E\u95A2\u4FC2\u69CB\u7BC9\u306B\u3001\u81EA\u4FE1\u304C\u306A\u3044</button> </div> </div> <div id="compass-results" class="mt-12" data-astro-cid-gxs2336v></div> </div> <div id="modal-overlay" class="modal-overlay" data-astro-cid-gxs2336v> <div class="modal-container" data-astro-cid-gxs2336v> <div class="modal-header" data-astro-cid-gxs2336v> <h2 id="modal-title" class="modal-title" data-astro-cid-gxs2336v></h2> <button id="modal-close" class="modal-close" data-astro-cid-gxs2336v>&times;</button> </div> <div id="modal-content" class="modal-content" data-astro-cid-gxs2336v></div> </div> </div> <div id="treasure-data"', ` style="display: none;" data-astro-cid-gxs2336v></div> <script>
document.addEventListener('DOMContentLoaded', () => {
    // =============================================================
    // --- \u9B42\u306E\u5668\uFF08DOM\u8981\u7D20\uFF09\u306E\u53EC\u559A ---
    // =============================================================
    const dataElement = document.getElementById('treasure-data');
    const compassToggle = document.getElementById('compass-toggle');
    const libraryToggle = document.getElementById('library-toggle');
    const compassView = document.getElementById('compass-view');
    const libraryView = document.getElementById('library-view');
    const libraryGrid = document.getElementById('library-grid');
    const searchBar = document.getElementById('search-bar');
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const compassResults = document.getElementById('compass-results');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    // --- \u30C7\u30FC\u30BF\u4FDD\u7BA1\u5EAB\u304B\u3089\u3001\u5168\u3066\u306E\u5B9D\u7269\u306E\u9B42\u3092\u8AAD\u307F\u8FBC\u3080 ---
    // \u3053\u306E\u884C\u306F\u3001\u3042\u306A\u305F\u306E\u5143\u306E\u30B3\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002\u3082\u3057 'treasure-data' \u304C\u306A\u3051\u308C\u3070\u3001\u7A7A\u306E\u914D\u5217\u3092\u4F7F\u3044\u307E\u3059\u3002
    const allTreasures = dataElement ? JSON.parse(dataElement.dataset.treasures || '[]') : [];

    // =============================================================
    // --- \u30E2\u30FC\u30C0\u30EB\uFF08\u66F8\u658E\uFF09\u5236\u5FA1\u306E\u5100\u5F0F ---
    // =============================================================
    function openModal(treasure) {
        if (!modalOverlay || !treasure) return;

        modalTitle.textContent = treasure.title;

        // \u30E2\u30FC\u30C0\u30EB\u306E\u57FA\u672C\u30B3\u30F3\u30C6\u30F3\u30C4\uFF08\u8AAC\u660E\u6587\uFF0B\u30D7\u30ED\u30F3\u30D7\u30C8\uFF09\u3092\u751F\u6210
        let contentHTML = \`<p>\${treasure.description}</p>\`;
        if (treasure.treasure_prompt) {
            contentHTML += \`
                <div class="prompt-output-container mt-6">
                    <div class="prompt-output-header"><h3 class="font-semibold text-gray-300">\u30D7\u30ED\u30F3\u30D7\u30C8</h3></div>
                    <pre class="prompt-output">\${treasure.treasure_prompt}</pre>
                </div>\`;
        }
        
        // \u30DC\u30BF\u30F3\u306EHTML\u3092\u683C\u7D0D\u3059\u308B\u3001\u7A7A\u306E\u5668\u3092\u7528\u610F
        let buttonHTML = '<br>';

        // --- \u30DC\u30BF\u30F3\uFF11\u306E\u5B58\u5728\u3092\u78BA\u8A8D\u3057\u3001\u305D\u306E\u9B42\uFF08HTML\uFF09\u3092\u751F\u6210\u3059\u308B ---
        if (treasure.button_1_type && treasure.button_1_type !== '(\u7A7A)') {
            switch (treasure.button_1_type) {
                case 'copy':
                    buttonHTML += \`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\`;
                    break;
                case 'pdf':
                    buttonHTML += \`<a href="\${treasure.button_1_value}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\`;
                    break;
            }
        }

        // --- \u30DC\u30BF\u30F3\uFF12\u306E\u5B58\u5728\u3092\u78BA\u8A8D\u3057\u3001\u305D\u306E\u9B42\uFF08HTML\uFF09\u3092\u751F\u6210\u3059\u308B ---
        if (treasure.button_2_type && treasure.button_2_type !== '(\u7A7A)') {
            if (buttonHTML !== '') { buttonHTML += ' '; } // \u30DC\u30BF\u30F3\u9593\u306B\u30B9\u30DA\u30FC\u30B9
            switch (treasure.button_2_type) {
                case 'copy':
                    buttonHTML += \`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\`;
                    break;
                case 'pdf':
                    buttonHTML += \`<a href="\${treasure.button_2_value}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\`;
                    break;
            }
        }

        // \u751F\u6210\u3055\u308C\u305F\u5168\u3066\u306E\u30DC\u30BF\u30F3\u3092\u3001\u7F8E\u3057\u3044\u5668\u306B\u53CE\u3081\u3066\u304B\u3089\u3001\u30E2\u30FC\u30C0\u30EB\u306B\u8FFD\u52A0\u3059\u308B
        modalContent.innerHTML = contentHTML + '<div class="modal-actions">' + buttonHTML + '</div>';

        // --- \u5168\u3066\u306E\u300C\u30B3\u30D4\u30FC\u30DC\u30BF\u30F3\u300D\u306B\u3001\u547D\u3092\u5439\u304D\u8FBC\u3080\u5100\u5F0F ---
        const copyButtons = modalContent.querySelectorAll('.modal-copy-btn');
        copyButtons.forEach(copyButton => {
            copyButton.addEventListener('click', () => {
                if (!treasure.treasure_prompt) return; // \u30B3\u30D4\u30FC\u3059\u308B\u3079\u304D\u9B42\u304C\u306A\u3051\u308C\u3070\u3001\u4F55\u3082\u3057\u306A\u3044

                navigator.clipboard.writeText(treasure.treasure_prompt).then(() => {
                    copyButton.textContent = '\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01';
                    setTimeout(() => {
                        copyButton.textContent = '\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC';
                    }, 2000);
                });
            });
        });

        modalOverlay.classList.add('visible');
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('visible');
        }
    }

    // =============================================================
    // --- \u30AB\u30FC\u30C9\u751F\u6210\u306E\u5100\u5F0F ---
    // =============================================================
    function createCard(treasure) {
        const card = document.createElement('div');
        card.className = 'card treasure-card';
        card.dataset.title = treasure.title.toLowerCase();
        card.dataset.description = treasure.description.toLowerCase();
        card.innerHTML = \`<div class="card-link"><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg><h3 class="card-title">\${treasure.title}</h3><p class="card-description">\${treasure.description}</p><span class="card-cta mt-auto">\u5B9D\u3092\u958B\u3051\u308B &rarr;</span></div>\`;
        card.addEventListener('click', () => openModal(treasure));
        return card;
    }

    // =============================================================
    // --- \u5168\u3066\u306E\u6A5F\u80FD\u306E\u795E\u7D4C\u63A5\u7D9A\u3068\u521D\u671F\u5316 ---
    // =============================================================

    // --- \u30D3\u30E5\u30FC\u5207\u308A\u66FF\u3048 ---
    function switchView(viewName) {
        if (viewName === 'compass') {
            compassView.style.display = 'block';
            libraryView.style.display = 'none';
            compassToggle.classList.add('active');
            libraryToggle.classList.remove('active');
        } else {
            libraryView.style.display = 'block';
            compassView.style.display = 'none';
            libraryToggle.classList.add('active');
            compassToggle.classList.remove('active');
        }
    }
    compassToggle.addEventListener('click', () => switchView('compass'));
    libraryToggle.addEventListener('click', () => switchView('library'));

    // --- \u7F85\u91DD\u76E4\u306E\u30ED\u30B8\u30C3\u30AF ---
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const results = allTreasures.filter(t => t.category && t.category.includes(category));
            compassResults.innerHTML = '<h2 class="text-2xl font-bold mb-4">\u3042\u306A\u305F\u3078\u306E\u795E\u8A17</h2><div class="card-grid"></div>';
            const grid = compassResults.querySelector('.card-grid');
            results.forEach(treasure => {
                grid.appendChild(createCard(treasure));
            });
        });
    });
    
    // --- \u56F3\u66F8\u9928\u306E\u691C\u7D22\u6A5F\u80FD ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allCards = libraryGrid.querySelectorAll('.treasure-card');
        allCards.forEach(card => {
            const title = card.dataset.title;
            const description = card.dataset.description;
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });
    });

    // --- \u521D\u671F\u5316 ---
    allTreasures.forEach(treasure => {
        libraryGrid.appendChild(createCard(treasure));
    });
    switchView('library');
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});
<\/script> `], ["  ", '<div class="flex justify-between items-center mb-8" data-astro-cid-gxs2336v> <div data-astro-cid-gxs2336v> <h1 class="page-title mb-2" data-astro-cid-gxs2336v>\u53E1\u667A\u306E\u5B9D\u7269\u5EAB</h1> <p class="text-xl text-gray-400 placeholder-text" data-astro-cid-gxs2336v>\u3053\u3053\u3067\u306F\u3001\u30D7\u30ED\u30F3\u30D7\u30C8\u3084\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306A\u3069\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u79C1\u306F\u3042\u307E\u308A\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u8FFD\u3044\u304B\u3051\u308B\u3053\u3068\u306B\u91CD\u304D\u3092\u304A\u3044\u3066\u3044\u307E\u305B\u3093\u304C\u3001\u3082\u3061\u308D\u3093\u5F79\u7ACB\u3064\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002\u305C\u3072\u6D3B\u7528\u304F\u3060\u3055\u3044\u3002\u304B\u306A\u308A\u91CF\u304C\u591A\u3044\u306E\u3067\u3001\u307E\u305A\u306F\u30D4\u30F3\u3068\u304F\u308B\u3082\u306E\u3060\u3051\u3067\u3082\u3002</p> </div> <div class="archives-nav mb-12" data-astro-cid-gxs2336v> <h2 class="text-2xl font-bold text-center mb-6" data-astro-cid-gxs2336v>\u5C02\u9580\u66F8\u5EAB\u304B\u3089\u63A2\u3059</h2> <div class="flex justify-center flex-wrap gap-4" data-astro-cid-gxs2336v> <a href="/treasury/prompts" class="archive-link" data-astro-cid-gxs2336v>\u30D7\u30ED\u30F3\u30D7\u30C8\u306E\u6B66\u5668\u5EAB</a> <a href="/treasury/frameworks" class="archive-link" data-astro-cid-gxs2336v>\u601D\u8003\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u66F8\u5EAB</a> <a href="/treasury/miniproduct" class="archive-link" data-astro-cid-gxs2336v>\u30DF\u30CB\u30D7\u30ED\u30C0\u30AF\u30C8\u8A2D\u8A08\u56F3\u96C6</a> </div> </div> <h2 class="text-2xl font-bold text-center mb-6" data-astro-cid-gxs2336v>\u4E00\u89A7\u304B\u3089\u63A2\u3059</h2> <div class="view-toggle" data-astro-cid-gxs2336v> <button id="library-toggle" class="toggle-btn active" data-astro-cid-gxs2336v>\u56F3\u66F8\u9928\u30E2\u30FC\u30C9</button> <button id="compass-toggle" class="toggle-btn" data-astro-cid-gxs2336v>\u7F85\u91DD\u76E4\u30E2\u30FC\u30C9</button> </div> </div> <div id="library-view" data-astro-cid-gxs2336v> <div class="library-controls" data-astro-cid-gxs2336v> <input type="text" id="search-bar" class="search-bar" placeholder="\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u5B9D\u7269\u3092\u63A2\u3059..." data-astro-cid-gxs2336v> <p data-astro-cid-gxs2336v>\u3042\u306A\u305F\u306E\u6C42\u3081\u3066\u3044\u308B\u3082\u306E\u3092\u63A2\u3059\u306B\u306F\u3001\u691C\u7D22\u3059\u308B\u304B\u3001\u7F85\u91DD\u76E4\u30E2\u30FC\u30C9\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002</p> </div> <div id="library-grid" class="card-grid" data-astro-cid-gxs2336v></div> </div> <div id="compass-view" style="display: none;" data-astro-cid-gxs2336v> <div class="compass-question" data-astro-cid-gxs2336v> <h2 class="placeholder-text" data-astro-cid-gxs2336v>\u8CE2\u660E\u306A\u308B\u5EAD\u5E2B\u3088\u3002\n<br data-astro-cid-gxs2336v>\u4ECA\u3001\u3042\u306A\u305F\u306E\u5EAD\u3067\u3001\u6700\u3082\u624B\u3092\u8CB8\u3057\u3066\u307B\u3057\u3044\u3068\u9858\u3046\u8AB2\u984C\u306F\u3001\n<br data-astro-cid-gxs2336v>\u6B21\u306E\u3046\u3061\u3069\u308C\u3060\u308D\u3046\u304B\uFF1F\n</h2> <div class="compass-choices" data-astro-cid-gxs2336v> <button class="choice-btn" data-category="idea" data-astro-cid-gxs2336v>\u6295\u7A3F\u30CD\u30BF\u304C\u601D\u3044\u3064\u304B\u305A\u3001\u7B46\u304C\u6B62\u307E\u3063\u3066\u3044\u308B</button> <button class="choice-btn" data-category="copywriting" data-astro-cid-gxs2336v>\u81EA\u5206\u306E\u5546\u54C1\u306E\u9B45\u529B\u304C\u3001\u3046\u307E\u304F\u4F1D\u308F\u3089\u306A\u3044</button> <button class="choice-btn" data-category="efficiency" data-astro-cid-gxs2336v>\u65E5\u3005\u306E\u4F5C\u696D\u306B\u8FFD\u308F\u308C\u3001\u6642\u9593\u304C\u8DB3\u308A\u306A\u3044</button> <button class="choice-btn" data-category="engagement" data-astro-cid-gxs2336v>\u9867\u5BA2\u3068\u306E\u95A2\u4FC2\u69CB\u7BC9\u306B\u3001\u81EA\u4FE1\u304C\u306A\u3044</button> </div> </div> <div id="compass-results" class="mt-12" data-astro-cid-gxs2336v></div> </div> <div id="modal-overlay" class="modal-overlay" data-astro-cid-gxs2336v> <div class="modal-container" data-astro-cid-gxs2336v> <div class="modal-header" data-astro-cid-gxs2336v> <h2 id="modal-title" class="modal-title" data-astro-cid-gxs2336v></h2> <button id="modal-close" class="modal-close" data-astro-cid-gxs2336v>&times;</button> </div> <div id="modal-content" class="modal-content" data-astro-cid-gxs2336v></div> </div> </div> <div id="treasure-data"', ` style="display: none;" data-astro-cid-gxs2336v></div> <script>
document.addEventListener('DOMContentLoaded', () => {
    // =============================================================
    // --- \u9B42\u306E\u5668\uFF08DOM\u8981\u7D20\uFF09\u306E\u53EC\u559A ---
    // =============================================================
    const dataElement = document.getElementById('treasure-data');
    const compassToggle = document.getElementById('compass-toggle');
    const libraryToggle = document.getElementById('library-toggle');
    const compassView = document.getElementById('compass-view');
    const libraryView = document.getElementById('library-view');
    const libraryGrid = document.getElementById('library-grid');
    const searchBar = document.getElementById('search-bar');
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const compassResults = document.getElementById('compass-results');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    // --- \u30C7\u30FC\u30BF\u4FDD\u7BA1\u5EAB\u304B\u3089\u3001\u5168\u3066\u306E\u5B9D\u7269\u306E\u9B42\u3092\u8AAD\u307F\u8FBC\u3080 ---
    // \u3053\u306E\u884C\u306F\u3001\u3042\u306A\u305F\u306E\u5143\u306E\u30B3\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002\u3082\u3057 'treasure-data' \u304C\u306A\u3051\u308C\u3070\u3001\u7A7A\u306E\u914D\u5217\u3092\u4F7F\u3044\u307E\u3059\u3002
    const allTreasures = dataElement ? JSON.parse(dataElement.dataset.treasures || '[]') : [];

    // =============================================================
    // --- \u30E2\u30FC\u30C0\u30EB\uFF08\u66F8\u658E\uFF09\u5236\u5FA1\u306E\u5100\u5F0F ---
    // =============================================================
    function openModal(treasure) {
        if (!modalOverlay || !treasure) return;

        modalTitle.textContent = treasure.title;

        // \u30E2\u30FC\u30C0\u30EB\u306E\u57FA\u672C\u30B3\u30F3\u30C6\u30F3\u30C4\uFF08\u8AAC\u660E\u6587\uFF0B\u30D7\u30ED\u30F3\u30D7\u30C8\uFF09\u3092\u751F\u6210
        let contentHTML = \\\`<p>\\\${treasure.description}</p>\\\`;
        if (treasure.treasure_prompt) {
            contentHTML += \\\`
                <div class="prompt-output-container mt-6">
                    <div class="prompt-output-header"><h3 class="font-semibold text-gray-300">\u30D7\u30ED\u30F3\u30D7\u30C8</h3></div>
                    <pre class="prompt-output">\\\${treasure.treasure_prompt}</pre>
                </div>\\\`;
        }
        
        // \u30DC\u30BF\u30F3\u306EHTML\u3092\u683C\u7D0D\u3059\u308B\u3001\u7A7A\u306E\u5668\u3092\u7528\u610F
        let buttonHTML = '<br>';

        // --- \u30DC\u30BF\u30F3\uFF11\u306E\u5B58\u5728\u3092\u78BA\u8A8D\u3057\u3001\u305D\u306E\u9B42\uFF08HTML\uFF09\u3092\u751F\u6210\u3059\u308B ---
        if (treasure.button_1_type && treasure.button_1_type !== '(\u7A7A)') {
            switch (treasure.button_1_type) {
                case 'copy':
                    buttonHTML += \\\`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\\\`;
                    break;
                case 'pdf':
                    buttonHTML += \\\`<a href="\\\${treasure.button_1_value}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\\\`;
                    break;
            }
        }

        // --- \u30DC\u30BF\u30F3\uFF12\u306E\u5B58\u5728\u3092\u78BA\u8A8D\u3057\u3001\u305D\u306E\u9B42\uFF08HTML\uFF09\u3092\u751F\u6210\u3059\u308B ---
        if (treasure.button_2_type && treasure.button_2_type !== '(\u7A7A)') {
            if (buttonHTML !== '') { buttonHTML += ' '; } // \u30DC\u30BF\u30F3\u9593\u306B\u30B9\u30DA\u30FC\u30B9
            switch (treasure.button_2_type) {
                case 'copy':
                    buttonHTML += \\\`<button class="modal-copy-btn btn btn-primary mt-4">\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC</button>\\\`;
                    break;
                case 'pdf':
                    buttonHTML += \\\`<a href="\\\${treasure.button_2_value}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-4">PDF\u3067\u958B\u304F</a>\\\`;
                    break;
            }
        }

        // \u751F\u6210\u3055\u308C\u305F\u5168\u3066\u306E\u30DC\u30BF\u30F3\u3092\u3001\u7F8E\u3057\u3044\u5668\u306B\u53CE\u3081\u3066\u304B\u3089\u3001\u30E2\u30FC\u30C0\u30EB\u306B\u8FFD\u52A0\u3059\u308B
        modalContent.innerHTML = contentHTML + '<div class="modal-actions">' + buttonHTML + '</div>';

        // --- \u5168\u3066\u306E\u300C\u30B3\u30D4\u30FC\u30DC\u30BF\u30F3\u300D\u306B\u3001\u547D\u3092\u5439\u304D\u8FBC\u3080\u5100\u5F0F ---
        const copyButtons = modalContent.querySelectorAll('.modal-copy-btn');
        copyButtons.forEach(copyButton => {
            copyButton.addEventListener('click', () => {
                if (!treasure.treasure_prompt) return; // \u30B3\u30D4\u30FC\u3059\u308B\u3079\u304D\u9B42\u304C\u306A\u3051\u308C\u3070\u3001\u4F55\u3082\u3057\u306A\u3044

                navigator.clipboard.writeText(treasure.treasure_prompt).then(() => {
                    copyButton.textContent = '\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\uFF01';
                    setTimeout(() => {
                        copyButton.textContent = '\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30B3\u30D4\u30FC';
                    }, 2000);
                });
            });
        });

        modalOverlay.classList.add('visible');
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('visible');
        }
    }

    // =============================================================
    // --- \u30AB\u30FC\u30C9\u751F\u6210\u306E\u5100\u5F0F ---
    // =============================================================
    function createCard(treasure) {
        const card = document.createElement('div');
        card.className = 'card treasure-card';
        card.dataset.title = treasure.title.toLowerCase();
        card.dataset.description = treasure.description.toLowerCase();
        card.innerHTML = \\\`<div class="card-link"><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg><h3 class="card-title">\\\${treasure.title}</h3><p class="card-description">\\\${treasure.description}</p><span class="card-cta mt-auto">\u5B9D\u3092\u958B\u3051\u308B &rarr;</span></div>\\\`;
        card.addEventListener('click', () => openModal(treasure));
        return card;
    }

    // =============================================================
    // --- \u5168\u3066\u306E\u6A5F\u80FD\u306E\u795E\u7D4C\u63A5\u7D9A\u3068\u521D\u671F\u5316 ---
    // =============================================================

    // --- \u30D3\u30E5\u30FC\u5207\u308A\u66FF\u3048 ---
    function switchView(viewName) {
        if (viewName === 'compass') {
            compassView.style.display = 'block';
            libraryView.style.display = 'none';
            compassToggle.classList.add('active');
            libraryToggle.classList.remove('active');
        } else {
            libraryView.style.display = 'block';
            compassView.style.display = 'none';
            libraryToggle.classList.add('active');
            compassToggle.classList.remove('active');
        }
    }
    compassToggle.addEventListener('click', () => switchView('compass'));
    libraryToggle.addEventListener('click', () => switchView('library'));

    // --- \u7F85\u91DD\u76E4\u306E\u30ED\u30B8\u30C3\u30AF ---
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const results = allTreasures.filter(t => t.category && t.category.includes(category));
            compassResults.innerHTML = '<h2 class="text-2xl font-bold mb-4">\u3042\u306A\u305F\u3078\u306E\u795E\u8A17</h2><div class="card-grid"></div>';
            const grid = compassResults.querySelector('.card-grid');
            results.forEach(treasure => {
                grid.appendChild(createCard(treasure));
            });
        });
    });
    
    // --- \u56F3\u66F8\u9928\u306E\u691C\u7D22\u6A5F\u80FD ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allCards = libraryGrid.querySelectorAll('.treasure-card');
        allCards.forEach(card => {
            const title = card.dataset.title;
            const description = card.dataset.description;
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });
    });

    // --- \u521D\u671F\u5316 ---
    allTreasures.forEach(treasure => {
        libraryGrid.appendChild(createCard(treasure));
    });
    switchView('library');
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});
<\/script> `])), maybeRenderHead(), addAttribute(JSON.stringify(formattedTreasures), "data-treasures")), "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" })}` })}`;
}, "C:/Users/USER/a1-body/src/pages/treasury/index.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/treasury/index.astro";
const $$url = "/treasury";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
