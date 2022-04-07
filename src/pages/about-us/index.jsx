import Head from "next/head";
import {
    DigitalSherpas,
    MissionVision,
    OurValues,
    Philosophy,
} from "@/modules/about-us";
import CollageAboutUs from "@/common/components/CollageAboutUs";
import Flags from "@/common/components/Flags";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex flex-col gap-10 xl:gap-20 relative pt-32 xl:pt-44 pb-12 xl:pb-40">
                <DigitalSherpas />
                <Philosophy />
                <MissionVision />
                <OurValues />
                <CollageAboutUs sm />
                <Flags />
            </div>
        </>
    );
}
