import Script from "next/script";
import "../styles/globals.css";
import Layout from "@/layouts/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src="https://www.googletagmanager.com/gtag/js?id=G-KSEN00ZW49"
            />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KSEN00ZW49', {
                    page_path: window.location.pathname,
                });
                    `}
            </Script>

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

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
