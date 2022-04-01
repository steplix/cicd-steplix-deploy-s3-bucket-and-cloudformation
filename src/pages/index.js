import Masthead from "@/modules/Masthead";
import OurCulture from "@/modules/OurCulture";
import AboutUs from "@/modules/AboutUs";
import WhatWeDo from "@/modules/WhatWeDo";
import Head from "next/head";
import HappyClients from "@/modules/HappyClients";
import ContactIndex from "@/modules/ContactUs";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Masthead />
            <div className="container-steplix">
                <AboutUs />
            </div>
            <div className="container-steplix">
                <WhatWeDo />
            </div>
            <div className="container-steplix">
                <OurCulture />
            </div>
            <div className="container-steplix">
                <HappyClients />
            </div>
            <div className="container-steplix">
                <ContactIndex />
            </div>
        </div>
    );
}
