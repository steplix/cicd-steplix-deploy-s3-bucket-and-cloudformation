import { useTranslation } from '@/common/lib/i18n';
import MainHeader from '@/modules/Home/MainHeader';
import Banner from '@/modules/Home/Banner';
import HowDoWeDoIt from '@/modules/Home/HowWeDoIt';
import Alliances from '@/modules/Home/Alliances';
import Clients from '@/modules/Home/Clients';
import Memberships from '@/modules/Home/Memberships';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import HeadTag from '@/common/components/HeadTag';

export default function Home() {
  const { t } = useTranslation();

  //TODO: CHECK IMAGE SCRIPT

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

        <div className="container block lg:flex">
          {/* Alliances Section */}
          <Alliances />

          {/* Memberships  Section */}
          <Memberships />
        </div>
      </TransitionWrapper>
    </>
  );
}
