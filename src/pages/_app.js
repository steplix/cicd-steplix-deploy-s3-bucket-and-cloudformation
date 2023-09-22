import React from 'react';
import Script from 'next/script';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '../styles/globals.css';
import 'keen-slider/keen-slider.min.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useLanguageQuery } from 'next-export-i18n';

import Layout from '@/layouts/Layout';

function MyApp({ Component, pageProps }) {
  const {
    asPath,
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    document.documentElement.lang = i18nQuery?.lang;
  }, [i18nQuery?.lang]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KSEN00ZW49"
        strategy="lazyOnload"
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

      <Script id="adWords" strategy="lazyOnload">
        {`
                    gtag('event', 'conversion', {'send_to': 'AW-10880705347/OdMNCKmky9QDEMPGqcQo'});
                `}
      </Script>
      <Script id="linkedIn" strategy="lazyOnload" type="text/javascript">
        {`_linkedin_partner_id = "4555345";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
      </Script>
      <Script id="linkedIn" strategy="lazyOnload" type="text/javascript">
        {`(function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);`}
      </Script>
      <noscript>
        <img
          alt=""
          height="1"
          src="https://px.ads.linkedin.com/collect/?pid=4555345&fmt=gif"
          style={{ display: 'none' }}
          width="1"
        />
      </noscript>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={asPath} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
