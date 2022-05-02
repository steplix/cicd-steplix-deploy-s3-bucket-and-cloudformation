/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ButtonSocial = ({ url, imgUrl, imgAlt }) => {
    return (
        <Link href={url}>
            <a target="_blank">
                <div className="inline-block relative rounded-full bg-white">
                    <span className="flex justify-center items-center h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-12 xl:w-12">
                        <img
                            src={imgUrl}
                            alt={imgAlt}
                            className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:h-6 xl:w-6"
                        />
                    </span>
                </div>
            </a>
        </Link>
    );
};

//
// PropsTypes
//
ButtonSocial.propTypes = {
    url: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

export default ButtonSocial;
