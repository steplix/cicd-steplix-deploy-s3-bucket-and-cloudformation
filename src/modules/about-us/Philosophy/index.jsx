import React from "react";
import { useTranslation } from "next-export-i18n";
import CollageAboutUs from "@/common/components/CollageAboutUs";
import Fade from "react-reveal/Fade";

const Philosophy = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 xl:px-0 xl:pr-24">
            <Fade cascade>
                <div className="mb-0 xl:mb-14">
                    <h2 className="mb-6 xl:mb-14 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                        <span>{t("about_us.philosophy.titleOne")} </span>
                        <span className="text--outlined">
                            {t("about_us.philosophy.titleTwo")}
                        </span>
                    </h2>
                    <p className="paragraph">
                        {t("about_us.philosophy.description")}
                    </p>
                </div>
            </Fade>
            <div className="hidden xl:flex">
                <CollageAboutUs />
            </div>
        </div>
    );
};

export default Philosophy;
