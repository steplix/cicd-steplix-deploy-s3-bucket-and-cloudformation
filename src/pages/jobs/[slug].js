import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";
import JobItemCard from "@/common/components/JobItemCard";
import Flags from "@/common/components/Flags";
import { ActiveSearches } from "@/common/utils/ActiveSearches";

const Job = ({ params }) => {
    const { t } = useTranslation();
    const router = useRouter();
    let nameJob = router.query.slug;

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
                <meta
                    name="keywords"
                    content="steplix,
                    sherpas digitales,
                    developers,
                    developemnt,
                    software microstrategy,
                    software factory,
                    software factory usa,
                    software business analytics,
                    software full stack,
                    empresas de software factory,
                    software agile,
                    software developer,
                    software company,
                    desarrollo de software,
                    Design Thinking,
                    Marco Scrum,
                    Metodologías ágiles,
                    Lean,
                    Agile,
                    Product Design,
                    Develop and Deliver,
                    Digitalization of your business,
                    business digitalization,
                    Transformación digital,
                    Digital transformation,
                    Product building,
                    Software project,
                    Digitalization project,
                    Proyecto digital,
                    soluciones digitales,
                    Digital Business Ecosystem"
                />
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
                    <JobItemCard item={t(`jobs.${nameJob}`)} />
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
