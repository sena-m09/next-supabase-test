This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## クイックスタート

### Supabase

Supabase は Docker コンテナを使ってローカルの開発スタックを管理します。  
Docker Desktop のインストールと設定は公式ガイドに従ってください。

1. `npx supabase init` を実行します。
2. `npx supabase start` を実行します。
3. `.env.local.sample` を参考に `.emv.local` ファイルを作成します。
4. `npx supabase start` 実行後にターミナルに表示された、`API URL` を `NEXT_PUBLIC_SUPABASE_URL` に、`anon key` を `NEXT_PUBLIC_SUPABASE_ANON_KEY` にコピーします。

停止する時は、`npx supabase stop`を実行します。

### Next.js

1. `npm install` を実行します。
2. `npm run dev` を実行します。
3. `http://localhost:3000/` でサイトを確認できます。

停止する時は、`Ctrl + C`を実行します。

## 参考リンク

- [Supabase Docs](https://supabase.com/docs)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
