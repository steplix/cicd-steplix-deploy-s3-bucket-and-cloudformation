import StepCard from "@/common/components/StepCard";
import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";

const DigitalSherpas = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="pt-44 lg:w-[1230px] w-[345px]">
            <div className="text-5xl font-black">
                <h1>
                    <spam className="title-empty">
                        {" "}
                        {texts.about_us.digitalSherpas.titleOne}{" "}
                    </spam>{" "}
                    {texts.about_us.digitalSherpas.titleTwo}
                </h1>
            </div>
            <div>
                <StepCard
                    textOne={texts.about_us.digitalSherpas.descriptionOne}
                    textTwo={texts.about_us.digitalSherpas.descriptionTwo}
                    textThree={texts.about_us.digitalSherpas.descriptionThree}
                />
            </div>
        </div>
    );
};

export default DigitalSherpas;
