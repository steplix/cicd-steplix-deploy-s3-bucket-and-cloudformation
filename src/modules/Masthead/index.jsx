import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import Image from "next/image";
import chevronDown from "@/public/assets/icons/chevronDown.svg";

const Masthead = () => {
    const { texts } = useContext(LanguageContext);

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
                        {texts.masthead.titlePartOne} <br />
                        {texts.masthead.titlePartTwo}
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
                        {texts.masthead.subtitle}
                    </p>
                </div>
                <div className="absolute text-white lg:top-[90vh] top-[44vh]  left-[40%] lg:left-[50%]">
                    <a href="#about-us">
                        <div className="border-steplix-yellow h-[44px] w-7 border-[1px] rounded-2xl text-center flex mx-auto mb-2 items-center">
                            <div className="relative w-[14px] h-[7px] mx-auto">
                                <Image
                                    src={chevronDown}
                                    alt="logo"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        <p>Scroll down</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Masthead;
