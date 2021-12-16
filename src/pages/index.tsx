import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>thehacksnack</title>
        <meta
          name="description"
          content="delivering byte-sized software engineering content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-end">
          <h1 className="text-5xl font-black tracking-tighter">thehacksnack</h1>
          <h2 className="font-medium">by Colby Thomas</h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
