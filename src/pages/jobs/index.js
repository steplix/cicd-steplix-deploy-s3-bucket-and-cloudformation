import React, { useContext } from "react";
import ContactUs from "@/modules/ContactUs";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex items-center justify-center">
                <BecomeASteplixer />
            </div>
            <div className="flex items-center justify-center mb-10">
                <ContactUs
                    title={t("jobs.contactJobs.title")}
                    description={t("jobs.contactJobs.description")}
                    cv
                />
            </div>
        </div>
    );
}
