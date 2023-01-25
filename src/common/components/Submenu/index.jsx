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
        <CustomNextLink to="/">
          <div
            className={`flex items-center submenu--item ${isCurrentPathnameActive(
              "/"
            )} text-sm border-blue`}
            onClick={() => handleClickToggle()}
          >
            <div className="py-4 px-3.5">
                <a>{t("navbar.item4.route")}</a>
            </div>
          </div>
        </CustomNextLink>
        <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
          <div
            className={`flex items-center submenu--item ${isCurrentPathnameActive(
              'about-us'
            )} text-sm border-red`}
            onClick={() => handleClickToggle()}
          >
            <div className="py-4 px-3.5">
                <a>{t("navbar.item0.route")}</a>
            </div>
          </div>
        </CustomNextLink>
        <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
          <div
            className={`flex items-center submenu--item ${isCurrentPathnameActive(
              'what-we-do'
            )} text-sm border-yellow`}
            onClick={() => handleClickToggle()}
          >
            <div className="py-4 px-3.5">
                <a>{t("navbar.item1.route")}</a>
            </div>
          </div>
        </CustomNextLink>
        <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
          <div
            className={`flex items-center submenu--item ${isCurrentPathnameActive(
              'portfolio'
            )} text-sm border-blue`}
            onClick={() => handleClickToggle()}
          >
            <div className="py-4 px-3.5">
                <a>{t("navbar.item2.route")}</a>
            </div>
          </div>
        </CustomNextLink>
        <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
          <div
            className={`flex items-center submenu--item ${isCurrentPathnameActive(
              'contact'
            )} text-sm border-red`}
            onClick={() => handleClickToggle()}
          >
            <div className="py-4 px-3.5">
                <a>{t("navbar.item3.route")}</a>
            </div>
          </div>
        </CustomNextLink>
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
