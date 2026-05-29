import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 成果物コレクション: src/content/works/ 配下の Markdown 1ファイル = 1成果物。
// 成果物の追加は、ここに .md を1件足すだけで一覧・詳細に自動反映されます。
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),          // 使用技術
    repo: z.string().url(),             // GitHub URL（必須）
    demo: z.string().url().optional(),  // デプロイ先（任意）
    thumbnail: z.string().optional(),   // 例: "/images/xxx.png"（public/images に配置）
    order: z.number().default(0),       // 一覧の表示順（小さいほど先頭）
  }),
});

export const collections = { works };
