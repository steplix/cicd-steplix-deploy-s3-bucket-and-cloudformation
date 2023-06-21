import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import PartnerCard from '@/common/components/PartnerCard';
import Title from '@/common/components/Title/Gradient';
import { PARTNERS_CARDS } from '@/common/utils/constants';
import Carousel from '@/common/components/Carousel';

const Clients = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  // Duplicate Partners info array to show side cards in carousel
  const duplicatedpartners = [...PARTNERS_CARDS, ...PARTNERS_CARDS];

  return (
    <section className="container pt-[56px] pb-[50px] 2xl:pt-14 overflow-hidden space-y-8">
      <Title
        underlineFixed
        content={t('MainHeader.partners.title')}
        size="text-[26px] lg:text-[32px]"
      />
      <Carousel
        cardClassName="partners-card--active"
        carouselClassName="partnersCarousel h-[200px] sm:h-[240px]"
      >
        {duplicatedpartners.map(({ imageAlt, imageUrl, description }, index) => (
          <div key={index} className={`keen-slider__slide flex justify-center items-center`}>
            <PartnerCard description={description} imageAlt={imageAlt} imageUrl={imageUrl} />
          </div>
        ))}
      </Carousel>
      <div className="hidden sm:flex items-center justify-center space-x-4 ">
        {PARTNERS_CARDS.map(({ imageAlt, imageUrl, description }, index) => (
          <PartnerCard
            key={index}
            description={description}
            imageAlt={imageAlt}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
