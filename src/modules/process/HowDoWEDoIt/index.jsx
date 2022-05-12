import React from "react";
import { useTranslation } from "next-export-i18n";
import FeatureCard from "@/common/components/FeatureCard";
import StepCard from "@/common/components/StepCard";

const HoDoWeDoIt = () => {
    const { t } = useTranslation();

    return (
        <section className="container px-5 pb-6 md:pb-16 md:px-0 space-y-6">
            <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                {t("process.HowDoWeDoIt.title")}
            </h2>
            <div className="flex flex-col xl:flex-row space-y-8 lg:space-y-10 xl:space-y-0 xl:space-x-16 2xl:space-x-20">
                <FeatureCard
                    title={t("process.HowDoWeDoIt.concepts.conceptOne.title")}
                    description={t(
                        "process.HowDoWeDoIt.concepts.conceptOne.description"
                    )}
                    divideColor="blue"
                    widthDescription="xl:w-[197px] 2xl:w-[239px]"
                />
                <FeatureCard
                    title={t("process.HowDoWeDoIt.concepts.conceptTwo.title")}
                    description={t(
                        "process.HowDoWeDoIt.concepts.conceptTwo.description"
                    )}
                    divideColor="red"
                    widthDescription="xl:w-[197px] 2xl:w-[239px]"
                />
                <FeatureCard
                    title={t("process.HowDoWeDoIt.concepts.conceptThree.title")}
                    description={t(
                        "process.HowDoWeDoIt.concepts.conceptThree.description"
                    )}
                    divideColor="yellow"
                    widthDescription="xl:w-[197px] 2xl:w-[239px]"
                />
                <FeatureCard
                    title={t("process.HowDoWeDoIt.concepts.conceptFour.title")}
                    description={t(
                        "process.HowDoWeDoIt.concepts.conceptFour.description"
                    )}
                    divideColor="red"
                    widthDescription="xl:w-[197px] 2xl:w-[239px]"
                />
            </div>
        </section>
    );
};

export default HoDoWeDoIt;
