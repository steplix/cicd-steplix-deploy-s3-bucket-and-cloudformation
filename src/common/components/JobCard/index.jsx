import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useLanguageQuery } from "next-export-i18n";
import ButtonApply from "../ButtonApply";

const JobCard = ({ title, country, apply, url }) => {
    const [query] = useLanguageQuery();

    return (
        <div className="rounded-2xl border-2 border-gray-100 w-full h-full flex z-20 shadow-2xl shadow-white font-black">
            <div className="lg:pl-4 pl-2 ">
                <p className="lg:text-xl text-lg lg:mt-7 mt-4 lg:w-[340px] w-[260px]">
                    {title}
                </p>
                <p className="text-base mt-4 lg:w-[150px] w-[200px]">
                    {country}
                </p>
            </div>
            <ButtonApply url={url} query={query} apply={apply} />
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
    url: PropTypes.string,
};
export default JobCard;
