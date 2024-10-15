# React Essentials

このプロジェクトは、Reactの基本概念を学ぶためのシンプルなアプリケーションです。以下の内容が含まれています。このプロジェクトは[React - The Complete Guide 2024 (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)のセクション3に基づいています。

## このひな形プロジェクトを通して学べること

このプロジェクトを通じて、以下のことを学ぶことができます。

- Reactの基本的なコンポーネントの作成方法
- TypeScriptを使用した型安全なReactアプリケーションの開発
- Viteを使用した高速な開発環境の構築
- ESLintを使用したコード品質の向上
- コンポーネントのスタイリングと再利用可能なコンポーネントの設計
- データの管理と表示方法
- 開発サーバーの起動とビルドプロセスの理解

これらのスキルは、Reactを使用したフロントエンド開発の基礎を築くのに役立ちます。

## プロジェクト構成

- `src/`: ソースコードディレクトリ
  - `App.tsx`: メインアプリケーションコンポーネント
  - `assets/`: 画像やその他のアセット
  - `components/`: 再利用可能なReactコンポーネント
    - `CoreConcept.tsx`: 基本概念を表示するコンポーネント
    - `Header/`: ヘッダーコンポーネント
      - `Header.css`: ヘッダーのスタイル
      - `Header.tsx`: ヘッダーの実装
    - `TabButton.tsx`: タブボタンコンポーネント
  - `data.tsx`: データ定義
  - `index.css`: グローバルスタイル
  - `main.tsx`: アプリケーションのエントリーポイント
  - `vite-env.d.ts`: Vite環境の型定義
- `public/`: 公開ディレクトリ
- `index.html`: アプリケーションのHTMLテンプレート
- `package.json`: プロジェクトの依存関係とスクリプト
- `tsconfig.json`: TypeScriptの設定
- `vite.config.ts`: Viteの設定

## 使用技術

- React: UIライブラリ
- TypeScript: 型安全なJavaScript
- Vite: フロントエンドビルドツール
- ESLint: コードリントツール

## スクリプト

- `dev`: 開発サーバーを起動します
- `build`: プロジェクトをビルドします
- `lint`: コードをリントします
- `preview`: ビルドされたプロジェクトをプレビューします

## セットアップと実行

1. リポジトリをクローンします。
2. 依存関係をインストールします: `npm install`
3. 開発サーバーを起動します: `npm run dev`

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
