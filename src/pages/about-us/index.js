import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import {
    DigitalSherpas,
    MissionVision,
    OurValues,
    Philosophy,
} from "@/modules/about-us";
import CollageAboutUs from "@/common/components/CollageAboutUs";
import Flags from "@/common/components/Flags";

export default function AboutUs() {
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
                <title>{t("metaTags.aboutUs.title")}</title>
                <meta
                    name="description"
                    content={t("metaTags.aboutUs.description")}
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
                <meta
                    property="og:title"
                    content={t("metaTags.aboutUs.title")}
                />
                <meta
                    property="og:description"
                    content={t("metaTags.aboutUs.description")}
                />
                <meta
                    property="og:url"
                    content="https://steplix.com/about-us/"
                />
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
            <div className="flex flex-col gap-10 xl:gap-20 relative pt-32 xl:pt-44 pb-12 xl:pb-40">
                <DigitalSherpas />
                <Philosophy />
                <MissionVision />
                <OurValues />
                <CollageAboutUs sm />
                <Flags />
            </div>
        </>
    );
}
