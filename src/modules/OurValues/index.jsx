import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import FlipCard from '@/common/components/FlipCard';
import Title from '@/common/components/Title/Gradient';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from '@/common/lib/i18n';
import { stagger } from '@/common/lib/animation';
import ButtonBecomeSteplixer from '@/common/components/ButtonRaise';
import { ValuesIcon } from '@/common/components/Icon/icons';

const OurValues = ({ locale }) => {
  const { t } = useTranslation(locale);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <section className="flex flex-col">
      <div className=" flex gap-4 items-center">
        <Title
          borderPosition="left"
          content={t('about_us.ourValues.title')}
          height="h-9"
          size="text-[26px] lg:text-[32px]"
        />
        <ValuesIcon className={'h-10 w-10'} />
      </div>
      <p className="font-poppins text-sm lg:text-base font-normal text-black sm:my-6 my-6 mb-8">
        {t('about_us.ourValues.description')}
      </p>
      <motion.div
        ref={ref}
        animate={controls}
        className="flex flex-col sm:flex-col-reverse md:flex-col space-y-4 sm:space-y-0 md:space-y-6 sm:gap-4 md:gap-0 items-center justify-center mb-8 lg:mb-10"
        initial="initial"
        variants={stagger}
      >
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row items-center lg:space-x-4 gap-4">
          <FlipCard
            resize
            description={t('about_us.ourValues.trust.description')}
            iconName="trust"
            text={t('about_us.ourValues.trust.title')}
          />
          <FlipCard
            resize
            description={t('about_us.ourValues.mutualRespect.description')}
            iconName="mutualRespect"
            text={t('about_us.ourValues.mutualRespect.title')}
          />
          <FlipCard
            resize
            description={t('about_us.ourValues.success.description')}
            iconName="success"
            text={t('about_us.ourValues.success.title')}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center lg:space-x-4 gap-4">
          <FlipCard
            resize
            description={t('about_us.ourValues.awareness.description')}
            iconName="awareness"
            text={t('about_us.ourValues.awareness.title')}
          />
          <FlipCard
            resize
            description={t('about_us.ourValues.agility.description')}
            iconName="agility"
            text={t('about_us.ourValues.agility.title')}
          />
        </div>
      </motion.div>
      <ButtonBecomeSteplixer
        ariaLabel={t('navbar.item4.ariaLabel')}
        customStyles="h-[37px] mx-auto"
        i18nKeyText={'ButtonProject'}
        locale={locale}
        pathname="/contact"
      />
    </section>
  );
};

OurValues.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default OurValues;
