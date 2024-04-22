import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';
import { useResponsive } from '@/common/hooks/useResponsive';

export const ApproachSection = ({ children, framework, technology, locale }) => {
  const [isBigScreen, setIsBigScreen] = useState(false);
  const { t } = useTranslation(locale);
  const { width } = useResponsive();

  const updateScreenSize = () => {
    if (typeof window !== 'undefined') {
      setIsBigScreen(window.innerWidth >= 1024);
    }
  };
  const titleReturned = () => {
    if (locale === 'es') {
      return width < 640 ? (
        <Title
          underlineFixed
          borderPosition="bottom"
          content={t('portfolio.approachShort1')}
          secondContent={t('portfolio.approachShort2')}
          size="text-[26px] lg:text-[32px]"
        />
      ) : (
        <Title
          underlineFixed
          borderPosition="bottom"
          content={t('portfolio.approach')}
          size="text-[26px] lg:text-[32px]"
        />
      );
    } else {
      return (
        <Title
          underlineFixed
          borderPosition="bottom"
          content={t('portfolio.approach')}
          size="text-[26px] lg:text-[32px]"
        />
      );
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateScreenSize);

      return () => {
        window.removeEventListener('resize', updateScreenSize);
      };
    }
  }, []);

  useEffect(() => {
    updateScreenSize();
  }, []);

  return (
    <section className="flex flex-col gap-6 lg:gap-8 mountain-portfolio" id="how-we-deal-with-it">
      <div className="mt-4">{titleReturned()}</div>
      <div className="flex flex-col pb-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-poppins text-[13px] lg:text-[20px] font-medium text-purple">
            {t('portfolio.approachFramework')}
          </span>
          {children}
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {framework.map((icon) => {
            return (
              <ChipColorFilled
                key={icon.iconName}
                background="bg-white"
                iconColor="text-blue"
                iconName={icon.iconName}
                label={icon.label}
                type={isBigScreen ? 'big' : 'medium'}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-poppins text-[13px] lg:text-[20px] font-medium text-purple">
            {t('portfolio.approachTechnology')}
          </span>
          <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
            {technology.map((img) => {
              return (
                <div key={img.alt}>
                  <img
                    alt={img.alt}
                    className="h-[42px] sm:h-[64px] lg:h-[72px]"
                    src={img.imageUrl}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

ApproachSection.prototype = {
  children: PropTypes.node.isRequired,
  framework: PropTypes.array.isRequired,
  technology: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
};
