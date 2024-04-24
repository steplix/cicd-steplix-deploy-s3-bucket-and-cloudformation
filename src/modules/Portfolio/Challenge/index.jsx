import { PropTypes } from 'prop-types';

import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';

export const ChanllengeSection = ({ locale, text, imageClassname }) => {
  const { t } = useTranslation(locale);

  return (
    <section className="flex flex-col gap-4 pt-8 pb-6" id="challenge">
      <Title
        underlineFixed
        borderPosition="bottom"
        content={t('portfolio.challenge')}
        size="text-[26px] lg:text-[32px]"
      />
      <p className="font-poppins text-[13px] lg:text-base text-text-black">{text}</p>
      <div className={`w-full h-[275px] ${imageClassname}`} />
    </section>
  );
};

ChanllengeSection.prototype = {
  locale: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageClassname: PropTypes.string.isRequired,
};
