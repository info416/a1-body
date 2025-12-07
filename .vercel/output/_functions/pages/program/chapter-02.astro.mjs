import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead, o as renderScript } from '../../chunks/astro/server_bBGIRxX7.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZFEmLUr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Chapter02 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u7B2C\u4E8C\u7AE0 - \u81EA\u5DF1\u9032\u5316\u30D7\u30ED\u30B0\u30E9\u30E0" }, { "default": ($$result2) => renderTemplate` <style>
    .sacred-iframe-container {
        position: relative;
        width: 100%;
        height: 70vh; /* 画面の高さの70%。ここは調整可能 */
        border: 1px solid var(--color-border);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 3rem;
    }
    .sacred-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style> ${maybeRenderHead()}<div class="program-content"> <h1>第二章：思考の調律</h1> <p class="text-xl text-gray-400 mb-8 placeholder-text">行動を妨げる「心理的ブレーキ」を破壊し、目標達成のための思考様式をAIにインストールする。</p> <nav class="program-tabs"> <a href="chapter-00" class="tab-link">序章</a> <a href="chapter-zero" class="tab-link">第零章</a> <a href="chapter-01" class="tab-link">第一章</a> <a href="chapter-02" class="tab-link active">第二章</a> <a href="chapter-03" class="tab-link">第三章</a> <a href="chapter-04" class="tab-link">第四章</a> <a href="cockpit" class="tab-link">次のステージへ</a> </nav> <div class="default-view"> <div class="part-a mb-12"> <h2 class="text-2xl font-bold mb-4">パートA：物語コンテンツ</h2> <div class="sacred-iframe-container"> <iframe src="https://ai-verve.net/first/prog/02/a.html" class="sacred-iframe" title="聖典：第一章Aパート">
                        </iframe> </div></div> <div class="part-b"> <h2 class="text-2xl font-bold mb-4">パートB：実践コンテンツ</h2> <div class="sacred-iframe-container"> <iframe src="https://ai-verve.net/first/prog/02/b.html" class="sacred-iframe" title="聖典：第一章Aパート">
                        </iframe> </div> <div class="html-manual"> <h3 class="text-xl font-bold mb-4">実践の手引き：思考の言語化</h3> <div class="sacred-iframe-container"> <iframe src="https://ai-verve.net/first/prog/02/c.html" class="sacred-iframe" title="聖典：第一章Aパート">
                        </iframe> </div> <!-- <div class="accordion-container">
                        <button class="accordion-toggle"><span>別フォーマットで学習する</span><span class="icon">+</span></button>
                        <div class="accordion-panel"><div class="download-link-item"><span class="icon">🎧</span> <a href="#" download>音声ファイル（MP3）</a></div><div class="download-link-item"><span class="icon">🖨️</span> <a href="#" download>印刷用マニュアル（PDF）</a></div></div>
                    </div>--> <div class="flex justify-between mt-8"> <a href="chapter-01" class="btn">&larr; 第一章へ戻る</a> <a href="chapter-03" class="btn btn-primary">第三章へ進む &rarr;</a> </div> </div> <div id="reading-modal-overlay" class="reading-modal-overlay"> <div class="reading-modal-container"><div class="reading-modal-header"><h2 id="reading-modal-title" class="reading-modal-title">実践の手引き：思考の言語化</h2><button id="reading-modal-close" class="reading-modal-close">&times;</button></div><div id="reading-modal-content" class="reading-modal-content"><p class="placeholder-text">【WP: HTMLテキスト_第二章_全文】なぜ、多くの人が「行動できない」のか。 その心理的メカニズムを解説し、複雑な問題を具体的な行動計画に落とし込むための、シンプルな問題解決フレームワークを伝授します。 この学びを元に、『調律師のコンソール』で「行動ブレーキ破壊AI」を起動し、あなたの思考パターンをAIへとインストールしましょう。 これにより、AIはあなたに代わって問題を分析し、実行可能なステップを提示する、強力な思考パートナーとなります。</p><br><a href="../console.html" target="_blank" class="btn btn-primary mt-4">コンソールで「思考」を起草する</a></div></div> </div> ${renderScript($$result2, "C:/Users/USER/a1-body/src/pages/program/chapter-02.astro?astro&type=script&index=0&lang.ts")} </div></div></div>` })}`;
}, "C:/Users/USER/a1-body/src/pages/program/chapter-02.astro", void 0);

const $$file = "C:/Users/USER/a1-body/src/pages/program/chapter-02.astro";
const $$url = "/program/chapter-02";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Chapter02,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
