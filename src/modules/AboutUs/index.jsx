import React from "react";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Fade from "react-reveal/Fade";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix xl:flex xl:gap-28" id="about-us">
            <Fade cascade>
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
            </Fade>
        </div>
    );
};

export default AboutUs;
