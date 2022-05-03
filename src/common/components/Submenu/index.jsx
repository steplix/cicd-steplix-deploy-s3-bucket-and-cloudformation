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

    return (
        <>
            <div
                className={`submenu px-4 bg-purple font-medium ${
                    toggle ? "submenu--toggle" : ""
                }`}
            >
                <div className="flex w-full mt-8 mb-14">
                    <button
                        className="w-[142px]"
                        onClick={() => setToggle(!toggle)}
                    >
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/submenuCompleto.svg"
                                    className="h-[35px] w-[142px] block xl:hidden"
                                    alt="submenu"
                                />
                            </a>
                        </Link>
                    </button>
                </div>
                <div className="submenu--item hover:border-blue">
                    <div className="text-xs md:text-base py-4 px-3.5">
                        <Link href={{ pathname: "/about-us", query: query }}>
                            <a
                                className={
                                    router.pathname === "/about-us"
                                        ? "nav--active"
                                        : ""
                                }
                                onClick={() => handleClickToggle()}
                            >
                                {t("navbar.item1")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="submenu--item hover:border-red">
                    <div className="text-xs md:text-base py-4 px-3.5">
                        <Link href={{ pathname: "/process", query: query }}>
                            <a
                                className={
                                    router.pathname === "/process"
                                        ? "nav--active"
                                        : ""
                                }
                                onClick={() => handleClickToggle()}
                            >
                                {t("navbar.item2")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="submenu--item hover:border-yellow">
                    <div className="text-xs md:text-base py-4 px-3.5">
                        <Link href={{ pathname: "/jobs", query: query }}>
                            <a
                                className={
                                    router.pathname === "/jobs"
                                        ? "nav--active"
                                        : ""
                                }
                                onClick={() => handleClickToggle()}
                            >
                                {t("navbar.item5")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full py-4 px-3.5">
                    <Link href={{ pathname: "/contact", query: query }}>
                        <a>
                            <button
                                onClick={() => handleClickToggle()}
                                className={`bg-white text-xs md:text-base text-black rounded-full w-[110px] md:w-[144px] h-9 md:h-10
                        ${router.pathname === "/contact" ? "bg-yellow" : ""}
                        `}
                            >
                                {t("navbar.item6")}
                            </button>
                        </a>
                    </Link>
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
