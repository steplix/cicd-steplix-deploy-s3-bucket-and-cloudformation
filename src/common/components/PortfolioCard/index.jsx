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
    <div className="w-[280px] sm:w-[376px] h-[501px] xl:w-[488px] sm:h-[489px] xl:h-[489px] card-shadow rounded-[20px] flex flex-col portfolio-card--inactive transition-all duration-500 ease-in-out ">
      <picture className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]">
        <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.webp`} />
        <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} />
        <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} />
        <img
          alt={t(`portfolio.cards.${name}.imageAlt`)}
          className="w-full"
          src={`/assets/img/portfolio/${name}.svg`}
        />
      </picture>
      <div className="px-6 w-full h-full py-4 flex flex-col justify-center bg-white rounded-bl-[20px] rounded-br-[20px]">
        <div className="flex items-center justify-between">
          <Icon className={iconBrandClass} name={name} />
          <Icon className="w-[25px] h-[26px] text-white" name={industryIconName} />
        </div>
        <p className="text-[13px] text-black xl:max-w-[440px] mt-8 line-clamp-2 xl:min-h-[39px]">
          {t(`portfolio.cards.${name}.text`)}
        </p>
        <div className="mt-[48px] flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 items-center justify-center">
          <p className="text-black text-[13px] font-medium">{t('portfolio.message')}</p>
          <CustomNextLink to={`/${locale}/contact`}>
            <button
              aria-label={t('navbar.item4.ariaLabel')}
              className="flex space-x-1 items-center justify-center text-xs font-bold text-blue sm:text-white bg-white sm:bg-blue w-fit sm:px-2 sm:py-1 rounded-[20px]"
            >
              <p>{t(`portfolio.button`)}</p>
              <Icon className="transform rotate-[270deg] w-[13px]" name="chevronDown" />
            </button>
          </CustomNextLink>
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  name: propTypes.string.isRequired,
  iconBrandClass: propTypes.string.isRequired,
  industryIconName: propTypes.string.isRequired,
};

export default PortfolioCard;
