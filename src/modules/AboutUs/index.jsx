import React from "react";
import { useTranslation } from "next-export-i18n";
import Fade from "react-reveal/Fade";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0" id="about-us">
            <Fade cascade>
                <div className="flex justify-between items-center">
                    <div className="hidden xl:block text--outlined text--steplix font-black xl:text-15xl 2xl:text-17xl">
                        Steplix
                    </div>
                    <div className="xl:w-[600px]">
                        <h2 className="mb-3.5 xl:mb-2.5 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                            <span>{t("aboutUs.title")} </span>
                            <span className="text--outlined">
                                {t("aboutUs.emptyTitle")}
                            </span>
                        </h2>
                        <p className="paragraph xl:max-w-[531px] 2xl:max-w-[614px]">
                            {t("aboutUs.description")}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutUs;
