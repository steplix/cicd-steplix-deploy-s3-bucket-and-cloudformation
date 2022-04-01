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
                <title>Sherpas Digitales | Steplix</title>
                <meta
                    name="description"
                    content="Somos los Sherpas Digitales y estamos aquí para co-crear el camino que llevará a tu negocio a la cima"
                />
                <meta
                    property="og:title"
                    content="Sherpas Digitales | Steplix"
                />
                <meta
                    property="og:description"
                    content="Somos los Sherpas Digitales y estamos aquí para co-crear el camino que llevará a tu negocio a la cima"
                />
                <meta property="og:url" content="https://steplix.com/" />
                <meta property="og:type" content="website" />
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
