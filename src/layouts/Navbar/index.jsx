/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import LanguageSelector from '@/common/components/LanguageSelector';
import Submenu from '@/common/components/Submenu';
import CustomNextLink from '@/common/components/CustomNextLink';
import { useTranslation } from '@/common/lib/i18n';
import { routesMap } from '@/common/utils/constants';
import { getOutlinedTitle } from '@/common/utils/methods';

const Navbar = () => {
  const {
    query: { locale },
    pathname,
    asPath,
    // route,
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);
  const routeTitle = routesMap[pathname.substring(10)]?.title;

  const isCurrentPathnameActive = (pathname) => {
    const pathnameToTest = new RegExp(pathname);

    return pathnameToTest.test(asPath) ? 'nav--link--active' : '';
  };

  //
  // State
  //
  // eslint-disable-next-line no-unused-vars
  const [sticky, setSticky] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [colorChange, setColorchange] = React.useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };

  // window.addEventListener('scroll', changeNavbarColor);

  //
  // Effects
  //
  React.useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.scrollY;

      setTimeout(() => {
        setSticky(currentPosition > 52 ? true : !(currentPosition === 0));
        setColorchange(currentPosition > 0 ? true : false);
      }, 5);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    toggle ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [toggle]);

  return (
    <div className="sticky top-0 w-full text-white z-50">
      {/* navbar mobile */}
      <nav className="flex flex-col lg:hidden">
        <div
          className={`flex flex-col w-full absolute top-0  ${
            colorChange ? 'header-gradient ' : ''
          }`}
        >
          <div className="container flex justify-between items-center w-full h-[56px] sm:h-[62px]">
            {/* logo mobile */}
            <div className="items-center justify-center flex">
              <button
                aria-label={t('navbar.item0.ariaLabel')}
                className=""
                onClick={() => (toggle ? setToggle(!toggle) : null)}
              >
                <CustomNextLink to="/">
                  <a>
                    <img
                      alt="Steplix logo"
                      className="w-[75px] h-5"
                      src="/assets/img/logo-navbar.svg"
                    />
                  </a>
                </CustomNextLink>
              </button>
            </div>
            {/* button menu mobile */}
            <div className="z-50">
              <button
                aria-label={
                  toggle ? t('navbar.submenuCloseAriaLabel') : t('navbar.submenuOpenAriaLabel')
                }
                className="w-[24px] h-[24px] flex flex-col items-center justify-center z-50 lg:hidden"
                onClick={() => setToggle(!toggle)}
              >
                <span className={`line ${toggle && 'line--toggle'}`} />
                <span className={`line ${toggle && 'line--toggle'}`} />
                <span className={`line ${toggle && 'line--toggle'}`} />
              </button>
            </div>
          </div>
          <Submenu setToggle={setToggle} toggle={toggle} />
          <AnimatePresence>
            {routeTitle && !toggle ? (
              <motion.div
                animate={{
                  opacity: 1,
                  transition: { ease: 'linear', duration: 0.1 },
                }}
                className="relative container h-[74px] sm:h-[68px] flex items-center"
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { ease: 'linear', duration: 0.1 },
                }}
                initial={{ opacity: 1 }}
              >
                <h1 className={`font-bold font-poppins tracking-[0.8px] text-3xl`}>
                  {getOutlinedTitle(t(routeTitle))?.title + ' '}
                  <span className="font-bold text-outlined">
                    {getOutlinedTitle(t(routeTitle))?.outlined}
                  </span>
                </h1>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </nav>

      {/* navbar desktop */}
      <nav
        className={`hidden lg:flex lg:flex-col lg:justify-center w-full ${
          colorChange ? 'header-gradient ' : ''
        }`}
      >
        <div className="container flex justify-between items-center h-[100px]">
          {/* logo desktop */}
          <CustomNextLink to="/">
            <a>
              <img
                alt="Steplix logo"
                aria-label={t('navbar.item0.ariaLabel')}
                className="w-[90px] h-[24px] lg:w-[115px] lg:h-[40px]"
                src="/assets/img/logo-navbar.svg"
              />
            </a>
          </CustomNextLink>
          {/* menu options desktop */}
          <div className="flex justify-end items-center space-x-8 font-normal">
            <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
              <a
                aria-label={t('navbar.item1.ariaLabel')}
                className={`nav--link nav--link--blue ${isCurrentPathnameActive(
                  `/${i18nQuery?.lang}/about-us`,
                )}`}
              >
                {t('navbar.item1.route')}
              </a>
            </CustomNextLink>
            <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
              <a
                aria-label={t('navbar.item2.ariaLabel')}
                className={`nav--link nav--link--red ${isCurrentPathnameActive(
                  `/${i18nQuery?.lang}/what-we-do`,
                )}`}
              >
                {t('navbar.item2.route')}
              </a>
            </CustomNextLink>
            <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
              <a
                aria-label={t('navbar.item3.ariaLabel')}
                className={`nav--link nav--link--yellow ${isCurrentPathnameActive(
                  `/${i18nQuery?.lang}/portfolio`,
                )}`}
              >
                {t('navbar.item3.route')}
              </a>
            </CustomNextLink>
            <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
              <a
                aria-label={t('navbar.item4.ariaLabel')}
                className={`nav--link nav--link--blue ${isCurrentPathnameActive(
                  `/${i18nQuery?.lang}/contact`,
                )}`}
              >
                {t('navbar.item4.route')}
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
