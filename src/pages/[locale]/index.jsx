import { useEffect } from 'react';
import { useRouter } from 'next/router';

import MainHeader from '@/modules/Home/MainHeader';
import Banner from '@/modules/Home/Banner';
import HowDoWeDoIt from '@/modules/Home/HowWeDoIt';
import Certifications from '@/modules/Home/Certifications';
import Clients from '@/modules/Home/Clients';
import HeadTag from '@/common/components/HeadTag';
import Partners from '@/modules/Home/Partners';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { useTranslation } from '@/common/lib/i18n';
import { getPathSlugs } from '@/common/utils/getPathSlugs';

export default function Home({ locale }) {
  const { t } = useTranslation(locale);
  const router = useRouter();

  useEffect(() => {
    router.replace({ pathname: '/', query: { lang: locale } }, '/', {
      shallow: true,
    });
  }, [router, locale]);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.home.title'),
          description: t('metaTags.home.description'),
          keywords: t('metaTags.home.keywords'),
        }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Steplix Software',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Costa Rica 4999',
                addressLocality: 'Buenos Aires',
                addressRegion: 'BA',
                postalCode: '1414',
                addressCountry: 'AR',
              },
              review: {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '4',
                  bestRating: '5',
                },
                author: {
                  '@type': 'Person',
                  name: 'Mariano Wegier',
                },
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -34.586106539777504,
                longitude: -58.429850625945534,
              },
              url: 'https://steplix.com/',
              telephone: '+5491144177969',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
            }),
          }}
          type="application/ld+json"
        />
      </HeadTag>
      <TransitionWrapper className="flex flex-col">
        {/* MainHeader Section */}
        <MainHeader />

        {/* Banner Section */}
        <Banner />

        {/* Clients Section */}
        <Clients />

        {/* Technology Section */}
        <HowDoWeDoIt />

        <div className="container block sm:flex lg:gap-14 xl:gap-[4.5rem]">
          {/* Certifications Section */}
          <Certifications />

          {/* Partners  Section */}
          <Partners />
        </div>
      </TransitionWrapper>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();

  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
