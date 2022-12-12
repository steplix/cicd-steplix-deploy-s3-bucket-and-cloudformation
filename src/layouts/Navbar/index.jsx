/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import LanguageSelector from "@/common/components/LanguageSelector";
import Submenu from "@/common/components/Submenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";
import { routesMap } from "@/common/utils/constants";
import { getOutlinedTitle } from "@/common/utils/methods";

const Navbar = () => {
    const { t } = useTranslation();
    let [query] = useLanguageQuery();
    query = { lang: query?.lang };
    const router = useRouter();
    const routeTitle = routesMap[router.pathname]?.title

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
                setSticky(
                    currentPosition > 52 ? true : !(currentPosition === 0)
                );
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
            <nav className="flex flex-col xl:hidden">
                <div>
                    <Submenu
                        router={router}
                        query={query}
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
                <div
                    className="flex flex-col absolute w-full header-gradient"
                >
                    <div className="flex relative justify-between items-center w-full h-[65px]">
                        {/* logo mobile */}
                        <div className="ml-5 items-center justify-center flex">
                            <Link href={{ pathname: "/", query: query }}>
                                <a>
                                    <img
                                        src="/assets/img/logo-navbar.svg"
                                        alt="logo"
                                        className="w-[75px] h-5"
                                    />
                                </a>
                            </Link>
                        </div>
                        {/* button menu mobile */}
                        <div className="z-50 mr-3">
                            <button
                                className="w-[24px] h-[24px] flex flex-col items-center justify-center z-50 xl:hidden"
                                onClick={() => setToggle(!toggle)}
                            >
                                <span
                                    className={`line ${toggle && "line--toggle"}`}
                                />
                                <span
                                    className={`line ${toggle && "line--toggle"}`}
                                />
                                <span
                                    className={`line ${toggle && "line--toggle"}`}
                                />
                            </button>
                        </div>
                    </div>
                    {
                        routeTitle ? (
                            <div className="ml-5 h-[80px] md:h-[100px] flex items-center">
                                <h1 className="font-semibold text-[36px] font-poppins">
                                    {getOutlinedTitle(t(routeTitle)).title + " "}
                                <span className="text--outlined">
                                    {getOutlinedTitle(t(routeTitle))?.outlined}
                                </span>
                            </h1>                      
                        </div>
                        ) : null
                    }
                </div>
            </nav>

            {/* navbar desktop */}
            <nav
                className={`hidden xl:flex xl:flex-col xl:justify-center w-full absolute header-gradient`}
            >
                <div className="container pr-28 flex top-0 justify-between items-center h-[100px]">
                    {/* logo desktop */}
                    <Link href={{ pathname: "/", query: query }}>
                        <a>
                            <img
                                src="/assets/img/logo-navbar.svg"
                                alt="logo"
                                className="w-[80px] h-[30px]"
                            />
                        </a>
                    </Link>
                    {/* menu options desktop */}
                    <div className="flex justify-end items-center space-x-8 font-normal">
                        <Link
                            href={{
                                pathname: "/about-us",
                                query: query,
                            }}
                        >
                            <a
                                className='nav--link nav--link--blue'>
                                {t("navbar.item0")}
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: "/stack",
                                query: query,
                            }}
                        >
                            <a
                                className='nav--link nav--link--red'
                            >
                                {t("navbar.item1")}
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: "/process",
                                query: query,
                            }}
                        >
                            <a
                                className='nav--link nav--link--yellow'
                            >
                                {t("navbar.item2")}
                            </a>
                        </Link>
                        <Link href={{ pathname: "/jobs", query: query }}>
                            <a
                                className='nav--link nav--link--blue'
                            >
                                {t("navbar.item3")}
                            </a>
                        </Link>
                        <LanguageSelector />
                    </div>
                </div>
                {/* {
                   routeTitle ? (
                    <div className="h-[70px] container">
                        <h1 className="font-bold text-[26px]">
                            {getOutlinedTitle(t(routeTitle)).title + " "}
                        <span className="text--outlined">
                            {getOutlinedTitle(t(routeTitle))?.outlined}
                        </span>
                    </h1>                      
                </div>
                   ) : null 
                } */}
            </nav>
        </div>
    );
};

export default Navbar;
