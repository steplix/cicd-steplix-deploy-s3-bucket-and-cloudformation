/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

const ImageFeatureCard = ({
    image,
    imageAlt,
    imageSize,
    description,
    divideColor,
}) => {
    return (
        <article className="flex flex-col space-y-6">
            <div className="flex flex-col justify-between min-h-[75px]">
                <img className={imageSize} src={image} alt={imageAlt} />
                <div
                    className={`h-1 xl:h-1.5 w-[50px] md:w-[90px] ${divideColor}`}
                />
            </div>
            <p className="paragraph">{description}</p>
        </article>
    );
};

//
// PropsTypes
//
ImageFeatureCard.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    divideColor: PropTypes.oneOf(["bg-red", "bg-blue", "bg-yellow"]).isRequired,
};

export default ImageFeatureCard;
