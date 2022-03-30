import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import ContactUs from "@/modules/ContactUs";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import Head from "next/head";

export default function Home() {
    const { texts } = useContext(LanguageContext);

    return (
        <div>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-center">
                <BecomeASteplixer />
            </div>
            <div className="flex items-center justify-center mb-10">
                <ContactUs
                    title={texts.jobs.contactJobs.title}
                    description={texts.jobs.contactJobs.description}
                    cv
                />
            </div>
        </div>
    );
}
