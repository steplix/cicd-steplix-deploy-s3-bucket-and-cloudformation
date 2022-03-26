import Card from "@/common/components/Card";
import React from "react";
import Link from "next/link";

const WhatWeDo = () => {
    return (
        <div>
            <div className="text-white" id="whatWeDo">
                <h2 className="text-[24px] lg:text-[54px]">
                    Pasos hacia la cima
                </h2>
                <div className="lg:w-[800px] w-[250px] lg:text-2xl text-xs mb-5 mt-3">
                    <p className="mb-3">
                        Los comienzos no son todos iguales...en este camino vos
                        elegís,
                    </p>
                    <p>¿Cuál es tu punto de partida? </p>
                </div>

                <div className="space-y-5 lg:space-y-1 lg:grid lg:grid-rows-4 lg:grid-flow-col">
                    <div className="w-[250px] lg:w-[470px] lg:row-start-3 lg:row-span-2">
                        <Card
                            number="03."
                            title="Develop & Developer"
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text="This phase consists of building and delivering the final product to officially start the business, respecting the agreed times and investment."
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-2 lg:row-span-3">
                        <Card
                            number="03."
                            title="Develop & Developer"
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text="This phase consists of building and delivering the final product to officially start the business, respecting the agreed times and investment."
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-1 lg:row-span-4">
                        <Card
                            number="03."
                            title="Develop & Developer"
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text="This phase consists of building and delivering the final product to officially start the business, respecting the agreed times and investment."
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
