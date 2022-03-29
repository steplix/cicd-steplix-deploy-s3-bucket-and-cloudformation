import Carousel from "@/common/components/Carousel";
import React from "react";

const HappyClients = () => {
    return (
        <section className="w-[335px] lg:w-[1390px]  text-left" id="clients">
            <div>
                <h2 className="text-[24px] lg:text-[54px] text-white mb-10">
                    Clientes felices
                </h2>
                <Carousel />
            </div>
        </section>
    );
};

export default HappyClients;
