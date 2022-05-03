import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import Fade from "react-reveal/Fade";

const OurValues = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 xl:px-0 xl:pr-24">
            <Fade cascade>
                <h2 className="mb-6 xl:mb-14 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    <span>{t("about_us.ourValues.titleOne")} </span>
                    <span className="text--outlined">
                        {t("about_us.ourValues.titleTwo")}
                    </span>
                </h2>
                <Fade cascade>
                    <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-x-7 gap-y-10 xl:gap-y-24">
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetOne.title"
                            )}
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                            textOne={t(
                                "about_us.ourValues.values.valuetOne.description"
                            )}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-blue"
                            widthTextOne="xl:w-[320px] 2xl:w-[372px]"
                        />
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetTwo.title"
                            )}
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                            textOne={t(
                                "about_us.ourValues.values.valuetTwo.description"
                            )}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-red"
                            widthTextOne="xl:w-[320px] 2xl:w-[372px]"
                        />
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetThree.title"
                            )}
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                            textOne={t(
                                "about_us.ourValues.values.valuetThree.description"
                            )}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-yellow"
                            widthTextOne="xl:w-[320px] 2xl:w-[372px]"
                        />
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetFour.title"
                            )}
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                            textOne={t(
                                "about_us.ourValues.values.valuetFour.description"
                            )}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-red"
                            widthTextOne="xl:w-[320px] 2xl:w-[372px]"
                        />{" "}
                        <StepCard
                            title={t(
                                "about_us.ourValues.values.valuetFive.title"
                            )}
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl"
                            textOne={t(
                                "about_us.ourValues.values.valuetFive.description"
                            )}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-blue"
                            widthTextOne="xl:w-[320px] 2xl:w-[372px]"
                        />
                    </div>
                </Fade>
            </Fade>
        </div>
    );
};

export default OurValues;
