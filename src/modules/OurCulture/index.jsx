import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const OurCulture = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix pt-0" id="culture">
            <div
                id="our-culture"
                className="text-white mb-10 lg:mb-28 text-left"
            >
                <h2 className="text-[30px] font-semibold mb-2">
                    {t("ourCulture.title")}
                </h2>
                <p className=" text-4xl font-black">
                    {t("ourCulture.subtitle")}
                    <span className="title-empty-yellow">
                        {t("ourCulture.emptySubtitle")}
                    </span>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-27">
                <StepCard
                    title={t("ourCulture.cardOne.title")}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-steplix-blue"
                    textOne={t("ourCulture.cardOne.description")}
                />
                <StepCard
                    title={t("ourCulture.cardTwo.title")}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-steplix-red"
                    textOne={t("ourCulture.cardTwo.description")}
                />
                <StepCard
                    title={t("ourCulture.cardThree.title")}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-steplix-yellow"
                    textOne={t("ourCulture.cardThree.description")}
                />
            </div>
        </div>
    );
};

export default OurCulture;
