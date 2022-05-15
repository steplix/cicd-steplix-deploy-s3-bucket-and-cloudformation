import React from "react";
import { useTranslation } from "next-export-i18n";
import Fade from "react-reveal/Fade";
import NumberedFeatureCard from "@/common/components/NumberedFeatureCard";

const WhatWeDo = () => {
    const { t } = useTranslation();

    return (
        <Fade cascade>
            <div className="container px-5 md:px-0" id="what-we-do">
                <h3 className="mb-3.5 xl:mb-2.5 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl">
                    <span>{t("whatWeDo.title")} </span>
                    <span className="text--outlined">
                        {t("whatWeDo.emptyTitle")}
                    </span>
                </h3>
                <div className="flex flex-col mb-12 xl:mb-36 paragraph">
                    <p>{t("whatWeDo.subtitlePartOne")}</p>
                    <br />
                    <p>{t("whatWeDo.subtitlePartTwo")}</p>
                </div>
            </div>
            <div className="steplix-process">
                <div
                    className="container h-full px-5 md:px-0 grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-0"
                    id="steps"
                >
                    <div className="w-full md:w-[575px] lg:w-[942px] xl:w-[320px] row-span-2 xl:relative xl:col-start-3">
                        <div className="hidden xl:block">
                            <NumberedFeatureCard
                                number="03."
                                title={t("whatWeDo.cardThree.title")}
                                description={t(
                                    "whatWeDo.cardThree.description"
                                )}
                                divideColor="bg-red"
                                widthTitle="w-[153px]"
                            />
                        </div>
                        <div className="block xl:hidden">
                            <NumberedFeatureCard
                                number="01."
                                title={t("whatWeDo.cardOne.title")}
                                description={t("whatWeDo.cardOne.description")}
                                divideColor="bg-red"
                                widthTitle="w-[200px]"
                                isAlignedContent
                            />
                        </div>
                        <div className="xl:absolute xl:top-[10px] xl:right-[330px]">
                            <div className="xl:bg-white xl:h-[1px] xl:w-16 xl:relative xl:top-[6px]" />
                            <div className="xl:h-3 xl:w-3 xl:shadow--gray xl:bg-white xl:rounded-full xl:absolute xl:left-0" />
                        </div>
                    </div>
                    <div className="w-full md:w-[575px] lg:w-[942px] xl:w-[320px] xl:col-start-2 row-span-2  xl:relative">
                        <div className="block xl:hidden">
                            <NumberedFeatureCard
                                number="02."
                                title={t("whatWeDo.cardTwo.title")}
                                description={t("whatWeDo.cardTwo.description")}
                                divideColor="bg-red"
                                widthTitle="w-[172px]"
                                isAlignedContent
                            />
                        </div>
                        <div className="hidden xl:block">
                            <NumberedFeatureCard
                                number="02."
                                title={t("whatWeDo.cardTwo.title")}
                                description={t("whatWeDo.cardTwo.description")}
                                divideColor="bg-red"
                                widthTitle="w-[172px]"
                            />
                        </div>
                        <div className="xl:absolute xl:top-[130px] xl:left-[365px]">
                            <div className="xl:bg-white xl:h-[1px] xl:w-28 xl:relative xl:top-[6px]" />{" "}
                            <div className="xl:h-3 xl:w-3 xl:shadow--gray xl:bg-white xl:rounded-full xl:absolute xl:right-0" />
                        </div>
                    </div>
                    <div className="w-full md:w-[575px] lg:w-[942px] xl:w-[320px] xl:col-start-1 row-span-1 xl:relative">
                        <div className="block xl:hidden">
                            <NumberedFeatureCard
                                number="03."
                                title={t("whatWeDo.cardThree.title")}
                                description={t(
                                    "whatWeDo.cardThree.description"
                                )}
                                divideColor="bg-red"
                                widthTitle="w-[153px]"
                                isAlignedContent
                            />
                        </div>
                        <div className="hidden xl:block">
                            <NumberedFeatureCard
                                number="01."
                                title={t("whatWeDo.cardOne.title")}
                                description={t("whatWeDo.cardOne.description")}
                                divideColor="bg-red"
                                widthTitle="w-[200px]"
                            />
                        </div>
                        <div className="xl:absolute xl:top-[200px] xl:left-[328px]">
                            <div className="xl:bg-white xl:h-[1px] xl:w-16 xl:relative xl:top-[6px]" />{" "}
                            <div className="xl:h-3 xl:w-3 xl:shadow--gray xl:bg-white xl:rounded-full xl:absolute xl:right-0" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default WhatWeDo;
