import React, { useContext } from "react";
import StepCard from "@/common/components/StepCard";
import StepCardCircular from "@/common/components/StepCardCircular";
import { LanguageContext } from "@/common/components/LanguageContext";

const StepsToTheTop = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div>
            <div className="w-[900px] mb-[100px]">
                <StepCard
                    title={texts.process.stepsToTheTop.title}
                    colorTitle="font-bold text-white"
                    textOne={texts.process.stepsToTheTop.description}
                />
            </div>
            <div className="space-y-20">
                <div className="flex space-x-[60px]">
                    <div className="w-[900px] ">
                        <StepCard
                            number="01."
                            title={texts.process.stepsToTheTop.stepOne.title}
                            colorTitle="font-bold text-white"
                            textOne={
                                texts.process.stepsToTheTop.stepOne
                                    .descriptionOne
                            }
                            textTwo={
                                texts.process.stepsToTheTop.stepOne
                                    .descriptionTwo
                            }
                            textThree={
                                texts.process.stepsToTheTop.stepOne
                                    .descriptionThree
                            }
                            textFour={
                                texts.process.stepsToTheTop.stepOne
                                    .descriptionFour
                            }
                        />
                    </div>

                    <div className="h-[300px] w-[300px] my-auto">
                        <StepCardCircular
                            borderColor="border-steplix-blue"
                            text={
                                texts.process.stepsToTheTop.stepOne
                                    .secondaryDescription
                            }
                        />
                    </div>
                </div>
                <div className="flex space-x-[60px]">
                    <div className="w-[900px] ">
                        <StepCard
                            number="01."
                            title={texts.process.stepsToTheTop.stepTwo.title}
                            colorTitle="font-bold text-white"
                            textOne={
                                texts.process.stepsToTheTop.stepTwo
                                    .descriptionOne
                            }
                            textTwo={
                                texts.process.stepsToTheTop.stepTwo
                                    .descriptionTwo
                            }
                            textThree={
                                texts.process.stepsToTheTop.stepTwo
                                    .descriptionThree
                            }
                            textFour={
                                texts.process.stepsToTheTop.stepTwo
                                    .descriptionFour
                            }
                        />
                    </div>

                    <div className="h-[300px] w-[300px] my-auto">
                        <StepCardCircular
                            borderColor="border-steplix-red"
                            text={
                                texts.process.stepsToTheTop.stepTwo
                                    .secondaryDescription
                            }
                        />
                    </div>
                </div>
                <div className="flex space-x-[60px]">
                    <div className="w-[900px] ">
                        <StepCard
                            number="01."
                            title={texts.process.stepsToTheTop.stepThree.title}
                            colorTitle="font-bold text-white"
                            textOne={
                                texts.process.stepsToTheTop.stepThree
                                    .descriptionOne
                            }
                            textTwo={
                                texts.process.stepsToTheTop.stepThree
                                    .descriptionTwo
                            }
                            textThree={
                                texts.process.stepsToTheTop.stepThree
                                    .descriptionThree
                            }
                            textFour={
                                texts.process.stepsToTheTop.stepThree
                                    .descriptionFour
                            }
                        />
                    </div>

                    <div className="h-[300px] w-[300px] my-auto">
                        <StepCardCircular
                            borderColor="border-steplix-yellow"
                            text={
                                texts.process.stepsToTheTop.stepThree
                                    .secondaryDescription
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsToTheTop;
