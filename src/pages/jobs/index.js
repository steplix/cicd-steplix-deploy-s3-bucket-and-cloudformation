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
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:alt" content="Steplix Logo" />
            </Head>
            <div className="relative">
                <section className="container-steplix section-steplix">
                    <BecomeASteplixer />
                </section>
                <Flags />
            </div>
        </>
    );
}
