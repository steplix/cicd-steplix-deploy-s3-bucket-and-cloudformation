import React from "react";
import { useTranslation, useLanguageQuery } from "@/common/lib/i18n";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix xl:flex xl:gap-28" id="about-us">
            <div className="hidden xl:block steplix--outlined xl:text-[176px] font-black tracking-widest">
                Steplix
            </div>
            <div className="xl:w-[600px]">
                <h2 className="mb-3.5 xl:mb-2.5">
                    <span className="h3-steplix h3-steplix--filled">
                        {t("aboutUs.title")}{" "}
                    </span>
                    <span className="h3-steplix h3-steplix--outlined">
                        {t("aboutUs.emptyTitle")}
                    </span>
                </h2>
                <p className="p-steplix">{t("aboutUs.description")}</p>
            </div>
        </div>
    );
};

export default AboutUs;
