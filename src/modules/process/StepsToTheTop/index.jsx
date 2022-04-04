import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import StepCardCircular from "@/common/components/StepCardCircular";

const StepsToTheTop = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="w-[340px] lg:w-[1300px] mb-[100px]">
                <StepCard
                    title={t("process.stepsToTheTop.title")}
                    colorTitle="font-bold text-white"
                    textOne={t("process.stepsToTheTop.description")}
                />
            </div>
            <div className="space-y-20">
                <div className="flex space-x-[60px]">
                    <div className="w-[325px] lg:w-[900px] ">
                        <StepCard
                            number="01."
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

                    <div className="hidden lg:block h-[300px] w-[300px] my-auto">
                        <StepCardCircular
                            borderColor="border-steplix-blue"
                            text={t(
                                "process.stepsToTheTop.stepOne.secondaryDescription"
                            )}
                        />
                    </div>
                </div>
                <div className="flex space-x-[60px]">
                    <div className="w-[325px] lg:w-[900px] ">
                        <StepCard
                            number="02."
                            title={t("process.stepsToTheTop.stepTwo.title")}
                            colorTitle="font-bold text-steplix-yellow"
                            textOne={t(
                                "process.stepsToTheTop.stepTwo.descriptionOne"
                            )}
                            textTwo={t(
                                "process.stepsToTheTop.stepTwo.descriptionTwo"
                            )}
                            textThree={t(
                                "process.stepsToTheTop.stepTwo.descriptionThree"
                            )}
                            textFour={t(
                                "process.stepsToTheTop.stepTwo.descriptionFour"
                            )}
                        />
                    </div>

                    <div className="hidden lg:block h-[300px] w-[300px] my-auto">
                        <StepCardCircular
                            borderColor="border-steplix-red"
                            text={t(
                                "process.stepsToTheTop.stepTwo.secondaryDescription"
                            )}
                        />
                    </div>
                </div>
                <div className="flex space-x-[60px]">
                    <div className="w-[325px] lg:w-[900px] ">
                        <StepCard
                            number="03."
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

                    <div className="hidden lg:block h-[300px] w-[300px] my-auto">
                        <StepCardCircular
                            borderColor="border-steplix-yellow"
                            text={t(
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
