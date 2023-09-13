import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import Title from '@/common/components/Title/Gradient';

const Certifications = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  return (
    <section className="w-full pb-[50px] sm:pr-0 2xl:pt-14 overflow-hidden space-y-8">
      <Title
        underlineFixed
        content={t('MainHeader.certifications.title')}
        size="text-[26px] lg:text-[32px]"
      />
      <div className="flex sm:flex-col lg:flex-row gap-4 xl:gap-12 sm:px-4 lg:px-0">
        <div className="bg-white p-4 xl:px-8 xl:py-6 rounded-[1.25rem] h-[10.25rem] lg:h-60 lg:flex lg:items-center">
          <img
            alt={t('certifications.greatPlaceToWork.imageAlt')}
            className="h-[8.08rem] sm:h-[8.76rem] lg:h-[10.5rem] xl:h-[11.57rem]"
            src={t('certifications.greatPlaceToWork.imageUrl')}
          />
        </div>
        <div className="bg-white p-4 xl:px-8 xl:py-6 rounded-[1.25rem] h-[10.25rem] lg:h-60 lg:flex lg:items-center">
          <div className="flex items-start gap-[1.22rem] lg:gap-[1.64rem] xl:gap-8">
            <img
              alt={t('certifications.iram.imageAlt')}
              className="lg:h-[11rem] xl:lg:h-[11.69rem]"
              src={t('certifications.iram.imageUrl')}
            />
            <img
              alt={t('certifications.iqnet.imageAlt')}
              className="pt-[0.92rem] pb-[0.99rem] lg:w-[6.15rem] xl:w-[6.76rem]"
              src={t('certifications.iqnet.imageUrl')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
