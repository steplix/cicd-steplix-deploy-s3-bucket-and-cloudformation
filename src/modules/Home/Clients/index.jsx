import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import { usePortfolioTranslation } from '@/common/hooks/usePortfolioTranslation';
import { clientsLogos } from '@/common/utils/constants';
import ClientsCarousel from '@/common/components/Carousel';
import TestimonialCard from '@/common/components/TestimonialCard';
import Title from '@/common/components/Title/Gradient';
import ButtonRaise from '@/common/components/ButtonRaise';
import TechnologiesSlider from '@/common/components/TechnologiesSlider';
import { repeatImageLogos } from '@/common/utils/methods';

const Clients = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);
  const { clients } = usePortfolioTranslation();

  return (
    <section className="container pt-[72px] 2xl:pt-14 overflow-hidden">
      <Title
        underlineFixed
        content={t('MainHeader.clients.title')}
        size="text-[26px] lg:text-[32px]"
      />
      <div className="section-container clients-list">
        <TechnologiesSlider images={repeatImageLogos(clientsLogos, 20)} />
      </div>
      <ClientsCarousel
        hasArrows
        adaptiveHeightValue={48}
        cardClassName="clients-card--active"
        carouselClassName={'clientsCarousel h-[420px] md:h-[295px] lg:h-[345px]'}
      >
        {clients.map((client) => (
          <div
            key={client.lastName}
            className={`keen-slider__slide flex justify-center items-center`}
          >
            <TestimonialCard
              clientCompany={client?.companyName}
              clientFirstName={client?.name}
              clientImageUrl={client?.image}
              clientLastName={client?.lastName}
              clientOpinion={client?.text}
              clientPosition={client?.title}
              imageAlt={`${client?.companyName} logo`}
              textColor={client.textColor}
            />
          </div>
        ))}
      </ClientsCarousel>
      <div className="flex justify-center">
        <ButtonRaise
          ariaLabel={t('navbar.item4.ariaLabel')}
          customStyles="h-[37px] py-2 mt-5 lg:mt-8 !px-4 !text-custom-base"
          i18nKeyText={'ButtonProject'}
          locale={i18nQuery?.lang}
          pathname="/contact"
        />
      </div>
    </section>
  );
};

export default Clients;
