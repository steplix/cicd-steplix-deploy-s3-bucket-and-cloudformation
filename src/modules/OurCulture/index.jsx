import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const OurCulture = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix mt-16 lg:mt-32" id="culture">
            <div
                id="our-culture"
                className="text-white mb-28 text-left w-[290px] lg:w-[1200px]"
            >
                <p className="text-[24px] text-2xl lg:text-4xl">
                    {t("ourCulture.title")}
                </p>
                <h2 className="title-empty text-2xl lg:text-4xl">
                    {t("ourCulture.subtitle")}
                </h2>
            </div>
            <div className="lg:flex lg:gap-28 space-y-7 lg:space-y-0">
                <div className="lg:w-[450px] w-[250px] mx-auto">
                    <StepCard
                        title={t("ourCulture.cardOne.title")}
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-blue"
                        textOne={t("ourCulture.cardOne.description")}
                    />
                </div>
                <div className="lg:w-[450px] w-[250px] mx-auto">
                    <StepCard
                        title={t("ourCulture.cardTwo.title")}
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-red"
                        textOne={t("ourCulture.cardTwo.description")}
                    />
                </div>
                <div className="lg:w-[450px] w-[250px] mx-auto">
                    <StepCard
                        title={t("ourCulture.cardThree.title")}
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-yellow"
                        textOne={t("ourCulture.cardThree.description")}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurCulture;
