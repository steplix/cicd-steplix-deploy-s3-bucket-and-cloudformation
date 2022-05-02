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

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
