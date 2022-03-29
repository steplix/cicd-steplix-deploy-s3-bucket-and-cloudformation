import React from "react";

const BorderCard = ({ children, lg }) => {
    return (
        <>
            {lg ? (
                <div className="border-2 border-gray-100 w-full h-full">
                    {children}
                </div>
            ) : (
                <div className=" w-full h-full">{children}</div>
            )}
        </>
    );
};

export default BorderCard;
