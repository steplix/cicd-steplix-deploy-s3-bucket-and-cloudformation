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
    let [ query ] = useLanguageQuery();
    query = { lang: query?.lang }
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
            <nav className="block lg:hidden">
                <div>
                    <Submenu
                        router={router}
                        query={query}
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
                <div
                    className={`pt-[22px] h-[64px] transition-height duration-500 ease-in-out hover:bg-steplix-purple flex w-full lg:fixed absolute justify-between ${
                        sticky ? "bg-[#0D0D0D]" : "bg-dark"
                    }`}
                >
                    {/* <!-- logo mobile --> */}
                    <div className="ml-5 items-center justify-center flex h-[33px]">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/logo-navbar.svg"
                                    alt="logo"
                                    className="w-[101px] h-6"
                                />
                            </a>
                        </Link>
                    </div>
                    {/*  <!-- boton menu --> */}
                    <div className="z-50 mr-3">
                        <button
                            className="w-[33px] h-[33px] flex flex-col items-center justify-center z-50 lg:hidden "
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
                className={`hidden lg:block transition-height duration-500 ease-in-out absolute w-full h-[120px] ${
                    sticky ? "bg-[#0D0D0D]" : "bg-dark"
                }`}
            >
                <div className="pt-[30px] flex top-0 lg:justify-between section-steplix pr-5">
                    <div className="my-auto">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/img/logo-navbar.svg"
                                    alt="logo"
                                    className="w-[160px] h-[40px]"
                                />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <div className="flex justify-end items-center space-x-5 text-white text-base w-[750px] gap-2">
                            <Link
                                href={{
                                    pathname: "/about-us",
                                    query: query,
                                }}
                            >
                                <a
                                    className={`hover:opacity-100 opacity-50 ${
                                        router.pathname === "/about-us"
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
                                    className={`hover:opacity-100 opacity-50 ${
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
                                    className={`hover:opacity-100 opacity-50 ${
                                        router.pathname === "/jobs" ||
                                        router.pathname.substring(1, 5) ===
                                            "jobs"
                                            ? "nav--active opacity-100"
                                            : ""
                                    }`}
                                >
                                    {t("navbar.item5")}
                                </a>
                            </Link>
                            {/* button contact us */}

                            <Link
                                href={{
                                    pathname: "/contact",
                                    query: query,
                                }}
                            >
                                <a>
                                    <button
                                        className={`bg-white text-gray-900 rounded-full w-[200px] h-14 text-xl ${
                                            router.pathname === "/contact"
                                                ? "bg-steplix-yellow"
                                                : ""
                                        }`}
                                    >
                                        {t("navbar.item6")}
                                    </button>
                                </a>
                            </Link>
                            <div>
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
