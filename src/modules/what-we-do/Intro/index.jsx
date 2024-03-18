import PropTypes from 'prop-types';

import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from '@/pages/lib/i18n';
import { useResponsive } from '@/common/hooks/useResponsive';
import Title from '@/common/components/Title/Gradient';

const Intro = ({ locale }) => {
  const { t } = useTranslation(locale);
  const { width } = useResponsive();
  const TITLE_BREAKPOINT_WIDTH = 640;

  return (
    <section className="w-full">
      {width < TITLE_BREAKPOINT_WIDTH ? (
        <Title
          borderPosition="left"
          content={t('what_we_do.stepsToTheTop.titleOne')}
          height="h-[80px]"
          secondContent={t('what_we_do.stepsToTheTop.titleTwo')}
          size="text-[32px]"
        />
      ) : (
        <Title
          borderPosition="left"
          content={t('what_we_do.stepsToTheTop.fullTitle')}
          height="h-[40px]"
          size="text-[32px]"
          type="h1"
        />
      )}
      <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black mt-6 w-full max-w-[328px] sm:max-w-[558px] lg:max-w-none">
        <strong>{t('what_we_do.intro.descriptionOne')}</strong>
        {t('what_we_do.intro.descriptionTwo')}
      </p>
      <div className="mt-6 lg:flex lg:gap-1">
        <p className="font-poppins text-custom-base font-normal text-black">
          {t('what_we_do.stepsToTheTop.descriptionOne')}
        </p>
        <p className="font-poppins text-custom-base font-normal text-black">
          {t('what_we_do.stepsToTheTop.descriptionTwo')}
        </p>
      </div>
    </section>
  );
};

Intro.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default Intro;
