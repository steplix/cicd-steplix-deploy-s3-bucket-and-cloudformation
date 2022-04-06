import React from "react";
import StepCard from "@/common/components/StepCard";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const AboutUs = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <div className="section-steplix lg:flex mt-[50px]" id="about-us">
            <p className="title-empty lg:text-[176px] text-5xl font-extrabold lg:mr-[130px] mb-[50px] text-center">
                Steplix
            </p>
            <div className="w-[325px] lg:w-[610px]">
                <StepCard
                    title={t("aboutUs.title")}
                    emptyTitle={t("aboutUs.emptyTitle")}
                    colorTitle="font-bold text-white"
                    seeMore={t("seeMore")}
                    textOne={t("aboutUs.description")}
                />
            </div>
        </div>
    );
};

export default AboutUs;
