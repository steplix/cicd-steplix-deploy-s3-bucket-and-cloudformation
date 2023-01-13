/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomNextLink from "@/common/components/CustomNextLink";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import LanguageSelector from "../LanguageSelector";

const Submenu = ({ toggle, setToggle }) => {
  const {query: { locale }, asPath, pathname: routerPathname } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  //
  // Functions
  //
  function handleClickToggle() {
    setToggle((prevToggle) => !prevToggle);
  }

  const isCurrentPathnameActive = (pathname) => {
    const pathnameToTest = new RegExp(pathname)
    if (pathname.length > 1) {
      return pathnameToTest.test(asPath) ? "submenu--item--active" : "";
    }

    return pathname === routerPathname ? "submenu--item--active" : "";   
  }

  return (
    <>
      <div
        className={`submenu header-gradient font-normal ${
          toggle ? "submenu--toggle" : ""
        }`}
      >
        <div className="flex container w-full mt-4 mb-14">
          <button className="w-[126px]" onClick={() => setToggle(!toggle)}>
            <CustomNextLink to="/">
              <a>
                <img
                  src="/assets/img/submenuCompleto.svg"
                  className="h-[31px] w-[126px] block xl:hidden"
                  alt="submenu"
                />
              </a>
            </CustomNextLink>
          </button>
        </div>
        <div className="container">
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            "/"
          )} text-sm border-blue`}
        >
          <div className="py-4 px-3.5">
            <CustomNextLink to="/">
              <a onClick={() => handleClickToggle()}>{t("navbar.item4.route")}</a>
            </CustomNextLink>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            'about-us'
          )} text-sm border-red`}
        >
          <div className="py-4 px-3.5">
            <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
              <a onClick={() => handleClickToggle()}>{t("navbar.item0.route")}</a>
            </CustomNextLink>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            'what-we-do'
          )} text-sm border-yellow`}
        >
          <div className="py-4 px-3.5">
            <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
              <a onClick={() => handleClickToggle()}>{t("navbar.item1.route")}</a>
            </CustomNextLink>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            'portfolio'
          )} text-sm border-blue`}
        >
          <div className="py-4 px-3.5">
            <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
              <a onClick={() => handleClickToggle()}>{t("navbar.item2.route")}</a>
            </CustomNextLink>
          </div>
        </div>
        <div
          className={`flex items-center submenu--item ${isCurrentPathnameActive(
            'contact'
          )} text-sm border-red`}
        >
          <div className="py-4 px-3.5">
            <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
              <a onClick={() => handleClickToggle()}>{t("navbar.item3.route")}</a>
            </CustomNextLink>
          </div>
        </div>
        <div className="flex gap-x-4 w-full py-4 px-3.5">
          <LanguageSelector sm />
        </div>
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
  setToggle: PropTypes.func.isRequired,
};

export default Submenu;
