import React from "react";
import { useTranslation } from "next-export-i18n";
import Fade from "react-reveal/Fade";

const DigitalSherpas = () => {
    const { t } = useTranslation();

    return (
        <Fade cascade>
            <div className="container px-5 md:px-0 xl:pr-24">
                <h2 className="mb-6 xl:mb-14 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    <span>{t("about_us.digitalSherpas.titleOne")} </span>
                    <span className="text--outlined">
                        {t("about_us.digitalSherpas.titleTwo")}
                    </span>
                </h2>
                <div className="paragraph">
                    <p>{t("about_us.digitalSherpas.descriptionOne")}</p>
                    <br />
                    <p>{t("about_us.digitalSherpas.descriptionTwo")}</p>
                    <br />
                    <p>{t("about_us.digitalSherpas.descriptionThree")}</p>
                </div>
            </div>
        </Fade>
    );
};

export default DigitalSherpas;
