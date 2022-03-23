import React from "react";

const Card = ({ number, title, seeMore, colorLine, text, colorTitle }) => {
    return (
        <div className="w-full flex gap-2">
            {number && (
                <p className="text-white lg:text-[52px] text-[18px] font-semibold ">
                    {number}
                </p>
            )}
            <div>
                {title && (
                    <p
                        className={`text-[18px] lg:text-[52px] font-semibold mb-2 ${
                            colorTitle ? colorTitle : "text-white"
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

export default Card;
