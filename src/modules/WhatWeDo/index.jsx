import React, { useContext } from "react";
import Card from "@/common/components/Card";
import { LanguageContext } from "@/common/components/LanguageContext";
import Link from "next/link";

const WhatWeDo = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div>
            <div
                className="text-white w-[290px] lg:w-[1300px] "
                id="what-we-do"
            >
                <h2 className="text-[24px] lg:text-[54px]">
                    {texts.whatWeDo.title}
                </h2>
                <div className="lg:w-[800px] w-[250px] lg:text-2xl text-xs mb-5 mt-3">
                    <p className="mb-3">{texts.whatWeDo.subtitlePartOne}</p>
                    <p>{texts.whatWeDo.subtitlePartTwo} </p>
                </div>

                <div className="space-y-5 lg:space-y-1 lg:grid lg:grid-rows-4 lg:grid-flow-col">
                    <div className="w-[250px] lg:w-[470px] lg:row-start-3 lg:row-span-2">
                        <Card
                            number="01."
                            title={texts.whatWeDo.cardOne.title}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text={texts.whatWeDo.cardOne.description}
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-2 lg:row-span-3">
                        <Card
                            number="02."
                            title={texts.whatWeDo.cardTwo.title}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text={texts.whatWeDo.cardTwo.description}
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-1 lg:row-span-4">
                        <Card
                            number="03."
                            title={texts.whatWeDo.cardThree.title}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text={texts.whatWeDo.cardThree.description}
                        />
                    </div>
                </div>
                <div className="lg:text-2xl text-sm text-steplix-yellow underline decoration-2 hidden lg:block text-center mt-16">
                    <Link href="/vermas">
                        <a>Ver mas</a>
                    </Link>{" "}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
