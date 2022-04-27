import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import StepCard from "@/common/components/StepCard";

const OurCulture = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix pt-0" id="culture">
            <div
                id="our-culture"
                className="text-white mb-10 lg:mb-28 text-left"
            >
                <p className="text-xl xl:text-5xl leading-6 xl:leading-10 font-medium xl:mb-2">
                    {t("ourCulture.title")}
                </p>
                <h2 className="mb-6 xl:mb-14">
                    <span className="h4-steplix h4-steplix--filled">
                        {t("ourCulture.subtitle")}{" "}
                    </span>
                    <span className="h4-steplix h4-steplix--outlined-yellow">
                        {t("ourCulture.emptySubtitle")}
                    </span>
                </h2>
            </div>
            <div className="flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-24">
                <StepCard
                    title={t("ourCulture.cardOne.title")}
                    sizeTitle="text-xl xl:text-5xl font-semibold xl:font-bold"
                    colorTitle="font-semibold text-white"
                    colorLine="bg-steplix-blue"
                    textOne={t("ourCulture.cardOne.description")}
                    widthTextOne="xl:w-96"
                />
                <StepCard
                    title={t("ourCulture.cardTwo.title")}
                    sizeTitle="text-xl xl:text-5xl font-semibold xl:font-bold"
                    colorTitle="font-semibold text-white"
                    colorLine="bg-steplix-red"
                    textOne={t("ourCulture.cardTwo.description")}
                    widthTextOne="xl:w-96"
                />
                <StepCard
                    title={t("ourCulture.cardThree.title")}
                    sizeTitle="text-xl xl:text-5xl font-semibold xl:font-bold"
                    colorTitle="font-semibold text-white"
                    colorLine="bg-steplix-yellow"
                    textOne={t("ourCulture.cardThree.description")}
                    widthTextOne="xl:w-96"
                />
            </div>
        </div>
    );
};

export default OurCulture;
