import React from "react";

const Card = ({ number, title, seeMore, colorLine, text, colorTitle }) => {
    return (
        <div className="w-full flex gap-2">
            {number && (
                <p className="text-white md:text-[52px] text-[18px] font-semibold ">
                    {number}
                </p>
            )}
            <div>
                {title && (
                    <h2
                        className={`text-[18px] md:text-[52px] font-semibold mb-2 ${
                            colorTitle ? colorTitle : "text-white"
                        }`}
                    >
                        {title}
                    </h2>
                )}
                {colorLine && (
                    <div
                        className={`md:w-24 md:h-[10px] h-1 w-12 ${colorLine}`}
                    ></div>
                )}
                {text && (
                    <p className="md:text-2xl text-sm mt-3 text-white">
                        {text}
                    </p>
                )}
                {seeMore && (
                    <a className="md:text-2xl text-sm text-steplix-red underline decoration-2">
                        {seeMore}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
