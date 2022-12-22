import React from 'react';
import Link from "next/link";
import Icon from '@/components/Icon';
import { useTranslation } from "next-export-i18n";
import TechnologiesSlider from '@/common/components/TechnologiesSlider';

const Portfolio = () => {
    const { t } = useTranslation();

    return (
        <section className='mb-[72px]'>
            <div>
                <div className="header-gradient rounded-t-[40px] h-[146px]"/>

                <div className="pt-[20px] pl-[7px] -mt-36">
                    <img
                        src="/assets/img/screen-shadow.png"
                        alt="Image screen"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-full container mx-auto flex justify-end items-end gap-2 pr-[23px] -mt-6 mb-8 md:pr-0">
                    <Link href="/portfolio">
                        <a>
                            <span className="text-blue text-xs font-bold">{t("PortfolioHomeSection.title")}</span>
                        </a>
                    </Link>
                    <Icon name="chevronRight" className="h-4 w-4" />
                </div>

                <TechnologiesSlider />  
            </div>
        </section>
    )
}

export default Portfolio;