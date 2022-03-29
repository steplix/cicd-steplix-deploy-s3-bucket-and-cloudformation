import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import StepCard from "@/common/components/StepCard";

const Philosophy = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="pt-16 lg:w-[1230px] w-[345px]">
            <div className="mb-14">
                <StepCard
                    textOne={texts.about_us.philosophy.description}
                    colorTitle="title-empty"
                    title={texts.about_us.philosophy.title}
                />
            </div>
        </div>
    );
};

export default Philosophy;
