import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import { usePortfolioTranslation } from '@/common/hooks/usePortfolioTranslation';
import { clientsLogos } from '@/common/utils/constants';
import PortfolioCarousel from '@/common/components/PortfolioCarousel';
import TestimonialCard from '@/common/components/TestimonialCard';
import Title from '@/common/components/Title/Gradient';
import Icon from '@/common/components/Icon';
import ButtonRaise from '@/common/components/ButtonRaise';

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
        <div className="flex flex-wrap justify-center items-center gap-10 xl:gap-12">
          {clientsLogos.map((client) => {
            return <Icon key={client.image} className={client.class} name={client.image} />;
          })}
        </div>
      </div>
      <PortfolioCarousel adaptiveHeightValue={48} carouselClassName={'clientsCarousel'}>
        {clients.map((client) => (
          <div
            key={client.companyName}
            className={`keen-slider__slide number-slide flex justify-center items-center h-[420px] w-[300px]`}
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
      </PortfolioCarousel>
      <div className="flex justify-center">
        <ButtonRaise
          ariaLabel={t('navbar.item4.ariaLabel')}
          customStyles="h-[37px] py-2 !px-4 !text-custom-base"
          i18nKeyText={'ButtonProject'}
          locale={i18nQuery?.lang}
          pathname="/contact"
        />
      </div>
    </section>
  );
};

export default Clients;
