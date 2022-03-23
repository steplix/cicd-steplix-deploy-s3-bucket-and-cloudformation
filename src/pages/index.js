import Head from "next/head";
import React from "react";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steplix Front End Base</title>
                <meta name="description" content="Steplix Front End Base" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex items-center justify-center h-screen w-full">
                <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Steplix Front End Base
                </h1>
            </main>
        </div>
    );
}
