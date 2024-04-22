import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import PartnerCard from '@/common/components/PartnerCard';
import Title from '@/common/components/Title/Gradient';
import { MEMBERSHIPS_CARDS } from '@/common/utils/constants';

const Memberships = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  return (
    <section className="w-full lg:w-2/3 pb-[50px] lg:pb-[72px] sm:pl-0">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('MainHeader.memberships.title')}
        size="text-[26px] lg:text-[32px]"
      />
      <div className="flex w-full flex-col sm:flex-row gap-6 mt-8">
        <PartnerCard
          cardHeight={MEMBERSHIPS_CARDS[0].cardHeight}
          imageAlt={t(MEMBERSHIPS_CARDS[0].imageAlt)}
          imageHeight={MEMBERSHIPS_CARDS[0].imageHeight}
          imageUrl={MEMBERSHIPS_CARDS[0].imageUrl}
        />
        <PartnerCard
          cardHeight={MEMBERSHIPS_CARDS[1].cardHeight}
          imageAlt={t(MEMBERSHIPS_CARDS[1].imageAlt)}
          imageHeight={MEMBERSHIPS_CARDS[1].imageHeight}
          imageUrl={MEMBERSHIPS_CARDS[1].imageUrl}
        />
      </div>
      <div className="w-full mt-6">
        <PartnerCard
          cardHeight={MEMBERSHIPS_CARDS[2].cardHeight}
          imageAlt={t(MEMBERSHIPS_CARDS[2].imageAlt)}
          imageHeight={MEMBERSHIPS_CARDS[2].imageHeight}
          imageUrl={MEMBERSHIPS_CARDS[2].imageUrl}
        />
      </div>
    </section>
  );
};

export default Memberships;
