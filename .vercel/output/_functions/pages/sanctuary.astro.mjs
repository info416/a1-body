import { e as createComponent, l as renderComponent, r as renderTemplate, n as Fragment, o as renderScript, m as maybeRenderHead } from '../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../renderers.mjs';

const $$Sanctuary = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u30B5\u30F3\u30AF\u30C1\u30E5\u30A2\u30EA" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="sanctuary-content"> <svg class="w-24 h-24 mx-auto mb-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path></svg> <h1>聖域への扉</h1> <p class="lead placeholder-text">【AIを調律するための情報と、仲間が集う場所です。私と、そしてみんなとともに、二歩先のAI活用へ。】</p> <a href="https://discord.gg/2GJN2Fad" class="btn btn-primary btn-lg placeholder-text" target="_blank">メンバー限定Discordへ参加する</a> <div class="mt-16 text-left max-w-2xl mx-auto"> <h3 class="font-bold text-lg mb-4">コミュニティ利用のルール</h3> <p class="text-sm text-gray-400 placeholder-text">ややこしいことは言いませんが、「相手への思いやり」「他の参加者たちへの配慮」「悪口や誹謗中傷禁止」「ギブ＆テイク」は必ず心がけてください。もしお守りいただけない場合、予告なくコミュニティが閲覧できなくなることがあります。あらかじめご了承ください。</p> </div> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderScript($$result3, "C:/Users/USER/a1-body/src/pages/sanctuary.astro?astro&type=script&index=0&lang.ts")} ` })}` })}`;
}, "C:/Users/USER/a1-body/src/pages/sanctuary.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/sanctuary.astro";
const $$url = "/sanctuary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Sanctuary,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
