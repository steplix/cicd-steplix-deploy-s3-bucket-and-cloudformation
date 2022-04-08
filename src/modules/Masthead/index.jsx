/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-export-i18n";

const Masthead = () => {
    const { t } = useTranslation();

    return (
        <div
            className="banner h-96 xl:h-[1100px] pt-36 pl-5 xl:pt-96 xl:pl-24"
            id="masthead"
        >
            <h1 className="mb-4">
                <span className="h1-steplix h1-steplix--filled">
                    {t("masthead.titlePartOne")}
                </span>{" "}
                <span className="h1-steplix h1-steplix--outlined">
                    {" "}
                    {t("masthead.emptyTitlePartOne")}
                </span>
                <br />
                <span className="h1-steplix">{t("masthead.titlePartTwo")}</span>
            </h1>
            <p className="p-steplix xl:text-3xl">{t("masthead.subtitle")}</p>
            <div className="hidden xl:flex xl:justify-center xl:m-48">
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
    );
};

export default Masthead;
