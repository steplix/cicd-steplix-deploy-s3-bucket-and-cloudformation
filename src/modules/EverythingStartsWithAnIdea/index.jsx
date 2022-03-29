import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
const EverythingStartsWithAnIdea = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="py-44 space-y-5 lg:w-[1330px] w-[345px] text-[14px] lg:text-[24px]">
            <h1 className="text-[24px] lg:text-[54px] font-extrabold">
                {texts.process.everythingStartsWithAnIdea.title}
            </h1>
            <p>{texts.process.everythingStartsWithAnIdea.descriptionOne}</p>
            <p>{texts.process.everythingStartsWithAnIdea.descriptionTwo}</p>
            <p>{texts.process.everythingStartsWithAnIdea.descriptionThree}</p>
            <p>{texts.process.everythingStartsWithAnIdea.descriptionFour}</p>
        </div>
    );
};

export default EverythingStartsWithAnIdea;
