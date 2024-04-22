import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import Service from '@/common/components/Service';
import { SERVICES } from '@/common/utils/constants';

const Banner = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  return (
    <div className="banner rounded-t-[20px] pt-12 2xl:pt-[69px] flex justify-center 2xl:container relative">
      <div className="h-[108px] w-[68.46px] absolute top-[-548px] sm:top-[-560px] lg:top-[-610px] xl:top-[-572px] right-[16px] sm:right-[68px] lg:right-[60px] xl:right-[76px]">
        <img
          alt={t('MainHeader.certifications.greatPlaceToWork.imageAlt')}
          height="100%"
          src={t('MainHeader.certifications.greatPlaceToWork.imageUrl')}
          width="100%"
        />
      </div>
      <div className="flex flex-col content-start gap-x-10 gap-y-10 lg:gap-y-12 items-center sm:flex-row sm:justify-center sm:flex-wrap w-full sm:w-[559px] lg:w-[896px] xl:w-[1120px] h-[1041px] sm:h-[633px] lg:h-[472px] 2xl:h-[491px]">
        {SERVICES.map((service) => {
          return (
            <Service
              key={service.name}
              description={t(service.description)}
              iconName={service.icon}
              name={t(service.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
