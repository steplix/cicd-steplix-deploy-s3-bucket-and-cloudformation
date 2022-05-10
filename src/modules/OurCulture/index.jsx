import React from "react";
import { useTranslation } from "next-export-i18n";
import FeatureCard from "@/common/components/FeatureCard";
import Fade from "react-reveal/Fade";

const OurCulture = () => {
    const { t } = useTranslation();

    return (
        <Fade cascade>
            <div className="container px-5 md:px-0" id="culture">
                <div
                    id="our-culture"
                    className="mb-10 2xl:mb-28 xl:mt-14 2xl:mt-24 text-left"
                >
                    <p className="text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl leading-6 xl:leading-10 font-medium xl:mb-2">
                        {t("ourCulture.title")}
                    </p>
                    <h2 className="mb-6 xl:mb-14 font-black text-2xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                        <span>{t("ourCulture.subtitle")} </span>
                        <span className="text-yellow text--outlined">
                            {t("ourCulture.emptySubtitle")}
                        </span>
                    </h2>
                </div>
                <div className="flex flex-col xl:flex-row space-y-10 xl:space-y-0 xl:space-x-20 2xl:space-x-16">
                    <FeatureCard
                        title={t("ourCulture.cardOne.title")}
                        description={t("ourCulture.cardOne.description")}
                        divideColor="blue"
                        widthTitle="xl:w-[196px] 2xl:w-[261px]"
                        widthDescription="xl:w-[305px] 2xl:w-[365px]"
                    />
                    <FeatureCard
                        title={t("ourCulture.cardTwo.title")}
                        description={t("ourCulture.cardTwo.description")}
                        divideColor="red"
                        widthTitle="xl:w-[196px] 2xl:w-[261px]"
                        widthDescription="xl:w-[305px] 2xl:w-[365px]"
                    />
                    <FeatureCard
                        title={t("ourCulture.cardThree.title")}
                        description={t("ourCulture.cardThree.description")}
                        divideColor="yellow"
                        widthTitle="xl:w-[196px] 2xl:w-[261px]"
                        widthDescription="xl:w-[305px] 2xl:w-[365px]"
                    />
                </div>
            </div>
        </Fade>
    );
};

export default OurCulture;
