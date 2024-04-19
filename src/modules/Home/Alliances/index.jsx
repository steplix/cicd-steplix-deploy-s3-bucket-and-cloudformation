import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import Title from '@/common/components/Title/Gradient';
import PartnerCard from '@/common/components/PartnerCard';

const Alliances = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  return (
    <section className="w-full lg:w-1/3 pb-[50px] sm:pr-0 2xl:pt-14 overflow-hidden space-y-8 mr-10">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('MainHeader.alliances.title')}
        size="text-[26px] lg:text-[32px]"
      />
      <PartnerCard
        cardHeight="h-[148px] lg:h-[270px]"
        imageAlt={t('alliances.aws.imageAlt')}
        imageHeight="h-[100px]"
        imageUrl={t('alliances.aws.imageUrl')}
      />
    </section>
  );
};

export default Alliances;
