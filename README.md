# Next.js/TypeScriptを使用して学ぶ基本的なCRUD操作

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

## DB準備
```
npm i prisma
npx prisma init --datasource-provider mysql
```

## schema設定したら以下コマンド実行して、workbench等で確認する
```
npx prisma migrate dev --name add product
```

## MUIのインストール
```
npm i @mui/material @emotion/react @emotion/styled 
npm i @mui/icons-material 
```