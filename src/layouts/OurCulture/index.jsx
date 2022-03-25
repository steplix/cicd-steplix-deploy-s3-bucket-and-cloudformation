import Card from "@/common/components/Card";
import React from "react";

const OurCulture = () => {
    return (
        <div>
            <div className="text-white mb-28 text-left w-[290px] lg:w-[1200px]">
                <p className="text-[24px] lg:text-[54px]">
                    Porque nadie llega solo hasta la cumbre,
                </p>
                <h2 className="title-empty lg:text-[64px] text-[24px]">
                    SOMOS TU MEJOR ALIADO
                </h2>
            </div>
            <div className="lg:flex lg:gap-28 space-y-7">
                <div className="lg:w-[370px] w-[250px] mx-auto">
                    <Card
                        title="Develop & Developer"
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-blue"
                        text="This phase consists of building and delivering the final product to officially start the business, respecting the agreed times and investment."
                    />
                </div>
                <div className="lg:w-[370px] w-[250px]  mx-auto">
                    <Card
                        title="Develop & Developer"
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-red"
                        text="This phase consists of building and delivering the final product to officially start the business, respecting the agreed times and investment."
                    />
                </div>
                <div className="lg:w-[370px] w-[250px]  mx-auto">
                    <Card
                        title="Develop & Developer"
                        colorTitle="font-semibold text-white"
                        colorLine="bg-steplix-yellow"
                        text="This phase consists of building and delivering the final product to officially start the business, respecting the agreed times and investment."
                    />
                </div>
            </div>
        </div>
    );
};

export default OurCulture;
