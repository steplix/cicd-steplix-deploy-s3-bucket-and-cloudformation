import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import StepCard from "@/common/components/StepCard";

const DigitalSherpas = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix">
            <h2 className="mb-6 xl:mb-14">
                <span className="h2-steplix h2-steplix--filled">
                    {t("about_us.digitalSherpas.titleOne")}{" "}
                </span>
                <span className="h2-steplix h2-steplix--outlined">
                    {t("about_us.digitalSherpas.titleTwo")}
                </span>
            </h2>
            <div className="p-steplix">
                <p>{t("about_us.digitalSherpas.descriptionOne")}</p>
                <br />
                <p>{t("about_us.digitalSherpas.descriptionTwo")}</p>
                <br />
                <p>{t("about_us.digitalSherpas.descriptionThree")}</p>
            </div>
        </div>
    );
};

export default DigitalSherpas;
