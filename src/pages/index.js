import StepsTop from "@/common/components/stepsTop";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steplix Front End Base</title>
                <meta name="description" content="Steplix Front End Base" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex items-center justify-center h-screen w-full bg-steplix-lilac">
                <StepsTop />
            </main>
        </div>
    );
}
