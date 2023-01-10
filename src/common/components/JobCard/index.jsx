import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useLanguageQuery } from "next-export-i18n";
import ButtonApply from "../ButtonApply";
import ShadowCard from "@/common/components/ShadowCard";

const JobCard = ({ title, country, apply, url, locale }) => {
    const [query] = useLanguageQuery();

    return (
        <ShadowCard>
            <article className="flex justify-between">
                <div className="flex flex-col">
                    <p className="font-semibold text-xl md:text-3xl lg:text-5xl xl:text-3xl w-full">
                        {title}
                    </p>
                    <p className="font-normal text-base md:text-xl lg:text-3xl xl:text-xl w-full">
                        {country}
                    </p>
                </div>
                <ButtonApply url={url} query={query} apply={apply} locale={locale} />
            </article>
        </ShadowCard>
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
