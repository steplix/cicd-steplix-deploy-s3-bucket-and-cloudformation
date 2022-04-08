/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

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
}) => {
    return (
        <div
            className={`${borderColor} xl:w-[662px] w-[332px] xl:h-[167px] h-[84px] flex items-center border-2 rounded-2xl`}
        >
            <div className="xl:h-[100px] h-[50px] w-[50px] xl:w-[100px] xl:ml-[70px] ml-[10px]">
                <img src={img} alt={alt} />
            </div>
            <div
                className={`${bgColor} xl:w-[5px] w-[2px] xl:h-[80px] h-[40px] xl:mx-[30px] mx-[12px]`}
            />
            <div className="xl:space-y-2">
                <p className="font-bold xl:text-[32px] text-[22px]">{name}</p>
                <p className="p-steplix">{job}</p>
            </div>

            <div className="xl:w-[33px] w-[16px] xl:h-[23px] h-[13px] xl:ml-[100px] ml-[30px]">
                <Link href={linkCalendary}>
                    <a target="_blank">
                        <img src={icon} alt={iconAlt} />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ContactCard;
