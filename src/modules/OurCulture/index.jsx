import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const OurCulture = () => {
    const { t } = useTranslation();

    return (
        <div
            id="our-culture "
            className="lg:w-[1230px] w-[345px] mt-16 lg:mt-32"
        >
            <div className="text-white mb-28 text-left w-[290px] lg:w-[1200px]">
                <p className="text-[24px] lg:text-[54px]">
                    {t("ourCulture.title")}
                </p>
                <h2 className="title-empty lg:text-[64px] text-[24px]">
                    {t("ourCulture.subtitle")}
                </h2>
            </div>
            <div className="lg:flex lg:gap-28 space-y-7 lg:space-y-0">
                <div className="lg:w-[450px] w-[250px]mx-auto">
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
