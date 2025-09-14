import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless"; // Vercelの神官を召喚

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // ← 生命の創造を許可する、神聖な勅令
  adapter: vercel()   // ← Vercelの神官に、正しく生命を扱うよう指示
});