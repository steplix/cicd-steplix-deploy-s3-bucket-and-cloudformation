import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import Flags from "@/common/components/Flags";
import EverythingStartsWithAnIdea from "@/modules/process/EverythingStartsWithAnIdea";
import HoDoWeDoIt from "@/modules/process/HowDoWEDoIt";
import ScrumFramework from "@/modules/process/ScrumFramework";
import StepsToTheTop from "@/modules/process/StepsToTheTop";

export default function Process() {
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
                <title>{t("metaTags.process.title")}</title>
                <meta
                    name="description"
                    content={t("metaTags.process.description")}
                />
                <meta
                    name="keywords"
                    content={t("metaTags.process.keywords")}
                />
                {/* Facebook Meta Tags */}
                <meta
                    property="og:title"
                    content={t("metaTags.process.title")}
                />
                <meta
                    property="og:description"
                    content={t("metaTags.process.description")}
                />
                <meta
                    property="og:url"
                    content="https://steplix.com/process/"
                />
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
                    content="https://steplix.com/process/"
                />
                <meta
                    name="twitter:title"
                    content={t("metaTags.process.title")}
                />
                <meta
                    name="twitter:description"
                    content={t("metaTags.process.description")}
                />
                <meta
                    name="twitter:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
            </Head>
            <div className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 relative">
                <EverythingStartsWithAnIdea />
                <StepsToTheTop />
                <HoDoWeDoIt />
                <ScrumFramework data={t("process.scrumFramework")} />
                <Flags />
            </div>
        </>
    );
}
