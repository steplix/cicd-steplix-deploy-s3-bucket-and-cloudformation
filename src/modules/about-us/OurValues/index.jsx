import React from "react";
import { useTranslation } from "next-export-i18n";
import FeatureCard from "@/common/components/FeatureCard";
import Fade from "react-reveal/Fade";

const OurValues = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0 xl:pr-24">
            <Fade cascade>
                <h2 className="mb-6 xl:mb-14 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    <span>{t("about_us.ourValues.titleOne")} </span>
                    <span className="text--outlined">
                        {t("about_us.ourValues.titleTwo")}
                    </span>
                </h2>
                <Fade cascade>
                    <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-x-7 gap-y-10 xl:gap-y-24">
                        <FeatureCard
                            title={t(
                                "about_us.ourValues.values.valuetOne.title"
                            )}
                            description={t(
                                "about_us.ourValues.values.valuetOne.description"
                            )}
                            divideColor="bg-blue"
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                        />
                        <FeatureCard
                            title={t(
                                "about_us.ourValues.values.valuetTwo.title"
                            )}
                            description={t(
                                "about_us.ourValues.values.valuetTwo.description"
                            )}
                            divideColor="bg-red"
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                        />
                        <FeatureCard
                            title={t(
                                "about_us.ourValues.values.valuetThree.title"
                            )}
                            description={t(
                                "about_us.ourValues.values.valuetThree.description"
                            )}
                            divideColor="bg-yellow"
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                        />
                        <FeatureCard
                            title={t(
                                "about_us.ourValues.values.valuetFour.title"
                            )}
                            description={t(
                                "about_us.ourValues.values.valuetFour.description"
                            )}
                            divideColor="bg-red"
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                        />
                        <FeatureCard
                            title={t(
                                "about_us.ourValues.values.valuetFive.title"
                            )}
                            description={t(
                                "about_us.ourValues.values.valuetFive.description"
                            )}
                            divideColor="bg-blue"
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                        />
                    </div>
                </Fade>
            </Fade>
        </div>
    );
};

export default OurValues;
