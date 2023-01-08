/* eslint-disable @next/next/no-img-element */
import React from "react";
import LanguageSelector from "@/common/components/LanguageSelector";
import Submenu from "@/common/components/Submenu";
import CustomNextLink from "@/common/components/CustomNextLink";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "@/common/lib/i18n";
import { useRouter } from "next/router";
import { routesMap } from "@/common/utils/constants";
import { getOutlinedTitle } from "@/common/utils/methods";

const Navbar = () => {
  const router = useRouter();
  const [query] = useLanguageQuery(router?.query?.locale);
  const { t } = useTranslation(query?.locale);
  const routeTitle = routesMap[router.pathname]?.title;

  const isCurrentPathnameActive = (pathname) => router.asPath === pathname ? "nav--link--active" : "";
      
  //
  // State
  //
  const [sticky, setSticky] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  //
  // Effects
  //
  React.useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      setTimeout(() => {
        setSticky(currentPosition > 52 ? true : !(currentPosition === 0));
      }, 5);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    toggle ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [toggle]);



  return (
    <div className="sticky top-0 w-full text-white z-50">
      {/* navbar mobile */}
      <nav className="flex flex-col lg:hidden">
        <div>
          <Submenu
            router={router}
            toggle={toggle}
            setToggle={setToggle}
          />
        </div>
        <div className="flex flex-col w-full header-gradient">
          <div className="container flex relative justify-between items-center w-full h-[65px] px-5 md:px-0">
            {/* logo mobile */}
            <div className="items-center justify-center flex">
              <CustomNextLink to="/">
                <a>
                  <img
                    src="/assets/img/logo-navbar.svg"
                    alt="logo"
                    className="w-[75px] h-5"
                  />
                </a>
              </CustomNextLink>
            </div>
            {/* button menu mobile */}
            <div className="z-50">
              <button
                className="w-[24px] h-[24px] flex flex-col items-center justify-center z-50 lg:hidden"
                onClick={() => setToggle(!toggle)}
              >
                <span className={`line ${toggle && "line--toggle"}`} />
                <span className={`line ${toggle && "line--toggle"}`} />
                <span className={`line ${toggle && "line--toggle"}`} />
              </button>
            </div>
          </div>
          {routeTitle ? (
            <div className="container h-[80px] md:h-[100px] flex items-center px-5 md:px-0">
              <h1 className="font-extrabold text-[32px] font-poppins tracking-[0.8px]">
                {getOutlinedTitle(t(routeTitle)).title + " "}
                <span
                  className="font-bold text-outlined"
                  data-content={getOutlinedTitle(t(routeTitle))?.outlined}
                >
                  {getOutlinedTitle(t(routeTitle))?.outlined}
                </span>
              </h1>
            </div>
          ) : null}
        </div>
      </nav>

      {/* navbar desktop */}
      <nav
        className={`hidden lg:flex lg:flex-col lg:justify-center w-full header-gradient`}
      >
        <div className="container flex justify-between items-center h-[100px]">
          {/* logo desktop */}
          <CustomNextLink to="/">
            <a>
              <img
                src="/assets/img/logo-navbar.svg"
                alt="logo"
                className="w-[80px] h-[30px]"
              />
            </a>
          </CustomNextLink>
          {/* menu options desktop */}
          <div className="flex justify-end items-center space-x-8 font-normal">
            <CustomNextLink to={`/${query?.lang}/about-us`}>
              <a
                className={`nav--link nav--link--blue ${isCurrentPathnameActive(
                  `/${query?.lang}/about-us`
                )}`}
              >
                {t("navbar.item0")}
              </a>
            </CustomNextLink>
            <CustomNextLink to={`/${query?.lang}/what-we-do`}>
              <a
                className={`nav--link nav--link--red ${isCurrentPathnameActive(
                  `/${query?.lang}/what-we-do`
                )}`}
              >
                {t("navbar.item1")}
              </a>
            </CustomNextLink>
            <CustomNextLink to={`/${query?.lang}/portfolio`}>
              <a
                className={`nav--link nav--link--yellow ${isCurrentPathnameActive(
                  `/${query?.lang}/portfolio`
                )}`}
              >
                {t("navbar.item2")}
              </a>
            </CustomNextLink>
            <CustomNextLink to="contact">
              <a
                className={`nav--link nav--link--blue ${isCurrentPathnameActive(
                  "/contact"
                )}`}
              >
                {t("navbar.item3")}
              </a>
            </CustomNextLink>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
