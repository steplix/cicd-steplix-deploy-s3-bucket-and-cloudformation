/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon';
import { useTranslation } from "next-export-i18n";
import propTypes from 'prop-types';

const PortfolioCard = ({ name, iconBrandClass, industryIconName }) => {

  const { t } = useTranslation();

  return (
    <div className='keen-slider__slide number-slide w-[280px] md:w-[376px] h-[376px] md:h-[408px] xl:w-[488px] xl:h-[408px] portfolio-card-shadow lg:drop-shadow-sm rounded-[20px] flex flex-col'>
       <picture className='w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]'>
            <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.png`} />
            <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-md.png`} />
            <source media="(min-width: 768px)" srcSet={`/assets/img/portfolio/${name}-md.png`} />
            <img alt={`${name} image`} src={`/assets/img/portfolio/${name}.png`} className='w-full' />   
        </picture> 
        <div className='px-6 w-full h-full py-4 flex flex-col space-y-6 justify-center bg-white rounded-bl-[20px] rounded-br-[20px]'>
            <div className='flex items-center justify-between'>
                <Icon name={name} className={iconBrandClass}  />
                <Icon name={industryIconName} className="w-[25px] h-[26px] text-white" />
            </div>
            <p className='text-[13px] text-black xl:max-w-[331px]'>
                {t(`portfolio.cards.${name}`)}
            </p>
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