import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead, o as renderScript, h as addAttribute } from '../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../renderers.mjs';

const $$ShintakuNoMa = createComponent(async ($$result, $$props, $$slots) => {
  const SHINTAKU_CATEGORY_ID = 21;
  const response = await fetch(`https://ai-verve.net/snspack/wp-json/wp/v2/posts?categories=${SHINTAKU_CATEGORY_ID}&per_page=100&_fields=id,title,acf`);
  const shintakuPosts = await response.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u795E\u8A17\u306E\u9593" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-wrapper"> <h1>神託の間</h1> <p class="lead">帝国の叡智は、時を経て開示される。汝の成長と共に、新たな扉が開かれるだろう。</p> <div class="card-grid" id="oracle-grid"> ${shintakuPosts.map((post) => renderTemplate`<div class="card oracle-card locked"${addAttribute(post.acf.release_month, "data-release-month")}> <div class="card-header"> <span class="month-badge">第${post.acf.release_month}月</span> <h3 class="card-title">${post.title.rendered}</h3> </div> <div class="card-body"> <p class="card-description">${post.acf.summary || "\u6982\u8981\u306F\u3001\u6249\u304C\u958B\u304B\u308C\u305F\u3068\u304D\u306B\u660E\u3089\u304B\u306B\u306A\u308B\u2026"}</p> <span class="card-cta mt-auto">神託を拝受する &rarr;</span> </div> </div>`)} </div> </div> ${renderScript($$result2, "C:/Users/USER/a1-body/src/pages/shintaku_no_ma.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/USER/a1-body/src/pages/shintaku_no_ma.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/shintaku_no_ma.astro";
const $$url = "/shintaku_no_ma";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ShintakuNoMa,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
