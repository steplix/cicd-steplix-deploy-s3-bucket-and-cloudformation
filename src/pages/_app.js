import Script from "next/script";
import "@fontsource/poppins";
import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";
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
                    gtag('config', 'AW-10880705347');
                `}
            </Script>
      
            <Script id='adWords' strategy="lazyOnload">
                {`
                   gtag('event', 'conversion', {'send_to': 'AW-10880705347/OdMNCKmky9QDEMPGqcQo'});
                `}
            </Script>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
