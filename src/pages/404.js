/* eslint-disable @next/next/no-img-element */
import React from "react";
import Flags from "@/common/components/Flags";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const Custom404 = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <div className="relative h-screen">
            <div className="lg:hidden">
                <div className="pt-[110px] section-steplix">
                    <div className="text-center">
                        <h1 className="text-[64px] font-black mb-8 ">
                            Error <span className="title-empty"> 404</span>
                        </h1>
                        <p className="p-steplix w-[327px] text-left leading-10">
                            {t("404.subtitle")}
                        </p>
                    </div>
                </div>
                <div className="w-full h-[176px] mt-11">
                    <img src="/assets/img/404.svg" alt="logo" layout="fill" />
                </div>
                <div className="section-steplix mt-[100px] flex justify-center">
                    <Link href={{ pathname: "/", query: query }}>
                        <a>
                            {" "}
                            <button className="w-[138px] h-[39px] bg-steplix-blue rounded-lg p-steplix">
                                {t("404.button")}
                            </button>{" "}
                        </a>
                    </Link>
                </div>
            </div>
            <div className="py-[220px] section-steplix space-x-10 lg:flex items-center hidden ">
                <div>
                    <div className=" lg:w-[777px] h-[384px]">
                        <img
                            src="/assets/img/404.svg"
                            alt="logo"
                            layout="fill"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-[100px] font-black">
                        Error <span className="title-empty"> 404</span>
                    </h1>
                    <p className="p-steplix w-[500px] leading-10">
                        {t("404.subtitle")}
                    </p>

                    <Link href={{ pathname: "/", query: query }}>
                        <a>
                            {" "}
                            <button className="w-[194px] h-[53px] mt-12 bg-steplix-blue rounded-lg p-steplix">
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
