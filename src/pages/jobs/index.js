import React from "react";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import Flags from "@/common/components/Flags";

export default function Jobs() {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                {/* HTML Meta Tags */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/favicon.png" />
                <title>{t("metaTags.jobs.title")}</title>
                <meta
                    name="description"
                    content={t("metaTags.jobs.description")}
                />
                <meta name="keywords" content={t("metaTags.jobs.keywords")} />
                {/* Facebook Meta Tags */}
                <meta property="og:title" content={t("metaTags.jobs.title")} />
                <meta
                    property="og:description"
                    content={t("metaTags.jobs.description")}
                />
                <meta property="og:url" content="https://steplix.com/jobs/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="54" />
                <meta property="og:image:alt" content="Steplix Logo" />
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="steplix.com" />
                <meta
                    property="twitter:url"
                    content="https://steplix.com/jobs/"
                />
                <meta name="twitter:title" content={t("metaTags.jobs.title")} />
                <meta
                    name="twitter:description"
                    content={t("metaTags.jobs.description")}
                />
                <meta
                    name="twitter:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
            </Head>
            <div className="relative">
                <section className="bg--jobs relative">
                    <BecomeASteplixer />
                </section>
                <Flags />
            </div>
        </>
    );
}
