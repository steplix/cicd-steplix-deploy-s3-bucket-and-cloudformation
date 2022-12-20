import { useTranslation } from "next-export-i18n";
import Masthead from "@/modules/Masthead";
import OurCulture from "@/modules/OurCulture";
import AboutUs from "@/modules/AboutUs";
import WhatWeDo from "@/modules/WhatWeDo";
import HappyClients from "@/modules/HappyClients";
import HeadTag from "@/common/components/HeadTag";
import PostCard from "@/common/components/PostCard";

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <HeadTag title={t("metaTags.home.title")} description={t("metaTags.home.description")} keywords={t("metaTags.home.keywords")}>
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
                }} />
            </HeadTag>
            <main className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 relative">
                {/* Masthead Section */}
                <Masthead />

                {/* About Us Section */}
                <AboutUs />

                {/* What We Do Section */}
                <WhatWeDo />

                {/* Our Culture Section */}
                <OurCulture />

                {/* Happy Clients Section */}
                <HappyClients />

                {/* Post example */}
                <div className="bg-gray-100 p-3 flex items-center justify-center w-screen h-screen">
                    <PostCard
                        publishingAt="3 de febrero de 2022"
                        description="Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum morbi at sem facilisi orci magna in sagittis, tortor ac maecenas eget etiam ullamcorper magna eu risus ipsum nec nibh lacus, suspendisse."
                        url="http://steplix.com"
                    />
                </div>

                {/* Steplix Flags */}
            </main>
        </>
    );
}
