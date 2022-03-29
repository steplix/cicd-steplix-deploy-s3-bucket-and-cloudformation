import React from "react";

const BorderCard = ({ children, lg }) => {
    return (
        <>
            {lg ? (
                <div className="lg:border-2 lg:border-gray-100 w-full h-full">
                    {children}
                </div>
            ) : (
                <div className="border-2 border-gray-100 w-full h-full">
                    {children}
                </div>
            )}
        </>
    );
};
//
//PropsTypes
//
BorderCard.propTypes = {
    children: PropTypes.elementType.isRequired,
    lg: PropTypes.bool,
};

export default BorderCard;
