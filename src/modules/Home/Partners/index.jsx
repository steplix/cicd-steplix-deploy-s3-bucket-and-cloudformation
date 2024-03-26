import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import PartnerCard from '@/common/components/PartnerCard';
import Title from '@/common/components/Title/Gradient';
import { PARTNERS_CARDS } from '@/common/utils/constants';

const Clients = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  return (
    <section className="w-full pb-[50px] sm:pl-0 2xl:pt-14 overflow-hidden space-y-8">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('MainHeader.partners.title')}
        size="text-[26px] lg:text-[32px]"
      />
      <div className="flex flex-col gap-6 sm:gap-4 xl:gap-6 px-2 sm:px-4 lg:px-0">
        {PARTNERS_CARDS.map(
          ({ imageAlt, imageUrl, description, customStyleDescription }, index) => (
            <PartnerCard
              key={index}
              customStyleDescription={customStyleDescription}
              description={description}
              imageAlt={imageAlt}
              imageUrl={imageUrl}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Clients;
