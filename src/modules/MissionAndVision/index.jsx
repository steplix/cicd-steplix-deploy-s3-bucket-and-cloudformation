import PropTypes from 'prop-types';

import { useTranslation } from '@/common/lib/i18n';
import Title from '@/common/components/Title/Gradient';
import VisionIcon from '@/common/components/Icon/icons/VisionIcon';
import MisionIcon from '@/common/components/Icon/icons/MisionIcon';
import { LOCALE_SLUGS } from '@/common/utils/constants';

const MissionAndVision = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <section className="w-full flex flex-col lg:flex-row lg:space-x-8 items-center space-y-8 lg:space-y-0">
      <div className="flex flex-col space-y-4">
        <div className="flex gap-4 items-center">
          <Title
            borderPosition="left"
            content={t('about_us.mission.title')}
            height="h-[32px]"
            size="text-[26px] lg:text-[32px]"
            type="h1"
          />
          <MisionIcon />
        </div>
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
          {t('about_us.mission.description')}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex gap-4 items-center">
          <Title
            borderPosition="left"
            content={t('about_us.vision.title')}
            height="h-[32px]"
            size="text-[26px] lg:text-[32px]"
          />
          {/* <Icon name="vision" className="w-6 h-6" /> */}
          <VisionIcon />
        </div>
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
          {t('about_us.vision.description')}
        </p>
      </div>
    </section>
  );
};

MissionAndVision.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default MissionAndVision;
