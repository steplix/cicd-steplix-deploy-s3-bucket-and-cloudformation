import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const HoDoWeDoIt = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 pb-6 md:pb-16 xl:px-0 space-y-6">
            <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                {t("process.HowDoWeDoIt.title")}
            </h2>
            <div className="xl:grid xl:grid-cols-4 xl:gap-y-12 xl:gap-x-12 space-y-4 xl:space-y-0">
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptOne.title")}
                    sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptOne.description"
                    )}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-blue"
                    widthTextOne="xl:w-[197px] 2xl:w-[239px]"
                />
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptTwo.title")}
                    sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptTwo.description"
                    )}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-red"
                    widthTextOne="xl:w-[197px] 2xl:w-[239px]"
                />
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptThree.title")}
                    sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptThree.description"
                    )}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-yellow"
                    widthTextOne="xl:w-[197px] 2xl:w-[239px]"
                />
                <StepCard
                    title={t("process.HowDoWeDoIt.concepts.conceptFour.title")}
                    sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                    textOne={t(
                        "process.HowDoWeDoIt.concepts.conceptFour.description"
                    )}
                    colorTitle="font-semibold text-white"
                    colorLine="bg-red"
                    widthTextOne="xl:w-[197px] 2xl:w-[239px]"
                />
            </div>
        </div>
    );
};

export default HoDoWeDoIt;
