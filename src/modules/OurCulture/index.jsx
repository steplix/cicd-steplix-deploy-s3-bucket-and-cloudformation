import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import Fade from "react-reveal/Fade";

const OurCulture = () => {
    const { t } = useTranslation();

    return (
        <Fade cascade>
            <div className="container px-5 xl:px-0" id="culture">
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
                <div className="flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-24">
                    <StepCard
                        title={t("ourCulture.cardOne.title")}
                        sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl font-semibold xl:font-bold"
                        colorTitle="font-semibold text-white"
                        colorLine="bg-blue"
                        textOne={t("ourCulture.cardOne.description")}
                        widthTextOne="xl:w-72 2xl:w-96"
                    />
                    <StepCard
                        title={t("ourCulture.cardTwo.title")}
                        sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl font-semibold xl:font-bold"
                        colorTitle="font-semibold text-white"
                        colorLine="bg-red"
                        textOne={t("ourCulture.cardTwo.description")}
                        widthTextOne="xl:w-72 2xl:w-96"
                    />
                    <StepCard
                        title={t("ourCulture.cardThree.title")}
                        sizeTitle="text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl font-semibold xl:font-bold"
                        colorTitle="font-semibold text-white"
                        colorLine="bg-yellow"
                        textOne={t("ourCulture.cardThree.description")}
                        widthTextOne="xl:w-72 2xl:w-96"
                    />
                </div>
            </div>
        </Fade>
    );
};

export default OurCulture;
