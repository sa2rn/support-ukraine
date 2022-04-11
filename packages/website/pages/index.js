import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => import('support-ukraine-banner'), []);

  return (
    <div className="container">
      <Head>
        <title>Support Ukraine banner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Demo of support-ukraine-banner
        </h1>
        <support-ukraine></support-ukraine>
      </main>
    </div>
  );
}
