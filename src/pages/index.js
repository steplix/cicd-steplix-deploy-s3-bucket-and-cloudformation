import Masthead from "@/modules/Masthead";
import OurCulture from "@/modules/OurCulture";
import AboutUs from "@/modules/AboutUs";
import WhatWeDo from "@/modules/WhatWeDo";
import Head from "next/head";
import HappyClients from "@/modules/HappyClients";
import ContactIndex from "@/modules/ContactUs";
import Flags from "@/common/components/Flags";

export default function Home() {
    return (
        <main className="relative">
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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Masthead />
            <section className="container-steplix">
                <AboutUs />
            </section>
            <section className="container-steplix">
                <WhatWeDo />
            </section>
            <section className="container-steplix">
                <OurCulture />
            </section>
            <section className="container-steplix">
                <HappyClients />
            </section>
            <section className="container-steplix">
                <ContactIndex />
            </section>
            <Flags />
        </main>
    );
}
