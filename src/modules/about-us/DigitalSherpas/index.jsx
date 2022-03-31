import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const DigitalSherpas = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-44 lg:w-[1230px] w-[345px]">
            <div className="text-5xl font-black">
                <h1>
                    <spam className="title-empty">
                        {" "}
                        {t("about_us.digitalSherpas.titleOne")}{" "}
                    </spam>{" "}
                    {t("about_us.digitalSherpas.titleTwo")}
                </h1>
            </div>
            <div>
                <StepCard
                    textOne={t("about_us.digitalSherpas.descriptionOne")}
                    textTwo={t("about_us.digitalSherpas.descriptionTwo")}
                    textThree={t("about_us.digitalSherpas.descriptionThree")}
                />
            </div>
        </div>
    );
};

export default DigitalSherpas;
