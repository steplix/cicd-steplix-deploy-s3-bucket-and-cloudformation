import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import Card from "@/common/components/Card";

const OurCulture = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div id="Our-culture">
            <div className="text-white mb-28 text-left w-[290px] lg:w-[1200px]">
                <p className="text-[24px] lg:text-[54px]">
                    {texts.ourCulture.title}
                </p>
                <h2 className="title-empty lg:text-[64px] text-[24px]">
                    {texts.ourCulture.subtitle}
                </h2>
            </div>
            <div className="lg:flex lg:gap-28 space-y-7 lg:space-y-0">
                <div className="lg:w-[450px] w-[250px]mx-auto">
                    <Card
                        title={texts.ourCulture.cardOne.title}
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-blue"
                        text={texts.ourCulture.cardOne.description}
                    />
                </div>
                <div className="lg:w-[450px] w-[250px] mx-auto">
                    <Card
                        title={texts.ourCulture.cardTwo.title}
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-red"
                        text={texts.ourCulture.cardTwo.description}
                    />
                </div>
                <div className="lg:w-[450px] w-[250px] mx-auto">
                    <Card
                        title={texts.ourCulture.cardThree.title}
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-yellow"
                        text={texts.ourCulture.cardThree.description}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurCulture;
