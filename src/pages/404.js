/* eslint-disable @next/next/no-img-element */
import React from "react";
import Flags from "@/common/components/Flags";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "@/common/lib/i18n";

const Custom404 = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <div className="relative h-screen w-full">
            <div className="lg:py-[220px] pt-[110px] flex lg:justify-center flex-col lg:items-center lg:flex-row-reverse">
                <div className="w-full lg:w-[700px]">
                    <div className="lg:ml-8">
                        <h1 className="lg:text-[100px] text-[64px] mb-8 font-black text-center lg:text-left">
                            Error<span className="title-empty"> 404</span>
                        </h1>
                        <div className="mx-auto lg:mx-0 w-[327px] lg:w-[500px]">
                            <p className="p-steplix lg:leading-10 leading-6">
                                {t("404.subtitle")}
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:ml-8">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <button className="lg:w-[194px] lg:h-[53px] lg:mt-12 bg-steplix-blue rounded-lg p-steplix">
                                    {t("404.button")}
                                </button>{" "}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[777px] lg:h-[384px] w-full h-[176px] mt-11 md:mx-0">
                    <img src="/assets/img/404.svg" alt="logo" layout="fill" />
                </div>
                <div className="lg:hidden mt-[100px] flex justify-center ">
                    <Link href={{ pathname: "/", query: query }}>
                        <a>
                            {" "}
                            <button className="w-[138px] h-[39px] bg-steplix-blue rounded-lg p-steplix">
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
