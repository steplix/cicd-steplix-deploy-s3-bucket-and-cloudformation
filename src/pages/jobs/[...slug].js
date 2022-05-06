import React from "react";
import Head from "next/head";
import { useTranslation } from "@/common/lib/i18n";
import JobItemCard from "@/common/components/JobItemCard";
import Flags from "@/common/components/Flags";
import { ActiveSearches } from "@/common/utils/ActiveSearches";

const Job = ({ params }) => {
    const [slug, lang] = params.slug;
    const { t } = useTranslation(lang);

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
                <div className="bg--job flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 2xl:space-y-20">
                    <JobItemCard item={t(`jobs.${slug}`)} />
                </div>
                <Flags />
            </div>
        </>
    );
};

export default Job;

export const getStaticPaths = async () => {
    return {
        paths: ActiveSearches(),
        fallback: false,
    };
};

export async function getStaticProps(context) {
    return {
        props: {
            params: context.params,
        },
    };
}
