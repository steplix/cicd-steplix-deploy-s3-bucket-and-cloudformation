import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
// import { usePortfolioTranslation } from '@/common/hooks/usePortfolioTranslation';
import PartnerCard from '@/common/components/PartnerCard';
import Title from '@/common/components/Title/Gradient';

const Clients = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);
  //   const { clients } = usePortfolioTranslation();

  return (
    <section className="container pt-[72px] pb-[50px] 2xl:pt-14 overflow-hidden space-y-8">
      <Title
        underlineFixed
        content={t('MainHeader.partners.title')}
        size="text-[26px] lg:text-[32px]"
      />
      {/* <ClientsCarousel adaptiveHeightValue={48} carouselClassName={'clientsCarousel'}>
        {clients.map((client) => (
          <div
            key={client.companyName}
            className={`keen-slider__slide number-slide flex justify-center items-center w-[279px] h-[158px]`}
          > */}
      <PartnerCard
        description="Cámara de la industria Argentina del Software."
        imageUrl="/assets/img/partners/cessi.svg"
        // imageAlt={`${client?.companyName} logo`}
      />
      {/* </div>
        ))}
      </ClientsCarousel> */}
    </section>
  );
};

export default Clients;
