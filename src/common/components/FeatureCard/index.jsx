/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({
    title,
    description,
    divideColor,
    isMainTitle,
    widthTitle,
    widthDescription,
    rightImage,
    altRightImage,
    sizeRightImage,
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
        <article className="flex flex-col">
            <div className="flex space-x-4 md:space-x-6">
                <div className="flex flex-col">
                    {isMainTitle ? (
                        <h2 className="text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl text-yellow font-semibold">
                            {title}
                        </h2>
                    ) : (
                        <h4
                            className={`text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl font-semibold ${
                                widthTitle ? widthTitle : ""
                            }`}
                        >
                            {title}
                        </h4>
                    )}
                    <div
                        className={`h-1 xl:h-1.5 w-[50px] md:w-[90px] my-4 md:my-6 ${divideClass}`}
                    />
                </div>
                <div className={sizeRightImage}>
                    <img
                        src={rightImage}
                        alt={altRightImage}
                        className={sizeRightImage}
                    />
                </div>
            </div>
            <p
                className={`text-base md:text-xl lg:text-3xl xl:text-xl 2xl:text-3xl leading-tight ${
                    widthDescription ? widthDescription : ""
                }`}
            >
                {description}
            </p>
        </article>
    );
};

//
// PropsTypes
//
FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    divideColor: PropTypes.oneOf(["red", "blue", "yellow"]).isRequired,
    isMainTitle: PropTypes.bool,
    widthTitle: PropTypes.string,
    widthDescription: PropTypes.string,
    rightImage: PropTypes.string,
    altRightImage: PropTypes.string,
    sizeRightImage: PropTypes.string,
};

export default FeatureCard;
