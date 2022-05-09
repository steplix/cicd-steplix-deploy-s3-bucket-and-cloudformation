/* eslint-disable @next/next/no-img-element */
import React from "react";
import Flags from "@/common/components/Flags";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const Custom404 = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <div className="relative h-screen w-full">
            <div className="lg:py-[220px] pt-[110px] flex lg:justify-center flex-col lg:items-center lg:flex-row-reverse">
                <div className="w-full lg:w-[700px]">
                    <div className="lg:ml-8">
                        <div className="flex lg:block ">
                            <div className="mx-auto flex">
                                <div className="w-[5px] h-10 md:w-[5px] md:h-14 lg:w-[5px] lg:h-16 2xl:w-[6px] bg-yellow mr-2 md:mr-4 rounded-[80px]" />
                                <h1 className="mb-8  lg:mx-0 font-black text-center lg:text-left text-4xl md:text-8xl lg:text-9xl">
                                    Error
                                    <span className="text--outlined"> 404</span>
                                </h1>
                            </div>
                        </div>
                        <div className="mx-auto lg:mx-0 w-[327px] lg:w-[450px] 2xl:w-[690px]">
                            <p className="paragraph lg:leading-10 leading-6">
                                {t("404.subtitle")}
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:ml-8">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <button className="lg:w-[194px] lg:h-[53px] lg:mt-12 bg-blue rounded-lg paragraph">
                                    {t("404.button")}
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="max-w-[375px] h-[176px] md:w-[500px] md:h-[280px] lg:w-[777px] lg:h-[384px] mt-11 mx-auto xl:mx-0">
                    <img src="/assets/img/404.svg" alt="logo" layout="fill" />
                </div>
                <div className="lg:hidden mt-[100px] flex justify-center ">
                    <Link href={{ pathname: "/", query: query }}>
                        <a>
                            <button className="w-[138px] h-[39px] md:w-[165px] md:h-[39px] bg-blue rounded-lg paragraph">
                                {t("404.button")}
                            </button>{" "}
                        </a>
                    </Link>
                </div>
                <Flags />
            </div>
        </div>
    );
};

export default Custom404;
