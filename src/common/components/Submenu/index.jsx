import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import LanguageSelector from "../LanguageSelector";

const Submenu = ({ toggle, setToggle, query }) => {
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
                className={`submenu bg-steplix-lilac ${
                    toggle ? "submenu--toggle" : ""
                }`}
            >
                <div className="flex items-start gap-x-52 mt-5 mb-[60px]">
                    <button onClick={() => setToggle(!toggle)}>
                        <Link href={{ pathname: "/", query: query }}>
                            <img
                                src="/assets/logos/submenuCompleto.svg"
                                className="h-[35px] w-]142px] lg:hidden block"
                                alt="submenu"
                            />
                        </Link>
                    </button>

                    <button className="" onClick={() => setToggle(!toggle)}>
                        <img
                            src="/assets/icons/escape.svg"
                            className="h-3 w-3 lg:hidden block"
                            alt="escape"
                        />{" "}
                    </button>
                </div>
                <div className="hover:bg-steplix-purple flex item-center text-left w-[94%] h-[48px] hover:border-l-4 hover:border-steplix-blue">
                    <div className="py-3 pl-6 ">
                        <Link href="#about-us">
                            <a onClick={() => handleClickToggle()} href="#">
                                {t("navbar.item1")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="hover:bg-steplix-purple flex item-center text-left w-[94%] h-[48px] hover:border-l-4 hover:border-steplix-red">
                    <div className="py-3 pl-6 ">
                        <Link href="#what-we-do">
                            <a onClick={() => handleClickToggle()} href="#">
                                {t("navbar.item2")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="hover:bg-steplix-purple flex item-center text-left w-[94%] h-[48px] hover:border-l-4 hover:border-steplix-yellow">
                    <div className="py-3 pl-6 ">
                        <Link href="#Our-culture">
                            <a onClick={() => handleClickToggle()} href="#">
                                {t("navbar.item3")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="hover:bg-steplix-purple flex item-center text-left w-[94%] h-[48px] hover:border-l-4 hover:border-steplix-blue">
                    <div className="hover:bg-steplix-red  w-[5px] h-[48px]" />
                    <div className="py-3 pl-6 ">
                        <Link href="#happy-clients">
                            <a
                                onClick={() => handleClickToggle()}
                                href="#happy-clients"
                            >
                                {t("navbar.item4")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="hover:bg-steplix-purple flex item-center text-left w-[94%] h-[48px] hover:border-l-4 hover:border-steplix-red">
                    <div className="py-3 pl-6 ">
                        <Link href={{ pathname: "jobs", query: query }}>
                            <a onClick={() => handleClickToggle()} href="#">
                                {t("navbar.item5")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex item-center text-left w-[94%]  ">
                    <button
                        onClick={() => handleClickToggle()}
                        className="bg-white mb-9 text-gray-900 rounded-full w-[110px] h-9 mt-3 my-2 ml-4 text-xs"
                    >
                        <a href="#contact-us">{t("navbar.item6")}</a>
                    </button>
                </div>
                <div className="flex gap-x-4 item-center text-left w-[94%] ml-7 ">
                    <LanguageSelector />
                    <p className="my-auto">
                        {query?.lang === "es"
                            ? "English version"
                            : "Version en Español"}
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
};

export default Submenu;
