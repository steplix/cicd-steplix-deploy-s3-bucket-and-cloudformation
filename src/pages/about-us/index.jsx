import CollageAboutUs from "@/common/components/CollageAboutUs";
import ContactUs from "@/modules/ContactUs";
import DigitalSherpas from "@/modules/about-us/DigitalSherpas";
import MissionVision from "@/modules/about-us/MissionVision";
import OurValues from "@/modules/about-us/OurValues";
import Philosophy from "@/modules/about-us/Philosophy";

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
            <div className="flex items-center justify-center">
                <CollageAboutUs lg />
            </div>
            <div className="flex items-center justify-center">
                <MissionVision />
            </div>
            <div className="flex items-center justify-center">
                <OurValues />
            </div>
            <div className="flex items-center justify-center">
                <CollageAboutUs sm />
            </div>
            <div className="flex items-center justify-center mt-20 ">
                <ContactUs />
            </div>
        </div>
    );
}
