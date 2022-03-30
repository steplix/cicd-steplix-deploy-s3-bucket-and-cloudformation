import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div
            className="lg:flex mt-[50px] lg:w-[1230px] w-[345px]"
            id="about-us"
        >
            <p className="title-empty lg:text-[176px] text-5xl font-extrabold lg:mr-[130px] mb-[50px] text-center">
                steplix
            </p>
            <div className="w-[325px] lg:w-[610px]">
                <StepCard
                    title={t("aboutUs.title")}
                    colorTitle="font-bold text-white"
                    seeMore={t("seeMore")}
                    textOne={t("aboutUs.description")}
                />
            </div>
        </div>
    );
};

export default AboutUs;
