/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useTranslation } from "next-export-i18n";
import LanguageSelector from "../LanguageSelector";

const Submenu = ({ toggle, setToggle, query, router }) => {
    const { t } = useTranslation();
    //
    // Functions
    //
    function handleClickToggle() {
        setToggle((prevToggle) => !prevToggle);
    }

    const isCurrentPathnameActive = pathname => router.pathname === pathname ? 'submenu--item--active' : '' 

    return (
        <>
            <div
                className={`submenu px-4 header-gradient font-normal ${
                    toggle ? "submenu--toggle" : ""
                }`}
            >
                <div className="flex w-full mt-4 mb-14">
                    <button
                        className="w-[126px]"
                        onClick={() => setToggle(!toggle)}
                    >
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/submenuCompleto.svg"
                                    className="h-[31px] w-[126px] block xl:hidden"
                                    alt="submenu"
                                />
                            </a>
                        </Link>
                    </button>
                </div>
                <div className={`flex items-center submenu--item ${isCurrentPathnameActive("/about-us")} text-base border-blue`}>
                    <div className="py-4 px-3.5">
                        <Link href={{ pathname: "/about-us", query: query }}>
                            <a onClick={() => handleClickToggle()}>
                                {t("navbar.item0")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`flex items-center submenu--item ${isCurrentPathnameActive("/stack")} text-base border-red`}>
                    <div className="py-4 px-3.5">
                        <Link href={{ pathname: "/stack", query: query }}>
                            <a onClick={() => handleClickToggle()}>
                                {t("navbar.item1")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`flex items-center submenu--item ${isCurrentPathnameActive("/process")} text-base border-yellow`}>
                    <div className="py-4 px-3.5">
                        <Link href={{ pathname: "/process", query: query }}>
                            <a onClick={() => handleClickToggle()}>
                                {t("navbar.item2")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`flex items-center submenu--item ${isCurrentPathnameActive("/jobs")} text-base border-blue`}>
                    <div className="py-4 px-3.5">
                        <Link href={{ pathname: "/jobs", query: query }}>
                            <a onClick={() => handleClickToggle()}>
                                {t("navbar.item5")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-x-4 w-full py-4 px-3.5">
                    <LanguageSelector sm />
                </div>
            </div>
        </>
    );
};

//
// Proptypes
//
Submenu.propTypes = {
    toggle: PropTypes.bool.isRequired,
    query: PropTypes.object,
    setToggle: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
};

export default Submenu;
