import ContactUs from "@/modules/ContactUs";
import DigitalSherpas from "@/modules/DigitalSherpas";
import Philosophy from "@/modules/Philosophy";

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
            <div className="flex items-center justify-center">
                <DigitalSherpas />
            </div>
            <div className="flex items-center justify-center">
                <Philosophy />
            </div>
            <div className="container-steplix">
                <ContactUs />
            </div>
        </div>
    );
}
