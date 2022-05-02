import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useLanguageQuery } from "next-export-i18n";
import ButtonApply from "../ButtonApply";

const JobCard = ({ title, country, apply, url }) => {
    const [query] = useLanguageQuery();

    return (
        <div className="rounded-2xl border-2 border-gray-100 w-full h-full flex justify-between px-6 z-20 shadow-2xl shadow-white font-black">
            <div>
                <p className="font-semibold text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-5xl xl:mt-7 mt-4 w-full">
                    {title}
                </p>
                <p className="font-normal text-base md:text-xl lg:text-3xl xl:text-xl 2xl:text-3xl mt-4 w-full">
                    {country}
                </p>
            </div>
            <div className="mt-6 xl:mt-0">
                <ButtonApply url={url} query={query} apply={apply} />
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
    url: PropTypes.string,
};
export default JobCard;
