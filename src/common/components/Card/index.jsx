import React from "react";
import PropTypes from "prop-types";

const Card = ({ number, title, seeMore, colorLine, text, colorTitle }) => {
    return (
        <div className="w-full flex gap-2">
            {number && (
                <p className="text-white lg:text-[52px] text-[18px] font-semibold">
                    {number}
                </p>
            )}
            <div>
                {title && (
                    <p
                        className={`text-[18px] lg:text-[52px] mb-2 ${
                            colorTitle ? colorTitle : "text-white font-semibold"
                        }`}
                    >
                        {title}
                    </p>
                )}
                {colorLine && (
                    <div
                        className={`lg:w-24 lg:h-[10px] h-1 w-12 ${colorLine}`}
                    ></div>
                )}
                {text && (
                    <p className="lg:text-2xl text-sm mt-3 text-white">
                        {text}
                    </p>
                )}
                {seeMore && (
                    <button className="lg:text-2xl text-sm text-steplix-red underline decoration-2 mt-2">
                        {seeMore}
                    </button>
                )}
            </div>
        </div>
    );
};

//
//PropsTypes
//
Card.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string.isRequired,
    seeMore: PropTypes.string,
    colorLine: PropTypes.string,
    colorTitle: PropTypes.string,
    text: PropTypes.string.isRequired,
};
export default Card;
