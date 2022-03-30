import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import StepCard from "@/common/components/StepCard";

const HoDoWeDoIt = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="w-[340px] lg:w-[1300px] space-y-[70px]">
            <div className="">
                <StepCard
                    title={texts.process.HowDoWeDoIt.title}
                    textTwo={texts.process.HowDoWeDoIt.description}
                    colorTitle="font-semibold text-steplix-yellow"
                    colorLine="bg-steplix-red"
                />
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-y-12 lg:gap-x-7 space-y-4 lg:space-y-0">
                <StepCard
                    title={texts.process.HowDoWeDoIt.title}
                    textOne={texts.process.HowDoWeDoIt.description}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-blue"
                />
                <StepCard
                    title={texts.process.HowDoWeDoIt.title}
                    textOne={texts.process.HowDoWeDoIt.description}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-red"
                />
                <StepCard
                    title={texts.process.HowDoWeDoIt.title}
                    textOne={texts.process.HowDoWeDoIt.description}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-yellow"
                />
                <StepCard
                    title={texts.process.HowDoWeDoIt.title}
                    textOne={texts.process.HowDoWeDoIt.description}
                    colorTitle="font-semibold text-steplix-white"
                    colorLine="bg-steplix-red"
                />
            </div>
        </div>
    );
};

export default HoDoWeDoIt;
