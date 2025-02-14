# Bolt.DIY

DIYプロジェクトをサポートするWebアプリケーション

## 機能

- プロジェクトの計画と管理
- ステップごとの進捗管理
- コミュニティとの知識共有

## 技術スタック

- [Remix](https://remix.run/)
- [React](https://reactjs.org/)
- [UnoCSS](https://github.com/unocss/unocss)
- [TypeScript](https://www.typescriptlang.org/)

## 開発環境のセットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/mokemoke0821/bolt-diy.git
cd bolt-diy
```

2. 依存関係のインストール:
```bash
npm install
```

3. 環境変数の設定:
```bash
cp .env.example .env
# .envファイルを編集して必要な値を設定
```

4. 開発サーバーの起動:
```bash
npm run dev
```

アプリケーションは http://localhost:5174 で実行されます。

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルドの作成
- `npm run start` - プロダクションサーバーの起動
- `npm run clean` - ビルドファイルのクリーンアップ
- `npm run typecheck` - TypeScriptの型チェック

## ライセンス

MIT
