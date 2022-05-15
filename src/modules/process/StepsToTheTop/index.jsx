import React from "react";
import { useTranslation } from "next-export-i18n";
import NumberedFeatureCard from "@/common/components/NumberedFeatureCard";
import ProcessCard from "@/common/components/ProcessCard";

const StepsToTheTop = () => {
    const { t } = useTranslation();

    return (
        <section className="container px-5 md:px-0 flex flex-col space-y-12">
            <div className="flex flex-col">
                <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl">
                    <span>{t("process.stepsToTheTop.title")} </span>
                    <span className="text--outlined">
                        {t("process.stepsToTheTop.titleEmpty")}
                    </span>
                </h2>
                <div className="flex flex-col paragraph">
                    <p>{t("process.stepsToTheTop.description")}</p>
                    <br />
                    <p>{t("process.stepsToTheTop.descriptionTwo")}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-20">
                <div className="flex xl:space-x-16">
                    <div className="xl:w-[637px]">
                        <NumberedFeatureCard
                            number="01."
                            title={t("process.stepsToTheTop.stepOne.title")}
                            description={t(
                                "process.stepsToTheTop.stepOne.description"
                            )}
                            divideColor="bg-red"
                            widthTitle="w-[200px]"
                            widthDescription="xl:w-[637px]"
                        />
                    </div>

                    <div className="hidden xl:block xl:h-[195px] xl:w-[295px] my-auto">
                        <ProcessCard
                            subDescription={t(
                                "process.stepsToTheTop.stepOne.secondaryDescription"
                            )}
                            textColor="text-white"
                            bgColor="bg-blue"
                            bgLine="bg-yellow"
                        />{" "}
                    </div>
                </div>
                <div className="flex xl:space-x-16">
                    <div className="xl:w-[637px]">
                        <NumberedFeatureCard
                            number="02."
                            title={t("process.stepsToTheTop.stepTwo.title")}
                            description={t(
                                "process.stepsToTheTop.stepTwo.description"
                            )}
                            divideColor="bg-red"
                            widthTitle="w-[152px]"
                            widthDescription="xl:w-[637px]"
                        />
                    </div>

                    <div className="hidden xl:block xl:h-[195px] xl:w-[295px] my-auto">
                        <ProcessCard
                            subDescription={t(
                                "process.stepsToTheTop.stepTwo.secondaryDescription"
                            )}
                            textColor="text-white"
                            bgColor="bg-red"
                            bgLine="bg-yellow"
                        />
                    </div>
                </div>
                <div className="flex xl:space-x-16">
                    <div className="xl:w-[637px]">
                        <NumberedFeatureCard
                            number="03."
                            title={t("process.stepsToTheTop.stepThree.title")}
                            description={t(
                                "process.stepsToTheTop.stepThree.description"
                            )}
                            divideColor="bg-red"
                            widthTitle="w-[153px]"
                            widthDescription="xl:w-[637px]"
                        />
                    </div>

                    <div className="hidden xl:block xl:h-[195px] xl:w-[295px] my-auto">
                        <ProcessCard
                            textColor="text-black"
                            bgColor="bg-yellow"
                            bgLine="bg-blue"
                            subDescription={t(
                                "process.stepsToTheTop.stepThree.secondaryDescription"
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepsToTheTop;
