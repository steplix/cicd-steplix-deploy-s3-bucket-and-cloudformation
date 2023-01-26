/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CustomNextLink from "@/common/components/CustomNextLink";
import Icon from '@/components/Icon';
import propTypes from 'prop-types';
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

const PortfolioCard = ({ name, iconBrandClass, industryIconName }) => {
  const {query: { locale }} = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className='keen-slider__slide number-slide w-[280px] sm:w-[376px] h-[501px] xl:w-[488px] sm:h-[489px] xl:h-[489px] portfolio-card-shadow lg:drop-shadow-sm rounded-[20px] flex flex-col'>
       <picture className='w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]'>
            <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.png`} />
            <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-md.png`} />
            <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.png`} />
            <img alt={`${name} image`} src={`/assets/img/portfolio/${name}.png`} className='w-full' />   
        </picture> 
        <div className='px-6 w-full h-full py-4 flex flex-col justify-center bg-white rounded-bl-[20px] rounded-br-[20px]'>
            <div className='flex items-center justify-between'>
                <Icon name={name} className={iconBrandClass}  />
                <Icon name={industryIconName} className="w-[25px] h-[26px] text-white" />
            </div>
            <p className='text-[13px] text-black xl:max-w-[331px] mt-8 line-clamp-2'>
                {t(`portfolio.cards.${name}`)}
            </p>
          <div className="mt-[48px] flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 items-center justify-center">
            <p className='text-black text-[13px] font-medium'>{t("portfolio.message")}</p>
            <CustomNextLink to={`/${locale}/contact`}>
                <button className='flex space-x-1 items-center justify-center text-xs font-bold text-blue sm:text-white bg-white sm:bg-blue w-fit sm:px-2 sm:py-1 rounded-[20px]'>
                  <p>{t(`portfolio.button`)}</p>
                  <Icon name="chevronDown" className="transform rotate-[270deg] w-[13px]" />
                </button>
              </CustomNextLink>
          </div>
        </div>
    </div>
  )
}

PortfolioCard.propTypes = {
  name: propTypes.string.isRequired,
  iconBrandClass: propTypes.string.isRequired,
  industryIconName: propTypes.string.isRequired
}

export default PortfolioCard