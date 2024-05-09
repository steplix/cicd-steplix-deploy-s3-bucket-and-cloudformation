/* eslint-disable @next/next/no-img-element */
import propTypes from 'prop-types';
import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

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
    <div className="w-[280px] sm:w-[376px] h-[501px] xl:w-[488px] sm:h-[489px] xl:h-[489px] card-shadow rounded-[20px] flex flex-col portfolio-card--inactive transition-all duration-500 ease-in-out cursor-pointer ">
      <picture className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]">
        <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.png`} />
        <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-lg.png`} />
        <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.png`} />
        <img
          alt={t(`portfolio.cards.${name}.imageAlt`)}
          className="w-full"
          src={`/assets/img/portfolio/${name}.png`}
        />
      </picture>
      <div className="px-6 w-full pt-4 pb-10 flex flex-col justify-center bg-white rounded-bl-[20px] rounded-br-[20px] h-[221px] md:h-[172.5px] lg:h-[230px] xl:h-[235px]">
        <div className="flex items-center justify-between">
          <Icon className={iconBrandClass} name={name} />
          <Icon className="h-[28px] text-white" name={industryIconName} />
        </div>
        <p className="text-[13px] text-black xl:max-w-[440px] mt-8 line-clamp-2 xl:min-h-[39px]">
          {t(`portfolio.cards.${name}.text`)}
        </p>
        <div className="mt-[24px] flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 items-center justify-center">
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
