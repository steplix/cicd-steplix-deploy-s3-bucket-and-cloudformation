import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import StepCard from "@/common/components/StepCard";

const AboutUs = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <div className="lg:flex mt-[50px]" id="about-us">
            <p className="title-empty lg:text-[176px] text-5xl font-extrabold lg:mr-[130px] mb-[50px] text-center">
                steplix
            </p>
            <div className="w-[325px] lg:w-[610px]">
                <StepCard
                    title={texts.aboutUs.title}
                    colorTitle="font-bold text-white"
                    seeMore={texts.seeMore}
                    text={texts.aboutUs.description}
                />
            </div>
        </div>
    );
};

export default AboutUs;
