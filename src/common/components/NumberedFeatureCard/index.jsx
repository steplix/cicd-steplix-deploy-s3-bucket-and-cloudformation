import React from "react";
import PropTypes from "prop-types";

const Feature = ({
    number,
    title,
    description,
    divideClass,
    widthTitle,
    widthDescription,
}) => (
    <article className="flex flex-col">
        <div className="flex space-x-4 md:space-x-6 xl:space-x-4">
            <p className="font-bold text--outlined !tracking-normal text-7xl md:text-10xl lg:text-13xl xl:text-10xl 2xl:text-13xl">
                {number}
            </p>
            <div className="flex flex-col">
                <h4
                    className={`text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl text-yellow font-semibold ${
                        widthTitle ? widthTitle : ""
                    }`}
                >
                    {title}
                </h4>
                <div
                    className={`h-1 xl:h-1.5 w-[50px] md:w-[90px] my-4 md:my-6 ${divideClass}`}
                />
            </div>
        </div>
        <p
            className={`text-base md:text-xl lg:text-3xl xl:text-xl 2xl:text-3xl leading-tight ${
                widthDescription ? widthDescription : ""
            } whitespace-pre-line`}
        >
            {description}
        </p>
    </article>
);

const AlignedFeature = ({
    number,
    title,
    description,
    divideClass,
    widthTitle,
    widthDescription,
}) => (
    <article className="flex space-x-2.5 md:space-x-6 xl:space-x-4">
        <p className="font-bold text--outlined !tracking-normal text-7xl md:text-10xl lg:text-13xl xl:text-10xl 2xl:text-13xl">
            {number}
        </p>
        <div className="flex flex-col">
            <h4
                className={`text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl text-yellow font-semibold ${
                    widthTitle ? widthTitle : ""
                }`}
            >
                {title}
            </h4>
            <div
                className={`h-1 xl:h-1.5 w-[50px] md:w-[90px] my-4 md:my-6 ${divideClass}`}
            />
            <p
                className={`text-base md:text-xl lg:text-3xl xl:text-xl 2xl:text-3xl leading-tight ${
                    widthDescription ? widthDescription : ""
                }`}
            >
                {description}
            </p>
        </div>
    </article>
);

const NumberedFeatureCard = ({
    number,
    title,
    description,
    divideColor,
    widthTitle,
    widthDescription,
    isAlignedContent,
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
    return isAlignedContent ? (
        <AlignedFeature
            number={number}
            title={title}
            description={description}
            divideClass={divideClass}
            widthTitle={widthTitle}
            widthDescription={widthDescription}
        />
    ) : (
        <Feature
            number={number}
            title={title}
            description={description}
            divideClass={divideClass}
            widthTitle={widthTitle}
            widthDescription={widthDescription}
        />
    );
};

//
// PropsTypes
//
NumberedFeatureCard.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    divideColor: PropTypes.oneOf(["red", "blue", "yellow"]).isRequired,
    widthTitle: PropTypes.string,
    widthDescription: PropTypes.string,
    isAlignedContent: PropTypes.bool,
};

export default NumberedFeatureCard;
