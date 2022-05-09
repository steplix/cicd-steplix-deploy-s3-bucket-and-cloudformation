/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-export-i18n";

const Masthead = () => {
    const { t } = useTranslation();

    return (
        <div
            className="banner h-96 md:h-[432px] lg:h-[578px] xl:h-[722px] 2xl:h-[864px]"
            id="masthead"
        >
            <div className="container h-full px-5 md:px-0 flex flex-col justify-center">
                <h1 className="text-6xl md:text-9xl lg:text-12xl xl:text-11xl 2xl:text-12xl font-semibold xl:mt-48">
                    <span>{t("masthead.titlePartOne")}</span>{" "}
                    <span className="text--outlined">
                        {" "}
                        {t("masthead.emptyTitlePartOne")}
                    </span>
                    <br />
                    <span>{t("masthead.titlePartTwo")}</span>
                </h1>
                <h2 className="text-base md:text-lg lg:text-3xl xl:text-2xl 2xl:text-3xl leading-tight font-normal max-w-[290px] md:max-w-[407px] lg:max-w-[485px] xl:max-w-[523px]">
                    {t("masthead.subtitle")}
                </h2>
                <div className="hidden xl:flex xl:justify-center xl:mt-40 2xl:mt-48">
                    <a href="#about-us">
                        <div className="border-yellow h-[44px] w-7 border-[1px] rounded-2xl text-center flex mx-auto mb-2 items-center">
                            <div className="mx-auto">
                                <img
                                    src="/assets/img/chevronDown.svg"
                                    alt="logo"
                                    className="w-[14px] h-[7px]"
                                />
                            </div>
                        </div>
                        <p>Scroll down</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Masthead;
