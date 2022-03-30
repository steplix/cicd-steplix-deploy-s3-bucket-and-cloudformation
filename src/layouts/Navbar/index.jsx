import React, { useContext } from "react";
import logo from "@/public/assets/logos/logo-navbar.svg";
import Image from "next/image";
import LenguageSelector from "@/common/components/LenguageSelector";
import { LanguageContext } from "@/common/components/LanguageContext";
import Link from "next/link";
const Navbar = () => {
    const { texts } = useContext(LanguageContext);
    //
    // State
    //
    const [sticky, setSticky] = React.useState(false);

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
        <div
            className={`sticky top-0 hidden md:block w-full text-white z-50 ${
                sticky ? "bg-black bg-opacity-80" : "bg-dark"
            }`}
        >
            <nav
                className={`transition-height duration-500 ease-in-out absolute w-full h-[120px] ${
                    sticky ? "bg-steplix-lilac bg-opacity-90" : "bg-dark"
                }`}
            >
                <div className="pt-[30px] container-header flex top-0 desktop:justify-around w-full pr-5">
                    <div className="relative w-[250px] h-[62px] ml-[195px] my-auto">
                        <Image src={logo} alt="logo" layout="fill" />
                    </div>
                    <div className="mx-8">
                        <div className="flex space-x-5 mt-7 text-white text-base w-[800px] gap-2">
                            <a href="#about-us">{texts.navbar.item1}</a>
                            <a href="#what-we-do">{texts.navbar.item2}</a>
                            <a href="#Our-culture">{texts.navbar.item3}</a>
                            <a href="#happy-clients">{texts.navbar.item4}</a>
                            <Link href="/jobs">
                                <a>{texts.navbar.item5}</a>
                            </Link>
                        </div>
                    </div>

                    {/* boton contact us */}

                    <button className="bg-white text-gray-900 rounded-full w-[200px] h-14 mt-3 my-2 px-10 text-xl mr-7">
                        <a href="#contact-us">{texts.navbar.item6}</a>
                    </button>
                    <div className="h-[35px] w-[35px] mt-7">
                        <LenguageSelector />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
