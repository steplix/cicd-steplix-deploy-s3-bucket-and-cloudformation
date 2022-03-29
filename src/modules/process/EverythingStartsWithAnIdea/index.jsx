import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import StepCard from "@/common/components/StepCard";
const EverythingStartsWithAnIdea = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="pt-44 lg:w-[1330px] w-[345px]">
            <StepCard
                title={texts.process.everythingStartsWithAnIdea.title}
                colorTitle="font-bold text-white"
                textOne={
                    texts.process.everythingStartsWithAnIdea.descriptionOne
                }
                textTwo={
                    texts.process.everythingStartsWithAnIdea.descriptionTwo
                }
                textThree={
                    texts.process.everythingStartsWithAnIdea.descriptionThree
                }
                textFour={
                    texts.process.everythingStartsWithAnIdea.descriptionFour
                }
            />
        </div>
    );
};

export default EverythingStartsWithAnIdea;
