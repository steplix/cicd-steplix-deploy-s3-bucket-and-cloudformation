import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useTranslation } from "@/common/lib/i18n";
import { aboutUsPhotoArray, LOCALE_SLUGS } from "@/common/utils/constants";
import Chip from "@/common/components/TechnologyChip";
import Title from "@/common/components/Title/Gradient";
import PhotoCarousel from "@/common/components/PhotoCarousel";
import Icon from "@/common/components/Icon";
import ButtonBecomeSteplixer from "@/common/components/ButtonBecome";

const Teams = ({ locale }) => {
  const { t } = useTranslation(locale);

    return (
        <section className="flex flex-col">
            <Title content={t("about_us.teams.title")} borderPosition="left" height="h-9" size="text-[26px] lg:text-[32px]"/>
            <div className='my-8'>
                <PhotoCarousel photoArray={aboutUsPhotoArray} />
            </div>
            <div className="flex flex-col gap-8 space-y-6 lg:space-y-0 lg:space-x-16 items-center lg:justify-center">
                <div className="flex flex-col space-y-4 lg:space-y-[18px] sm:space-x-0 items-center justify-center">
                    <div className="flex flex-row space-x-4 lg:space-x-[18px]">
                        <Chip label={"QA"} name="qa" customIconClass="h-[18px] w-[18px] mt-2" />
                        <Chip label={"UI/UX"} name="uiux" customIconClass="h-[18px] w-[18px]" />
                        <Chip label={"Mobile"} name="mobile" customIconClass="h-[18px] w-[18px] text-white"/>
                        <div className="hidden sm:block">
                            <Chip label={"Back end"} name="backend" customIconClass="h-[18px] w-[18px]" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-4 lg:space-x-[18px]">
                        <div className="flex flex-row space-x-4 sm:space-x-0">
                            <div className="block sm:hidden">
                                <Chip label={"Back end"} name="backend" customIconClass="h-[18px] w-[18px]" />
                            </div>
                            <Chip label={"Front end"} name="frontend" customIconClass="h-[18px] w-[18px] mt-1" />
                        </div>
                        <div className="flex flex-row space-x-4 lg:space-x-[18px]">
                            <Chip label={"Scrum"} name="scrum" customIconClass="h-[18px] w-[18px]" />
                            <Chip label={"Architect"} name="architect" customIconClass="h-[18px] w-[18px] text-white mt-1" />
                        </div>
                    </div>
                </div>
                
                <h3 className="font-black text-[24px] text-purple mx-auto lg:mx-0">
                    #Digital <span className="text-outlined--purple font-black" data-content="Sherpas">Sherpas</span>
                </h3>
                
            </div>
            <p className="font-poppins text-sm lg:text-base font-normal text-black my-8">
                {t("about_us.teams.description")}<span className="font-semibold">{t("about_us.teams.descriptionBold")}</span>
            </p>
            <div className='mx-auto my-0'>
                <ButtonBecomeSteplixer locale={locale} customStyles="h-[37px] my-4" i18nKeyText={"ButtonBecomeSteplixer"} pathname="/become-steplixer" />
            </div>
        </section>
    )
}

Teams.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default Teams;
