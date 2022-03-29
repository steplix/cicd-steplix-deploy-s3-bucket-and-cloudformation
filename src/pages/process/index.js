import EverythingStartsWithAnIdea from "@/modules/EverythingStartsWithAnIdea";
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
        </div>
    );
}
