import ContactUs from "@/modules/ContactUs";
import EverythingStartsWithAnIdea from "@/modules/process/EverythingStartsWithAnIdea";
import HoDoWeDoIt from "@/modules/process/HowDoWEDoIt";
import ScrumFramework from "@/modules/process/ScrumFramework";
import StepsToTheTop from "@/modules/process/StepsToTheTop";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex items-center section-steplix">
                <EverythingStartsWithAnIdea />
            </div>
            <div className="container-steplix section-steplix">
                <StepsToTheTop />
            </div>
            <div className="container-steplix section-steplix">
                <HoDoWeDoIt />
            </div>{" "}
            <div className="container-steplix section-steplix">
                <ScrumFramework />
            </div>
            <div className="container-steplix">
                <ContactUs />
            </div>
        </div>
    );
}
