import ContactUs from "@/modules/ContactUs";
import EverythingStartsWithAnIdea from "@/modules/process/EverythingStartsWithAnIdea";
import HoDoWeDoIt from "@/modules/process/HowDoWEDoIt";
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
            <div className="flex items-center justify-center">
                <EverythingStartsWithAnIdea />
            </div>
            <div className="container-steplix">
                <StepsToTheTop />
            </div>
            <div className="container-steplix">
                <HoDoWeDoIt />
            </div>
            <div className="container-steplix">
                <ContactUs />
            </div>
        </div>
    );
}
