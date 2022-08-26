/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ContactCard = ({
    img,
    alt,
    name,
    job,
    icon,
    iconAlt,
    borderColor,
    bgColor,
    linkCalendary,
    handleLinkedInTag
}) => {
    return (
        <div
            className={`flex justify-between items-center border-2 rounded-2xl md:w-[400px] lg:w-[600px] xl:w-[400px] p-4 md:p-5 lg:p-7 xl:p-5 ${borderColor}`}
        >
            <div className="flex items-center">
                <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] xl:w-[60px] xl:h-[60px]">
                    <img src={img} alt={alt} className="rounded-full" />
                </div>
                <div
                    className={`w-0.5 md:w-1 lg:w-1.5 xl:w-1 h-10 md:h-12 lg:h-16 mx-4 md:mx-5 ${bgColor}`}
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-2xl">{name}</p>
                    <p className="text-base">{job}</p>
                </div>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 lg:w-9 lg:h-9 xl:w-6 xl:h-6">
                <Link href={linkCalendary} onClick={handleLinkedInTag}>
                    <a target="_blank">
                        <img src={icon} alt={iconAlt} />
                    </a>
                </Link>
            </div>
        </div>
    );
};

//
// PropsTypes
//
ContactCard.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    linkCalendary: PropTypes.string.isRequired,
};

export default ContactCard;
