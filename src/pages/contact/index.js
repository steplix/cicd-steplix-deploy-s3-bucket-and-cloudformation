/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import { useTranslation } from "next-export-i18n";
import Flags from "@/common/components/Flags";
import ScheduleContact from "@/modules/ScheduleContact";
import HeadTag from "@/common/components/HeadTag";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <HeadTag title={t("metaTags.contact.title")} description={t("metaTags.contact.description")} keywords={t("metaTags.contact.keywords")} />
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
            <img height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=4555345&fmt=gif" />
        </>
    );
}
