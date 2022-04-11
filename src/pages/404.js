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
            <div className="py-[220px] section-steplix space-x-10 lg:flex items-center">
                <div>
                    <div className=" lg:w-[777px] lg:h-[384px] w-[333px] h-[170px]">
                        <img
                            src="/assets/img/404.svg"
                            alt="logo"
                            layout="fill"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-[50px] lg:text-[100px] font-black">
                        Error <span className="title-empty"> 404</span>
                    </h1>
                    <p className="p-steplix lg:w-[500px] w-[270px] leading-10">
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
