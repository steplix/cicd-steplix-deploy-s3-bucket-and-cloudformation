/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-export-i18n";

const Masthead = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="banner lg:h-screen flex h-[450px]" id="masthead">
                <div className="absolute z-0 lg:top-[40vh] top-[15vh] w-full flex justify-center">
                    <div className="lg:w-[1140px]">
                        <h1 className="text-white font-semibold text-2xl md:text-5xl lg:text-8xl mb-4 md:mb-8 lg:mb-6">
                            {t("masthead.titlePartOne")}{" "}
                            <span className="title-empty font-black">
                                {" "}
                                {t("masthead.emptyTitlePartOne")}
                            </span>
                            <br />
                            {t("masthead.titlePartTwo")}
                        </h1>
                        <p className="text-white text-xs md:text-sm lg:text-3xl w-[325px] md:w-80 lg:w-lgTexto lg:w-[775px]">
                            {t("masthead.subtitle")}
                        </p>
                    </div>
                </div>
                <div className="absolute text-white lg:top-[90vh] top-[350px]  left-[40%] lg:left-[50%]">
                    <a href="#about-us">
                        <div className="border-steplix-yellow h-[44px] w-7 border-[1px] rounded-2xl text-center flex mx-auto mb-2 items-center">
                            <div className="relative w-[14px] h-[7px] mx-auto">
                                <img
                                    src="/assets/img/chevronDown.svg"
                                    alt="logo"
                                    layout="fill"
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
