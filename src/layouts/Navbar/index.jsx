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

    return (
        <div className="sticky top-0 w-full text-white z-50">
            <nav className="block lg:hidden">
                <div className="">
                    <Submenu
                        router={router}
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
                <div className="pt-[30px] flex top-0 lg:justify-between section-steplix pr-5">
                    <div className="relative lg:w-[160px] lg:h-[40px] my-auto">
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
                    <div className=" ">
                        <div className="flex justify-end items-center space-x-5 text-white text-base w-[750px] gap-2">
                            <Link
                                href={{ pathname: "/about-us", query: query }}
                            >
                                <a
                                    className={
                                        router.pathname === "/about-us"
                                            ? "nav--active"
                                            : ""
                                    }
                                    href="#about-us"
                                >
                                    {t("navbar.item1")}
                                </a>
                            </Link>
                            <Link href={{ pathname: "/process", query: query }}>
                                <a
                                    className={
                                        router.pathname === "/process"
                                            ? "nav--active"
                                            : ""
                                    }
                                    href="#what-we-do"
                                >
                                    {t("navbar.item2")}
                                </a>
                            </Link>

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
                            {/* button contact us */}
                            <button
                                className={`bg-white text-gray-900 rounded-full w-[200px] h-14 text-xl mr-7 ${
                                    router.pathname === "/contact"
                                        ? "bg-steplix-yellow"
                                        : ""
                                }`}
                            >
                                <Link
                                    href={{
                                        pathname: "/contact",
                                        query: query,
                                    }}
                                >
                                    <a href="">{t("navbar.item6")}</a>
                                </Link>
                            </button>
                            <div className="">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
