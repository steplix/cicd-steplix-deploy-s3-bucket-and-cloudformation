import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import Masthead from "@/modules/Masthead";
import OurCulture from "@/modules/OurCulture";
import AboutUs from "@/modules/AboutUs";
import WhatWeDo from "@/modules/WhatWeDo";
import HappyClients from "@/modules/HappyClients";
import Flags from "@/common/components/Flags";

export default function Home() {
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
                <title>{t("metaTags.home.title")}</title>
                <meta
                    name="description"
                    content={t("metaTags.home.description")}
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
                <meta property="og:title" content={t("metaTags.home.title")} />
                <meta
                    property="og:description"
                    content={t("metaTags.home.description")}
                />
                <meta property="og:url" content="https://steplix.com/" />
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
                <meta property="twitter:url" content="https://steplix.com/" />
                <meta name="twitter:title" content={t("metaTags.home.title")} />
                <meta
                    name="twitter:description"
                    content={t("metaTags.home.description")}
                />
                <meta
                    name="twitter:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            image: [
                                "https://steplix.com/assets/img/logo.png",
                                "https://example.com/assets/img/culture/culture-01.png",
                                "https://example.com/assets/img/culture/culture-02.png",
                                "https://example.com/assets/img/culture/culture-03.png",
                            ],
                            name: "Steplix Software",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Costa Rica 4999",
                                addressLocality: "Buenos Aires",
                                addressRegion: "BA",
                                postalCode: "1414",
                                addressCountry: "AR",
                            },
                            review: {
                                "@type": "Review",
                                reviewRating: {
                                    "@type": "Rating",
                                    ratingValue: "4",
                                    bestRating: "5",
                                },
                                author: {
                                    "@type": "Person",
                                    name: "Mariano Wegier",
                                },
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: -34.586106539777504,
                                longitude: -58.429850625945534,
                            },
                            url: "https://steplix.com/",
                            telephone: "+5491144177969",
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                    ],
                                    opens: "09:00",
                                    closes: "18:00",
                                },
                            ],
                        }),
                    }}
                />
            </Head>
            <main className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 2xl:space-y-20 relative">
                <Masthead />
                <AboutUs />
                <WhatWeDo />
                <OurCulture />
                <HappyClients />
                <Flags />
            </main>
        </>
    );
}
