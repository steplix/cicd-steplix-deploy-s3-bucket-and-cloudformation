import Masthead from "@/layouts/Masthead";
import OurCulture from "@/layouts/OurCulture";
import AboutUs from "@/modules/AboutUs";
import WhatWeDo from "@/modules/WhatWeDo";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen w-full bg-steplix-lilac">
                <Masthead />
                <div className="flex items-center justify-center my-36">
                    <AboutUs />
                </div>
                <div className="flex items-center justify-center my-36">
                    <WhatWeDo />
                </div>
                <div className="flex items-center justify-center my-36">
                    <OurCulture />
                </div>
            </main>
        </div>
    );
}
