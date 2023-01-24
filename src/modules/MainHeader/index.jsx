/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types"; 
import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from "@/common/lib/i18n";

const MainHeader = ({ locale }) => {
    const { t } = useTranslation(locale);

    return (
        <header className="mainHeader h-screen">
            <div className="container h-full">
                <div className="flex flex-col gap-y-6 h-full pt-[94px] sm:pt-[98px] lg:pt-[140px] xl:pt-[121px]">
                    <h1 className="text-[26px] font-bold font-poppins flex flex-col leading-[31.2px] lg:text-5xl">
                        <span>{t("MainHeader.titlePartOne")}</span>
                        <span>{t("MainHeader.titlePartTwo")}</span>
                        <span>{t("MainHeader.titlePartThree")}</span>
                        <span>{t("MainHeader.titlePartFour")}</span>
                    </h1>
                    <div className="w-5 h-1 bg-purple" />
                    <h2 className="flex flex-col text-xl font-medium font-poppins leading-relaxed">
                        <span>{t("MainHeader.subtitlePartOne")}</span>
                        <span>{t("MainHeader.subtitlePartTwo")}</span>
                    </h2>
                </div>
            </div>
        </header>
    );
};

MainHeader.propTypes = {
    locale: PropTypes.oneOf(LOCALE_SLUGS)
}


export default MainHeader;
