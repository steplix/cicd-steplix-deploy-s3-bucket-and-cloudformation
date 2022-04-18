import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const HoDoWeDoIt = () => {
    const { t } = useTranslation();

    return (
        <div className="w-[340px] lg:w-[1300px] space-y-[70px]">
            <div>
                <StepCard
                    title={t("process.HowDoWeDoIt.title")}
                    textTwo={t("process.HowDoWeDoIt.description")}
                    colorTitle="font-semibold "
                    colorLine="bg-steplix-red"
                />
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:gap-y-12 lg:gap-x-12 space-y-4 lg:space-y-0">
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptOne.title")}
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptOne.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-blue"
                />
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptTwo.title")}
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptTwo.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-red"
                />
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptThree.title")}
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptThree.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-yellow"
                />
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptFour.title")}
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptFour.description"
                    )}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-red"
                />
            </div>
        </div>
    );
};

export default HoDoWeDoIt;
