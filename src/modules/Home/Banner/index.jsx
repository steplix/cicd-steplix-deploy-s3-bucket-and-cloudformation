import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/pages/lib/i18n';
import Service from '@/common/components/Service';
import { SERVICES } from '@/common/utils/constants';

const Banner = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.lang);

  return (
    <div className="banner rounded-t-[20px] pt-12 2xl:pt-[69px] flex justify-center 2xl:container">
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
