import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import Flags from "@/common/components/Flags";
import ScheduleContact from "@/modules/ScheduleContact";

export default function Contact() {
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
                <title>{t("metaTags.contact.title")}</title>
                <meta
                    name="description"
                    content={t("metaTags.contact.description")}
                />
                <meta
                    name="keywords"
                    content={t("metaTags.contact.keywords")}
                />
                {/* Facebook Meta Tags */}
                <meta
                    property="og:title"
                    content={t("metaTags.contact.title")}
                />
                <meta
                    property="og:description"
                    content={t("metaTags.contact.description")}
                />
                <meta
                    property="og:url"
                    content="https://steplix.com/contact/"
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
                    content="https://steplix.com/contact/"
                />
                <meta
                    name="twitter:title"
                    content={t("metaTags.contact.title")}
                />
                <meta
                    name="twitter:description"
                    content={t("metaTags.contact.description")}
                />
                <meta
                    name="twitter:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
            </Head>
            <div className="relative bg--contact">
                <section className="container px-5 md:px-0 pt-28 pb-10 md:pb-24 xl:pb-20">
                    <ScheduleContact />
                </section>
                <Flags />
            </div>
            <Script id="linkedin-tag" strategy="lazyOnload">
                {`
                    _linkedin_partner_id = "4555345";
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                `}
            </Script>

            <Script id="linkedin-tag-lintrk" strategy="lazyOnload">
                {`
                (function(l) {
                    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                    window.lintrk.q=[]}
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);})(window.lintrk);
                `}
            </Script>
            <Image height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=4555345&fmt=gif" />
        </>
    );
}
