/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import LanguageSelector from "@/common/components/LanguageSelector";
import Submenu from "@/common/components/Submenu";
import { useRouter } from "next/router";

const Navbar = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const router = useRouter();

    //
    // State
    //
    const [sticky, setSticky] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [scrollY, setScrollY] = React.useState(0);

    //
    // Effects
    //
    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

    return (
        <div className="sticky top-0 w-full text-white z-50">
            <nav className="block lg:hidden">
                <div className="">
                    <Submenu
                        router={router}
                        scrollY={scrollY}
                        query={query}
                        className=""
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
                <div
                    className={`pt-[22px] h-[64px] transition-height duration-500 ease-in-out hover:bg-steplix-purple flex w-full lg:fixed absolute justify-between ${
                        sticky ? "bg-steplix-lilac" : "bg-dark"
                    }`}
                >
                    {/* <!-- logo mobile --> */}
                    <div className="ml-5 ">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/steplixMobile.svg"
                                    alt="logo"
                                    className="w-24 h-6"
                                />
                            </a>
                        </Link>
                    </div>
                    {/*  <!-- boton menu --> */}
                    <div className="z-50 mr-3">
                        <button
                            className={`${toggle && "hidden"} h-6 w-6`}
                            onClick={() => setToggle(!toggle)}
                        >
                            <img
                                src="/assets/img/submenu.svg"
                                className="h-6 w-6 xl:hidden block"
                                alt="submenu"
                            />
                        </button>
                    </div>
                </div>
            </nav>
            {/* navbar desktop */}
            <nav
                className={`hidden lg:block transition-height duration-500 ease-in-out absolute w-full h-[120px] ${
                    sticky ? "bg-steplix-lilac" : "bg-dark"
                }`}
            >
                <div className="pt-[30px] flex top-0 lg:justify-around w-[90%] pr-5">
                    <div className="relative 2xl:w-[250px] 2xl:h-[62px] md:[180px] md:[35px] ml-[195px] my-auto">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/logo-navbar.svg"
                                    alt="logo"
                                    layout="fill"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="ml-8">
                        <div className="flex space-x-5 mt-7 text-white text-base w-[750px] gap-2">
                            <a
                                className={
                                    (router.pathname === "/" &&
                                        scrollY > 1000 &&
                                        scrollY < 1500) ||
                                    router.pathname === "/about-us"
                                        ? "nav--active"
                                        : ""
                                }
                                href="#about-us"
                            >
                                {t("navbar.item1")}
                            </a>
                            <a
                                className={
                                    (router.pathname === "/" &&
                                        scrollY > 1500 &&
                                        scrollY < 2500) ||
                                    router.pathname === "/process"
                                        ? "nav--active"
                                        : ""
                                }
                                href="#what-we-do"
                            >
                                {t("navbar.item2")}
                            </a>
                            <a
                                className={
                                    router.pathname === "/" &&
                                    scrollY > 2500 &&
                                    scrollY < 3000
                                        ? "nav--active"
                                        : ""
                                }
                                href="#our-culture"
                            >
                                {t("navbar.item3")}
                            </a>
                            <a
                                className={
                                    router.pathname === "/" &&
                                    scrollY > 3000 &&
                                    scrollY < 3500
                                        ? "nav--active"
                                        : ""
                                }
                                href="#happy-clients"
                            >
                                {t("navbar.item4")}
                            </a>
                            <Link href={{ pathname: "/jobs", query: query }}>
                                <a
                                    className={
                                        router.pathname === "/jobs"
                                            ? "nav--active"
                                            : ""
                                    }
                                >
                                    {t("navbar.item5")}
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* button contact us */}
                    <button className="bg-white text-gray-900 rounded-full w-[200px] h-14 mt-3 my-2 px-10 text-xl mr-7">
                        <a href="#contact-us">{t("navbar.item6")}</a>
                    </button>
                    <div className="mt-7">
                        <LanguageSelector />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
