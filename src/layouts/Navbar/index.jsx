/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import LanguageSelector from "@/common/components/LanguageSelector";
import Submenu from "@/common/components/Submenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

const Navbar = () => {
    const { t } = useTranslation();
    let [query] = useLanguageQuery();
    query = { lang: query?.lang };
    const router = useRouter();

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
            <nav className="block xl:hidden">
                <div>
                    <Submenu
                        router={router}
                        query={query}
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
                <div
                    className={`flex absolute justify-between items-center w-full h-[65px] transition-height duration-500 ease-in-out hover:bg-purple ${
                        sticky ? "bg-black" : "bg-dark"
                    }`}
                >
                    {/* logo mobile */}
                    <div className="ml-5 items-center justify-center flex">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/logo-navbar.svg"
                                    alt="logo"
                                    className="w-[101px] h-6 md:w-40 md:h-10 lg:w-44 lg:h-12"
                                />
                            </a>
                        </Link>
                    </div>
                    {/* button menu mobile */}
                    <div className="z-50 mr-3">
                        <button
                            className="w-[33px] h-[33px] flex flex-col items-center justify-center z-50 xl:hidden"
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
            </nav>

            {/* navbar desktop */}
            <nav
                className={`hidden xl:flex w-full h-20 transition-height duration-500 ease-in-out absolute header-gradient`}
            >
                <div className="container pr-28 flex top-0 justify-between items-center">
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
                    <div className="flex justify-end items-center space-x-8 text-lg">
                        <Link
                            href={{
                                pathname: "/about-us",
                                query: query,
                            }}
                        >
                            <a
                                className={`hover:opacity-100 opacity-50 nav--link nav--link--blue ${
                                    router.pathname === "/about-us"
                                        ? "nav--active opacity-100"
                                        : ""
                                }`}
                            >
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
                                className={`hover:opacity-100 opacity-50 nav--link nav--link--red ${
                                    router.pathname === "/stack"
                                        ? "nav--active opacity-100"
                                        : ""
                                }`}
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
                                className={`hover:opacity-100 opacity-50 nav--link nav--link--yellow ${
                                    router.pathname === "/process"
                                        ? "nav--active opacity-100"
                                        : ""
                                }`}
                            >
                                {t("navbar.item2")}
                            </a>
                        </Link>
                        <Link href={{ pathname: "/jobs", query: query }}>
                            <a
                                className={`hover:opacity-100 opacity-50 nav--link nav--link--blue ${
                                    router.pathname === "/jobs" ||
                                    router.pathname.substring(1, 5) === "jobs"
                                        ? "nav--active opacity-100"
                                        : ""
                                }`}
                            >
                                {t("navbar.item5")}
                            </a>
                        </Link>
                        {/* <Link
                            href={{
                                pathname: "/contact",
                                query: query,
                            }}
                        >
                            <a>
                                <button
                                    className={`bg-white text-black rounded-full w-40 h-10 text-lg ${
                                        router.pathname === "/contact"
                                            ? "bg-yellow"
                                            : ""
                                    }`}
                                >
                                    {t("navbar.item6")}
                                </button>
                            </a>
                        </Link> */}
                        <LanguageSelector />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
