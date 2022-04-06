import Flags from "@/common/components/Flags";
import Head from "next/head";

export default function Contact() {
    return (
        <div className="relative">
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex items-center justify-center">contacto</div>
            <Flags />
        </div>
    );
}
