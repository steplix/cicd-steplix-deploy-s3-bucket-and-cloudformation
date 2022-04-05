import React, { useContext } from "react";
import ContactUs from "@/modules/ContactUs";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import Flags from "@/common/components/Flags";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="relative">
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <section className="container-steplix section-steplix">
                <BecomeASteplixer />
            </section>
            <section className="container-steplix">
                <ContactUs
                    title={t("jobs.contactJobs.title")}
                    description={t("jobs.contactJobs.description")}
                    cv
                />
            </section>
            <Flags />
        </div>
    );
}
