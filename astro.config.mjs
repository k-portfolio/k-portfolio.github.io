import { defineConfig } from 'astro/config';

// GitHub Pages（ユーザーサイト）の公開URL。
// ユーザー名 "k-portfolio" → https://k-portfolio.github.io
// ※ src/consts.ts の GITHUB_USERNAME と揃えること。
export default defineConfig({
  site: 'https://k-portfolio.github.io',
});
