import Card from "@/common/components/Card";
import React from "react";

const AboutUs = () => {
    return (
        <div className="lg:flex mt-[50px]" id="aboutUs">
            <p className="title-empty lg:text-[176px] text-5xl font-extrabold lg:mr-[130px] mb-[50px] text-center">
                steplix
            </p>
            <div className="w-[325px] lg:w-[610px]">
                <Card
                    title="sobre nosotros"
                    colorTitle="font-bold text-white"
                    seeMore="see More"
                    text="Somos el aliado digital que co-creará la mejor ruta para escalar
                esa idea de negocio hasta su pico más alto y te acompañará en
                cada paso de esta travesía, minimizando el riesgo y ampliﬁcando
                el impacto, en el tiempo acordado."
                />
            </div>
        </div>
    );
};

export default AboutUs;
