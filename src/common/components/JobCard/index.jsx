import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useLanguageQuery } from "@/common/lib/i18n";
import ButtonApply from "../ButtonApply";

const JobCard = ({ title, country, apply, url }) => {
    const [query] = useLanguageQuery();

    return (
        <div className="rounded-2xl border-2 border-gray-100 w-full h-full flex z-20 shadow-2xl shadow-white font-black">
            <div className="xl:pl-4 pl-2 ">
                <p className="xl:text-xl text-lg xl:mt-7 mt-4 xl:w-[340px] w-[200px]">
                    {title}
                </p>
                <p className="text-base mt-4 xl:w-[150px] w-[200px]">
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
