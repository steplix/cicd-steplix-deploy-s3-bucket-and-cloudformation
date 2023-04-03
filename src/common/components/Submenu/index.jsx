/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomNextLink from "@/common/components/CustomNextLink";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import LanguageSelector from "../LanguageSelector";
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      {
        toggle ? (
          <motion.div className="container mt-8 relative z-10" 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh', transition: { ease: "linear", duration: 0.25 } }}
          exit={{ opacity: 0, height: 0, transition: { ease: "linear", duration: 0.25 } }}>
          <CustomNextLink to="/">
            <button
              className={`flex items-center submenu--item ${isCurrentPathnameActive(
                "/"
              )} text-sm border-blue`}    
              onClick={() => handleClickToggle()}
            >
              <div className="py-4 px-3.5">
                  <a aria-label={t("navbar.item0.ariaLabel")}>{t("navbar.item0.route")}</a>
              </div>
            </button>
          </CustomNextLink>
          <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
            <button
              className={`flex items-center submenu--item ${isCurrentPathnameActive(
                'about-us'
              )} text-sm border-red`}
              onClick={() => handleClickToggle()}
            >
              <div className="py-4 px-3.5">
                  <a aria-label={t("navbar.item1.ariaLabel")}>{t("navbar.item1.route")}</a>
              </div>
            </button>
          </CustomNextLink>
          <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
            <button
              className={`flex items-center submenu--item ${isCurrentPathnameActive(
                'what-we-do'
              )} text-sm border-yellow`}
              onClick={() => handleClickToggle()}
            >
              <div className="py-4 px-3.5">
                  <a aria-label={t("navbar.item2.ariaLabel")}>{t("navbar.item2.route")}</a>
              </div>
            </button>
          </CustomNextLink>
          <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
            <button
              className={`flex items-center submenu--item ${isCurrentPathnameActive(
                'portfolio'
              )} text-sm border-blue`}
              onClick={() => handleClickToggle()}
            >
              <div className="py-4 px-3.5">
                  <a aria-label={t("navbar.item3.ariaLabel")}>{t("navbar.item3.route")}</a>
              </div>
            </button>
          </CustomNextLink>
          <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
            <button
              className={`flex items-center submenu--item ${isCurrentPathnameActive(
                'contact'
              )} text-sm border-red`}
              onClick={() => handleClickToggle()}
            >
              <div className="py-4 px-3.5">
                  <a aria-label={t("navbar.item4.ariaLabel")}>{t("navbar.item4.route")}</a>
              </div>
            </button>
          </CustomNextLink>
          <div className="flex gap-x-4 w-full py-4 px-3.5">
            <LanguageSelector sm />
          </div>   
        </motion.div>
        ) : null
      }
      </AnimatePresence>
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
