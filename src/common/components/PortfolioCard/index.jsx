/* eslint-disable @next/next/no-img-element */
import propTypes from 'prop-types';
import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { imageHoverZoomIn } from '@/common/lib/animation';
import CustomNextLink from '@/common/components/CustomNextLink';
import Icon from '@/components/Icon';
import { useTranslation } from '@/common/lib/i18n';

const PortfolioCard = ({ name, iconBrandClass, industryIconName }) => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <CustomNextLink to={`/${locale}/portfolio/${name}`}>
      <div className="overflow-hidden w-[280px] sm:w-[376px] xl:w-[488px] h-[479px] md:h-[489px] lg:h-[489px] xl:h-[490px] card-shadow rounded-[20px] flex flex-col portfolio-card--inactive transition-all duration-500 ease-in-out cursor-pointer ">
        <div className="overflow-hidden carousel-img-gradient h-[226px] flex justify-center items-center">
          <motion.picture
            className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259.24px]"
            whileHover={imageHoverZoomIn}
          >
            <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.png`} />
            <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-lg.png`} />
            <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.png`} />
            <img
              alt={t(`portfolio.cards.${name}.imageAlt`)}
              className=" w-full h-[259.24px] pb-[22px] pt-[22px]"
              src={`/assets/img/portfolio/${name}.png`}
            />
          </motion.picture>
        </div>
        <div className="w-full px-[22px] pt-[17px] pb-[17px] md:pt-8 md:pb-4 lg:pt-8 lg:pb-4 xl:pt-8 xl:pb-[28.02px] flex flex-col justify-center bg-white rounded-bl-[20px] rounded-br-[20px] h-[188px] md:h-[230px] lg:h-[230px] xl:h-[207px]">
          <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-8">
            <Icon className={iconBrandClass} name={name} />
            <Icon className="h-[28px] text-white" name={industryIconName} />
          </div>
          <p className="text-[13px] text-black md:max-w-[331px] xl:max-w-[440px] min-h-[39px] line-clamp-2">
            {t(`portfolio.cards.${name}.text`)}
          </p>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 items-center justify-center  mt-[58px] md:mt-[56px] lg:mt-[32px]">
            <button
              aria-label={t('navbar.item4.ariaLabel')}
              className="flex space-x-2 items-center justify-center text-xs font-bold text-blue sm:text-white bg-white sm:bg-blue w-fit sm:px-4 sm:py-[6px] rounded-[20px]"
            >
              <p>{t(`portfolio.button`)}</p>
              <Icon className="transform rotate-[270deg] w-4" name="chevronDown" />
            </button>
          </div>
        </div>
      </div>
    </CustomNextLink>
  );
};

PortfolioCard.propTypes = {
  name: propTypes.string.isRequired,
  iconBrandClass: propTypes.string.isRequired,
  industryIconName: propTypes.string.isRequired,
};

export default PortfolioCard;
