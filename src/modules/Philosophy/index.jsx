import StepCard from "@/common/components/StepCard";
import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";

const Philosophy = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="pt-16 lg:w-[1230px] w-[345px]">
            <div>
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
