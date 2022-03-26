import React from "react";

const Masthead = () => {
    return (
        <div>
            <div className="banner lg:h-screen h-[450px]" id="masthead">
                <div className="absolute z-0 ml-4 lg:ml-44 mt-40 lg:mt-96">
                    <h1
                        className="
              text-white
              font-semibold
              text-2xl
              md:text-5xl
              lg:text-8xl
              mb-4
              md:mb-8
              lg:mb-6
            "
                    >
                        Sherpas de <br />
                        negocios digitales
                    </h1>
                    <p
                        className="
              text-white text-xs
              md:text-sm
              lg:text-3xl
              w-[325px]
              md:w-80
              lg:w-lgTexto
              lg:w-[775px]
            "
                    >
                        Estamos aquí para co-crear el camino que llevará a tu
                        negocio a la cima
                    </p>
                </div>
                <div className="button-banner absolute text-white">
                    <div className="scroll-down">
                        <a href="#about-us">Bajar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Masthead;
