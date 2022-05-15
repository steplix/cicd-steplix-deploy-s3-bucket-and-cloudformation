/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-export-i18n";

const Masthead = () => {
    const { t } = useTranslation();

    return (
        <header className="masthead masthead-full">
            <div className="container h-full px-5 md:px-0">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-6xl md:text-9xl lg:text-12xl xl:text-11xl font-semibold">
                        <span>{t("masthead.titlePartOne")}</span>{" "}
                        <span className="text--outlined">
                            {" "}
                            {t("masthead.emptyTitlePartOne")}
                        </span>
                        <br />
                        <span>{t("masthead.titlePartTwo")}</span>
                    </h1>
                    <h2 className="text-base md:text-lg lg:text-3xl xl:text-2xl leading-tight font-normal max-w-[290px] md:max-w-[407px] lg:max-w-[485px] xl:max-w-[523px]">
                        {t("masthead.subtitle")}
                    </h2>
                </div>
            </div>
            <div className="masthead-scroll">
                <a
                    className="masthead-scroll-btn js-scroll-trigger"
                    href="#about-us"
                >
                    <img
                        src="/assets/img/chevronDown.svg"
                        alt="chevronDown"
                        className="w-[14px] h-[7px]"
                    />
                </a>
                <div className="mt-2 small">Scroll down</div>
            </div>
        </header>
    );
};

export default Masthead;
