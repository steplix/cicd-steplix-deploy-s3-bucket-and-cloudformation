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

  const isCurrentPathnameActive = (pathname) =>
    router.pathname === pathname ? "submenu--item--active" : "";

  return (
    <>
      <div
        className={`submenu px-4 header-gradient font-normal ${
          toggle ? "submenu--toggle" : ""
        }`}
      >
        <div className="flex w-full mt-4 mb-14">
          <button className="w-[126px]" onClick={() => setToggle(!toggle)}>
            <Link href={{ pathname: "/", query: query }} as="/" passHref>
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
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            "/"
          )} text-sm border-blue`}
        >
          <div className="py-4 px-3.5">
            <Link href={{ pathname: "/", query: query }} as="/" passHref>
              <a onClick={() => handleClickToggle()}>{t("navbar.item4")}</a>
            </Link>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            "/about-us"
          )} text-sm border-red`}
        >
          <div className="py-4 px-3.5">
            <Link href={{ pathname: "/about-us", query: query }} as="/about-us" passHref>
              <a onClick={() => handleClickToggle()}>{t("navbar.item0")}</a>
            </Link>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            "/what-we-do"
          )} text-sm border-yellow`}
        >
          <div className="py-4 px-3.5">
            <Link href={{ pathname: "/what-we-do", query: query }} as="/what-we-do" passHref>
              <a onClick={() => handleClickToggle()}>{t("navbar.item1")}</a>
            </Link>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            "/portfolio"
          )} text-sm border-blue`}
        >
          <div className="py-4 px-3.5">
            <Link href={{ pathname: "/portfolio", query: query }} as="/portfolio" passHref>
              <a onClick={() => handleClickToggle()}>{t("navbar.item2")}</a>
            </Link>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            "/jobs"
          )} text-sm border-red`}
        >
          <div className="py-4 px-3.5">
            <Link href={{ pathname: "/contact", query: query }} as="/contact" passHref>
              <a onClick={() => handleClickToggle()}>{t("navbar.item3")}</a>
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
