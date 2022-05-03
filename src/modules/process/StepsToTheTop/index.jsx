import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import ProcessCard from "@/common/components/ProcessCard";

const StepsToTheTop = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 xl:px-0">
            <div className="mb-[50px]">
                <h3 className="mb-3.5 xl:mb-2.5 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    <span>{t("process.stepsToTheTop.title")} </span>
                    <span className="text--outlined">
                        {t("process.stepsToTheTop.titleEmpty")}
                    </span>
                </h3>
                <div className="flex flex-col mb-12 xl:mb-36 paragraph">
                    <p>{t("process.stepsToTheTop.description")}</p>
                    <br />
                    <p>{t("process.stepsToTheTop.descriptionTwo")}</p>
                </div>
            </div>
            <div className="space-y-20">
                <div className="flex xl:space-x-16 2xl:space-x-24">
                    <div className="xl:w-[637px] 2xl:w-[762px]">
                        <StepCard
                            colorLine="bg-red"
                            textLeft
                            number="01."
                            numberStyles="xl:mt-4"
                            title={t("process.stepsToTheTop.stepOne.title")}
                            colorTitle="font-bold text-yellow"
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold w-40 lg:w-64 xl:pt-4"
                            textOne={t(
                                "process.stepsToTheTop.stepOne.descriptionOne"
                            )}
                            textTwo={t(
                                "process.stepsToTheTop.stepOne.descriptionTwo"
                            )}
                            textThree={t(
                                "process.stepsToTheTop.stepOne.descriptionThree"
                            )}
                            textFour={t(
                                "process.stepsToTheTop.stepOne.descriptionFour"
                            )}
                            widthTexts="xl:w-[637px] 2xl:w-[762px]"
                        />
                    </div>

                    <div className="hidden xl:block xl:h-[195px] xl:w-[295px] 2xl:h-[275px] 2xl:w-[330px] my-auto">
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
                <div className="flex xl:space-x-16 2xl:space-x-24">
                    <div className="xl:w-[637px] 2xl:w-[762px]">
                        <StepCard
                            colorLine="bg-red"
                            textLeft
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold w-40 lg:w-64 xl:pt-4"
                            number="02."
                            numberStyles="xl:mt-4"
                            title={t("process.stepsToTheTop.stepTwo.title")}
                            colorTitle="font-bold text-yellow"
                            widthTexts="xl:w-[637px] 2xl:w-[762px]"
                            textOne={t(
                                "process.stepsToTheTop.stepTwo.descriptionOne"
                            )}
                            textTwo={t(
                                "process.stepsToTheTop.stepTwo.descriptionTwo"
                            )}
                            textThree={t(
                                "process.stepsToTheTop.stepTwo.descriptionThree"
                            )}
                        />
                    </div>

                    <div className="hidden xl:block xl:h-[195px] xl:w-[295px] 2xl:h-[275px] 2xl:w-[330px] my-auto">
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
                <div className="flex xl:space-x-16 2xl:space-x-24">
                    <div className="xl:w-[637px] 2xl:w-[762px]">
                        <StepCard
                            colorLine="bg-red"
                            textLeft
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold w-40 lg:w-64 xl:pt-4"
                            number="03."
                            numberStyles="xl:mt-4"
                            title={t("process.stepsToTheTop.stepThree.title")}
                            colorTitle="font-bold text-yellow"
                            textOne={t(
                                "process.stepsToTheTop.stepThree.descriptionOne"
                            )}
                            textTwo={t(
                                "process.stepsToTheTop.stepThree.descriptionTwo"
                            )}
                            textThree={t(
                                "process.stepsToTheTop.stepThree.descriptionThree"
                            )}
                            textFour={t(
                                "process.stepsToTheTop.stepThree.descriptionFour"
                            )}
                            widthTexts="xl:w-[637px] 2xl:w-[762px]"
                        />
                    </div>

                    <div className="hidden xl:block xl:h-[195px] xl:w-[295px] 2xl:h-[275px] 2xl:w-[330px]  my-auto">
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
        </div>
    );
};

export default StepsToTheTop;
