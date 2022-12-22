import React from 'react'
import Link from 'next/link';
import { useTranslation } from "next-export-i18n";
import { aboutUsPhotoArray } from '@/common/utils/constants';
import Chip from '@/common/components/TechnologyChip'
import Title from '@/common/components/Title/Gradient';
import PhotoCarousel from '@/common/components/PhotoCarousel';
import Icon from '@/common/components/Icon';

const Teams = () => {

    const { t } = useTranslation();

    return (
        <section className="flex flex-col space-y-6 lg:space-y-8">
            <Title content={t("about_us.teams.title")} borderPosition="left" height="h-9" size="text-[26px] lg:text-[32px]"/>
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
                {t("about_us.teams.description")}<span className="font-semibold">{t("about_us.teams.descriptionBold")}</span>
            </p>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-16 items-center lg:justify-center">
                <h3 className="font-black text-[24px] text-purple mx-auto lg:mx-0">
                    #Digital <span className="text-outlined--purple font-black" data-content="Sherpas">Sherpas</span>
                </h3>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center justify-center">
                    <div className="flex flex-row space-x-3 md:space-x-6">
                        <Chip label={"QA"} name="qa" customIconClass="h-[18px] w-[18px] mt-2" />
                        <Chip label={"UI/UX"} name="uiux" customIconClass="h-[18px] w-[18px]" />
                        <Chip label={"Mobile"} name="mobile" customIconClass="h-[18px] w-[18px] text-white"/>
                    </div>
                    <div className="flex flex-row space-x-3 md:space-x-6">
                        <Chip label={"Front end"} name="frontend" customIconClass="h-[18px] w-[18px] mt-1" />
                        <Chip label={"Back end"} name="backend" customIconClass="h-[18px] w-[18px]" />
                    </div>
                </div>
            </div>
            <div className="w-full shadow-2xl h-[333px] flex flex-col items-center justify-center">
                <PhotoCarousel photoArray={aboutUsPhotoArray} />
                <Link href="/jobs">
                    <a className='hidden items-center justify-center text-blue lg:text-white bg-none lg:bg-blue text-xs lg:text-base font-bold lg:font-semibold py-1 px-3 space-x-2 rounded-[20px] mt-6 md:mt-7 lg:mt-6'>
                        <p>{t("about_us.teams.button")}</p>
                        <Icon name="chevronDown" className='w-[16px] h-[16px] transform rotate-[270deg]' />
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default Teams