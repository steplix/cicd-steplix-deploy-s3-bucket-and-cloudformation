/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@/components/Icon';

//TODO: MAKE THIS COMPONENT DYNAMIC

const PortfolioCard = () => {
  return (
    <div className='w-[280px] md:w-[376px] h-[376px] md:h-[408px] xl:w-[488px] xl:h-[408px] portfolio-card-shadow rounded-[20px] flex flex-col'>
       <picture className='w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]'>
            <source media="(min-width: 1280px)" srcSet="/assets/img/portfolio/finket-xl.png" />
            <source media="(min-width: 1024px)" srcSet="/assets/img/portfolio/finket-lg.png" />
            <source media="(min-width: 768px)" srcSet="/assets/img/portfolio/finket-md.png" />
            <img alt="finket image" src="/assets/img/portfolio/finket-mobile.png" className='w-full' />   
        </picture> 
        <div className='px-6 w-full h-full py-4 flex flex-col space-y-6 justify-center bg-white rounded-bl-[20px] rounded-br-[20px]'>
            <div className='flex items-center justify-between'>
                <Icon name="finket" className="w-[121px] h-[34px]"  />
                <Icon name="pig" className="w-[25px] h-[26px] text-white" />
            </div>
            <p className='text-[13px] text-black xl:max-w-[331px]'>
                Diseño y desarrollo de plataforma digital de servicios financieros.
            </p>
        </div>
    </div>
  )
}

export default PortfolioCard