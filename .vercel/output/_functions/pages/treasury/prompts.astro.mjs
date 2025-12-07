import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Prompts = createComponent(async ($$result, $$props, $$slots) => {
  const CATEGORY_ID = 30;
  const response = await fetch(`https://ai-verve.net/snspack/wp-json/wp/v2/posts?categories=${CATEGORY_ID}&per_page=100&_fields=id,title,acf`);
  const posts = await response.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u30D7\u30ED\u30F3\u30D7\u30C8\u306E\u6B66\u5668\u5EAB - \u53E1\u667A\u306E\u5B9D\u7269\u5EAB" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-wrapper"> <h1 class="page-title mb-2">プロンプトの武器庫</h1> <p class="text-xl text-gray-400 mb-12">ここは、特に過去ご要望をいただいたケースが多いプロンプトを提供する場所です。</p> ${posts.length === 0 && renderTemplate`<p>現在、この書庫に収められた宝物はまだありません。新たな叡智が届くのをお待ちください。</p>`} <div class="card-grid"> ${posts.map((post) => renderTemplate`<div class="card">  <a href="#" class="card-link"> <h2 class="card-title">${post.title.rendered}</h2> ${post.acf.treasure_description && renderTemplate`<p class="card-description">${post.acf.treasure_description}</p>`} <span class="card-cta">続きを読む &rarr;</span> </a> </div>`)} </div> </div> ` })}`;
}, "C:/Users/USER/a1-body/src/pages/treasury/prompts.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/treasury/prompts.astro";
const $$url = "/treasury/prompts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Prompts,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
