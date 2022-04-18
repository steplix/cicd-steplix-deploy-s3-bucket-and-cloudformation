import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import StepCardCircular from "@/common/components/StepCardCircular";
import ProcessCard from "@/common/components/ProcessCard";

const StepsToTheTop = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="w-[340px] lg:w-[1300px] mb-[100px]">
                <StepCard
                    title={t("process.stepsToTheTop.title")}
                    emptyTitle={t("process.stepsToTheTop.titleEmpty")}
                    colorTitle="font-bold text-white"
                    textOne={t("process.stepsToTheTop.description")}
                    textTwo={t("process.stepsToTheTop.descriptionTwo")}
                />
            </div>
            <div className="space-y-20">
                <div className="flex space-x-[100px]">
                    <div className="w-[325px] lg:w-[900px] ">
                        <StepCard
                            number="01."
                            numberStyles="xl:mt-4"
                            title={t("process.stepsToTheTop.stepOne.title")}
                            colorTitle="font-bold text-steplix-yellow"
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
                        />
                    </div>

                    <div className="hidden lg:block h-[300px] w-[360px] my-auto">
                        <ProcessCard
                            subDescription={t(
                                "process.stepsToTheTop.stepOne.secondaryDescription"
                            )}
                            textColor="text-white"
                            bgColor="bg-steplix-blue"
                            bgLine="bg-steplix-yellow"
                        />{" "}
                    </div>
                </div>
                <div className="flex space-x-[100px]">
                    <div className="w-[325px] lg:w-[900px] ">
                        <StepCard
                            number="02."
                            numberStyles="xl:mt-4"
                            title={t("process.stepsToTheTop.stepTwo.title")}
                            colorTitle="font-bold text-steplix-yellow"
                            widthTexts="w-[265px] xl:w-[790px]"
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

                    <div className="hidden lg:block h-[300px] w-[360px] my-auto">
                        <ProcessCard
                            subDescription={t(
                                "process.stepsToTheTop.stepTwo.secondaryDescription"
                            )}
                            textColor="text-white"
                            bgColor="bg-steplix-red"
                            bgLine="bg-steplix-yellow"
                        />
                    </div>
                </div>
                <div className="flex space-x-[100px]">
                    <div className="w-[325px] lg:w-[900px] ">
                        <StepCard
                            number="03."
                            numberStyles="xl:mt-4"
                            title={t("process.stepsToTheTop.stepThree.title")}
                            colorTitle="font-bold text-steplix-yellow"
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
                        />
                    </div>

                    <div className="hidden lg:block h-[300px] w-[360px] my-auto">
                        <ProcessCard
                            textColor="text-white"
                            bgColor="bg-steplix-yellow"
                            bgLine="bg-steplix-blue"
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
