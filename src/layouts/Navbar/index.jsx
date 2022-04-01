/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import LanguageSelector from "@/common/components/LanguageSelector";
import Submenu from "@/common/components/Submenu";

const Navbar = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

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
            {/*  */}
            <nav className=" block sm:hidden">
                <div className="">
                    <Submenu
                        query={query}
                        className="absolute"
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>

                <div className="container-header flex w-full lg:fixed absolute justify-between z-[10] ">
                    {/* <!-- logo mobile --> */}
                    <div className="ml-5 pt-3">
                        <Link href={{ pathname: "/", query: query }}>
                            <img
                                src="/assets/logos/steplixMobile.svg"
                                alt="logo"
                                className="w-40 h-20"
                            />
                        </Link>
                    </div>
                    {/*  <!-- boton menu --> */}
                    <div className="menu-bar-togle">
                        <div className="menu-bar pt-6 pr-5">
                            <button
                                className={`${toggle && "hidden"} `}
                                onClick={() => setToggle(!toggle)}
                            >
                                <img
                                    src="/assets/icons/submenu.svg"
                                    className="h-10 w-10 lg:hidden block"
                                    alt="submenu"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/*  */}

            <nav
                className={`hidden md:block transition-height duration-500 ease-in-out absolute w-full h-[120px] ${
                    sticky ? "bg-steplix-lilac bg-opacity-90" : "bg-dark"
                }`}
            >
                <div className="pt-[30px] container-header flex top-0 lg:justify-around w-full pr-5">
                    <div className="relative w-[250px] h-[62px] ml-[195px] my-auto">
                        <Link href={{ pathname: "/", query: query }}>
                            <a>
                                <img
                                    src="/assets/logos/logo-navbar.svg"
                                    alt="logo"
                                    layout="fill"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="mx-8">
                        <div className="flex space-x-5 mt-7 text-white text-base w-[800px] gap-2">
                            <a href="#about-us">{t("navbar.item1")}</a>
                            <a href="#what-we-do">{t("navbar.item2")}</a>
                            <a href="#our-culture">{t("navbar.item3")}</a>
                            <a href="#happy-clients">{t("navbar.item4")}</a>
                            <Link href={{ pathname: "jobs", query: query }}>
                                {t("navbar.item5")}
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
