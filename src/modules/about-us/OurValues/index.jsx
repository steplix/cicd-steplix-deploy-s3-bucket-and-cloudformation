import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import Fade from "react-reveal/Fade";

const OurValues = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix">
            <Fade cascade>
                <h2 className="mb-6 xl:mb-14">
                    <span className="h2-steplix h2-steplix--filled">
                        {t("about_us.ourValues.titleOne")}{" "}
                    </span>
                    <span className="h2-steplix h2-steplix--outlined">
                        {t("about_us.ourValues.titleTwo")}
                    </span>
                </h2>
                <Fade cascade>
                    <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-x-7 gap-y-10 xl:gap-y-24">
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetOne.title"
                            )}
                            textOne={t(
                                "about_us.ourValues.values.valuetOne.description"
                            )}
                            colorTitle="font-semibold text-steplix-white"
                            colorLine="bg-steplix-blue"
                        />
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetTwo.title"
                            )}
                            textOne={t(
                                "about_us.ourValues.values.valuetTwo.description"
                            )}
                            colorTitle="font-semibold text-steplix-white"
                            colorLine="bg-steplix-red"
                        />
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetThree.title"
                            )}
                            textOne={t(
                                "about_us.ourValues.values.valuetThree.description"
                            )}
                            colorTitle="font-semibold text-steplix-white"
                            colorLine="bg-steplix-yellow"
                        />
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetFour.title"
                            )}
                            textOne={t(
                                "about_us.ourValues.values.valuetFour.description"
                            )}
                            colorTitle="font-semibold text-steplix-white"
                            colorLine="bg-steplix-red"
                        />{" "}
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetFive.title"
                            )}
                            textOne={t(
                                "about_us.ourValues.values.valuetFive.description"
                            )}
                            colorTitle="font-semibold text-steplix-white"
                            colorLine="bg-steplix-blue"
                        />
                    </div>
                </Fade>
            </Fade>
        </div>
    );
};

export default OurValues;
