import ContactUs from "@/modules/ContactUs";
import EverythingStartsWithAnIdea from "@/modules/EverythingStartsWithAnIdea";
import HoDoWeDoIt from "@/modules/HowDoWEDoIt";
import StepsToTheTop from "@/modules/StepsToTheTop";
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
