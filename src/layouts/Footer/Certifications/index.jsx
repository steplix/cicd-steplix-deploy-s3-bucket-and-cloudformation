import { useLanguageQuery } from 'next-export-i18n';

import { useTranslation } from '@/common/lib/i18n';
import Icon from '@/common/components/Icon';

const Certifications = ({ locale }) => {
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className="flex justify-between sm:gap-8 sm:items-end lg:items-center">
      <div className="flex justify-center sm:justify-end gap-2">
        <Icon className="h-[108px] w-[60px]" name="iram" />
        <Icon className="h-[85px] w-[61px]" name="inet" />
      </div>
      <img
        alt={t('certifications.greatPlaceToWork.imageAlt')}
        className="h-[5.93rem] sm:h-[6.04rem] lg:h-[6.44rem]"
        src={t('certifications.greatPlaceToWork.imageUrl')}
      />
    </div>
  );
};

export default Certifications;
