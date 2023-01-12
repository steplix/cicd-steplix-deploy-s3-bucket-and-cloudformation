import { useTranslation } from "next-export-i18n";
import MainHeader from "@/modules/MainHeader";
import OurPosts from "@/modules/OurPosts";
import Portfolio from "@/modules/Portfolio";
import HeadTag from "@/common/components/HeadTag";

export default function Home() {
    const { t } = useTranslation();

    //TODO: CHECK IMAGE SCRIPT

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
            <main className="flex flex-col">
                {/* MainHeader Section */}
                <MainHeader />

                {/* Portfolio Section */}
                <Portfolio />

                {/* Posts Section */}
                <OurPosts />
            </main>
        </>
    );
}
