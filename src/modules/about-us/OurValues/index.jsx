import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const OurValues = () => {
    const { t } = useTranslation();

    return (
        <div className="p-5 my-12 lg:w-[1130px] w-[345px] lg:mt-[70px]">
            <div className="">
                <p className="text-[42px] font-bold ">03.</p>
                <StepCard colorLine="bg-steplix-blue lg:w-12" />
                <div className="mt-2">
                    <StepCard
                        title={t("about_us.ourValues.title")}
                        colorTitle="text-steplix-yellow"
                        colorLine="bg-steplix-red"
                    />
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-y-12 lg:gap-x-7 space-y-10 lg:space-y-0 lg:mt-[100px] mt-7">
                <StepCard
                    title={t("about_us.ourValues.values.valuetOne.title")}
                    textOne={t(
                        "about_us.ourValues.values.valuetOne.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-blue"
                />
                <StepCard
                    title={t("about_us.ourValues.values.valuetTwo.title")}
                    textOne={t(
                        "about_us.ourValues.values.valuetTwo.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-red"
                />
                <StepCard
                    title={t("about_us.ourValues.values.valuetThree.title")}
                    textOne={t(
                        "about_us.ourValues.values.valuetThree.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-yellow"
                />
                <StepCard
                    title={t("about_us.ourValues.values.valuetFour.title")}
                    textOne={t(
                        "about_us.ourValues.values.valuetFour.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-red"
                />{" "}
                <StepCard
                    title={t("about_us.ourValues.values.valuetFive.title")}
                    textOne={t(
                        "about_us.ourValues.values.valuetFive.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-blue"
                />
            </div>
        </div>
    );
};

export default OurValues;
