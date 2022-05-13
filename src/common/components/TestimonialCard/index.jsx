/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

const TestimonialCard = ({
    image,
    imageAlt,
    witnessName,
    witnessPosition,
    witnessCompany,
    testimonial,
    cardBorderColor,
    divideColor,
}) => {
    let divideClass = "";
    switch (divideColor) {
        case "red":
            divideClass = "bg-red";
            break;
        case "blue":
            divideClass = "bg-blue";
            break;
        case "yellow":
            divideClass = "bg-yellow";
            break;

        default:
            divideClass = "bg-red";
            break;
    }
    return (
        <article
            className={`${cardBorderColor} border-2 rounded-3xl min-h-[400px] md:min-h-[370px] lg:min-h-[420px] xl:min-h-[500px] 2xl:min-h-[550px] w-full xl:w-[464px] 2xl:w-[520px] px-4 lg:px-7 xl:px-6 2xl:px-7 pt-8 lg:pt-12 xl:pt-7 2xl:pt-8`}
        >
            <div className="flex flex-col space-y-6 md:space-y-14 2xl:space-y-12">
                <div className="flex space-x-8 md:space-x-6 xl:space-x-4">
                    <div className="flex flex-col space-y-6 xl:space-y-4">
                        <img
                            className="h-[1.3rem] w-16 md:h-8 md:w-24 lg:h-11 lg:w-32 xl:h-8 xl:w-24 mt-1"
                            src={image}
                            alt={imageAlt}
                        />
                        <div
                            className={`h-1 xl:h-1.5 w-[50px] md:w-[90px] my-4 md:my-6 ${divideClass}`}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="leading-tight font-bold md:font-semibold text-3xl lg:text-5xl xl:text-3xl">
                            {witnessName}
                        </p>
                        <p className="leading-tight font-light md:font-normal text-base md:text-xl lg:text-3xl xl:text-xl">
                            {witnessPosition}{" "}
                            <span className="text-yellow">
                                {witnessCompany}
                            </span>
                        </p>
                    </div>
                </div>
                <p className="text-base md:text-xl lg:text-3xl xl:text-xl 2xl:text-3xl leading-tight">
                    {testimonial}
                </p>
            </div>
        </article>
    );
};

//
// PropsTypes
//
TestimonialCard.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    witnessName: PropTypes.string.isRequired,
    witnessPosition: PropTypes.string.isRequired,
    witnessCompany: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    cardBorderColor: PropTypes.string.isRequired,
    divideColor: PropTypes.oneOf(["red", "blue", "yellow"]).isRequired,
};

export default TestimonialCard;