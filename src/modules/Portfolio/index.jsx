import React from 'react';
import Link from "next/link";
import Icon from '@/components/Icon';
import ButtonCard from "@/common/components/ButtonCard";
import { useTranslation } from "next-export-i18n";
import TechnologiesSlider from '@/common/components/TechnologiesSlider';
import { repeatImageLogos } from "@/common/utils/methods";
import { clientsLogos } from '@/common/utils/constants';

const Portfolio = () => {
    const { t } = useTranslation();

    const onClick = (url) => {
        window.open(url, "_self");
    };

    return (
        <section className='mb-[72px]'>
            <div>
                <div className="header-gradient rounded-t-[40px] h-[146px] md:h-[233px] lg:h-[480px] xl:h-[700px]"/>

                <div className="pt-[20px] md:pt-0 pl-[7px] md:pl-[15px] -mt-36 md:-mt-52 lg:-mt-98 xl:-mt-99">
                    <img
                        src="/assets/img/Mockup.png"
                        alt="Image screen"
                        className="w-full h-auto"
                    />
                </div>

                <div className="container flex lg:hidden justify-end items-end gap-2 pr-[23px] -mt-6 md:-mt-12 mb-8 md:pr-0">
                    <Link href="/portfolio">
                        <a>
                            <span className="text-blue text-xs font-bold">{t("PortfolioHomeSection.title")}</span>
                        </a>
                    </Link>
                    <Icon name="chevronRight" className="h-4 w-4" />
                </div>

                <div className="hidden lg:flex justify-end px-16 xl:px-28 -mt-16 xl:-mt-32 mb-8">
                    <ButtonCard
                        label={t("PortfolioHomeSection.title")}
                        iconName="calendar"
                        customImageClass="w-4"
                        clickEvent={() => onClick("/portfolio")}
                        iconPosition="right"
                    />
                </div>

                <TechnologiesSlider
                    images={repeatImageLogos(clientsLogos, 20)}
                    slides={8}
                    imgClass="w-24"
                    spacingBeetWeenSlides={10}
                />  
            </div>
        </section>
    )
}

export default Portfolio;