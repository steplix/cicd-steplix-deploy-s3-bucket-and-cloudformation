/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import LanguageSelector from "../LanguageSelector";

const Submenu = ({ toggle, setToggle, query, router }) => {
    const { t } = useTranslation();
    //
    //functions
    //
    function handleClickToggle() {
        setToggle((prevToggle) => !prevToggle);
    }
    return (
        <>
            <div
                className={`submenu bg-steplix-lilac font-medium ${
                    toggle ? "submenu--toggle" : ""
                }`}
            >
                <div className="flex items-start gap-x-52 mt-5 mb-[60px]">
                    <button onClick={() => setToggle(!toggle)}>
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/submenuCompleto.svg"
                                    className="h-[35px] w-]142px] lg:hidden block"
                                    alt="submenu"
                                />
                            </a>
                        </Link>
                    </button>

                    <button className="" onClick={() => setToggle(!toggle)}>
                        <img
                            src="/assets/img/escape.svg"
                            className="h-3 w-3 lg:hidden block"
                            alt="escape"
                        />{" "}
                    </button>
                </div>
                <div className="submenu--item item-center hover:border-steplix-blue">
                    <div className="py-3 pl-6 ">
                        <Link href="about-us">
                            <a
                                className={
                                    router.pathname === "/about-us"
                                        ? "nav--active"
                                        : ""
                                }
                                onClick={() => handleClickToggle()}
                                href="#"
                            >
                                {t("navbar.item1")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="submenu--item item-center hover:border-steplix-red">
                    <div className="py-3 pl-6 ">
                        <Link href="process">
                            <a
                                className={
                                    router.pathname === "/process"
                                        ? "nav--active"
                                        : ""
                                }
                                onClick={() => handleClickToggle()}
                                href="#"
                            >
                                {t("navbar.item2")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="submenu--item item-center hover:border-steplix-yellow">
                    <div className="py-3 pl-6 ">
                        <Link href={{ pathname: "jobs", query: query }}>
                            <a
                                className={
                                    router.pathname === "/jobs"
                                        ? "nav--active"
                                        : ""
                                }
                                onClick={() => handleClickToggle()}
                                href="#"
                            >
                                {t("navbar.item5")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex item-center text-left w-[94%]  ">
                    <button
                        onClick={() => handleClickToggle()}
                        className={`bg-white mb-9 text-gray-900 rounded-full w-[110px] h-9 mt-3 my-2 ml-4 text-xs
                        ${
                            router.pathname === "/contact"
                                ? "bg-steplix-yellow"
                                : ""
                        }
                        `}
                    >
                        <Link href={{ pathname: "contact", query: query }}>
                            <a href="#contact-us">{t("navbar.item6")}</a>
                        </Link>
                    </button>
                </div>
                <div className="flex gap-x-4 item-center text-left w-[94%] ml-7 ">
                    <LanguageSelector />
                    <p className="my-auto">
                        {query?.lang === "es"
                            ? "English versión"
                            : "Versión en español"}
                    </p>
                </div>
            </div>
        </>
    );
};

Submenu.propTypes = {
    toggle: PropTypes.bool.isRequired,
    query: PropTypes.object,
    setToggle: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
};

export default Submenu;
