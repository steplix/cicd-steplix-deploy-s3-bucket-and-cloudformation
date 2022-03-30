import React from "react";
import PropTypes from "prop-types";

const JobCard = ({ title, country, apply }) => {
    return (
        <div className="border-2 border-gray-100 w-full h-full flex  font-black">
            <div className="lg:pl-4 pl-2 ">
                <p className="lg:text-xl text-lg lg:mt-7 mt-4 lg:w-[340px] w-[260px]">
                    {title}
                </p>
                <p className="text-base mt-4 lg:w-[150px] w-[200px]">
                    {country}
                </p>
            </div>
            <div>
                <button className="bg-steplix-red w-[65px] h-[35px] mt-16 ">
                    {apply}
                </button>
            </div>
        </div>
    );
};
//
//PropsTypes
//
JobCard.propTypes = {
    title: PropTypes.string,
    country: PropTypes.string,
    apply: PropTypes.string,
};
export default JobCard;
