# ポートフォリオ掲示用サイト

Astro + GitHub Pages（ユーザーサイト）で動作する、完全静的なポートフォリオ掲示サイトです。
成果物の追加は `src/content/works/` に Markdown を1件足すだけで、一覧・詳細に自動反映されます。

## セットアップ

```bash
npm install      # 依存関係のインストール（package-lock.json が生成されます）
npm run dev      # 開発サーバー（http://localhost:4321）
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果のローカル確認
```

## 設定済みの値

GitHub ユーザー名は **`k-portfolio`** に設定済みです（公開URL: `https://k-portfolio.github.io`）。
変更する場合は以下の2ファイルを揃えて書き換えます。

- `astro.config.mjs` … `site: 'https://k-portfolio.github.io'`
- `src/consts.ts` … `GITHUB_USERNAME = 'k-portfolio'`

プロフィール（ハンドル名・スキル）は `src/pages/index.astro` を編集してください。

## 成果物の追加方法

`src/content/works/` に `<slug>.md` を追加します（`<slug>` がそのまま URL `/works/<slug>/` になります）。

```markdown
---
title: "成果物のタイトル"
summary: "一覧カードに出る概要（1〜2文）"
tech: ["Go", "PostgreSQL", "Docker"]
repo: "https://github.com/<ユーザー名>/<repo>"   # 必須
demo: "https://example.com"                       # 任意
thumbnail: "/images/foo.png"                      # 任意（public/images に画像を配置）
order: 1                                           # 一覧の表示順（小さいほど先頭）
---

## 課題
...

## 工夫した点
...
```

画像は `public/images/` に置き、Markdown からは `/images/xxx.png` のようにルート相対で参照します。

## デプロイ（GitHub Pages）

1. リポジトリ名を `<ユーザー名>.github.io` で作成する。
2. リポジトリの **Settings → Pages** を開く。
3. Source（ソース）で **「GitHub Actions」** を選択して保存する。
4. このリポジトリ（`.github/workflows/deploy.yml` を含む）を `main` に push する。
   以降は push のたびに自動ビルド・公開されます。

> **注意:** `package-lock.json` は必ずコミットしてください（公式アクションがロックファイルから
> パッケージマネージャーを判定するため、未コミットだとビルドが不安定になります）。

## スコープ

- 完全静的（SSR・API ルート・DB・動的機能は持ちません）。
- 各成果物のソースコード本体は本サイトに含めず、GitHub リポジトリへのリンクのみを掲載します。
