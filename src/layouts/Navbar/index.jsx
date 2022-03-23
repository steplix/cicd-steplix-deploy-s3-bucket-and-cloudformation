import React, { useContext } from "react";
import logo from "@/public/assets/logos/logo-navbar.svg";
import Image from "next/image";
import LenguageSelector from "@/common/components/LenguageSelector";
import LanguageContext from "@/common/components/LanguageContext";
const Navbar = () => {
    const { texts } = useContext(LanguageContext);
    //todo poner sombreado al navbar y pasar en la constante los textos del footer mas los id de los links de cada item del navbar.
    //buscar links para direccionar en el footer
    return (
        <nav className="hidden md:block   ">
            <div
                className="
          pt-[30px]
          container-header
          flex
          fixed
          top-0
          desktop:justify-around
          w-full
          pr-52
        "
            >
                <div className="relative w-[250px] h-[62px] ml-[195px] my-auto ">
                    <Image src={logo} alt="logo" layout="fill" />
                </div>
                <div className="mx-8">
                    <div className="flex space-x-5 mt-7 text-white text-xl">
                        <a className="" href="#about-us">
                            {texts.navbar.item1}
                        </a>
                        <a href="#">{texts.navbar.item2}</a>
                        <a href="#">{texts.navbar.item3}</a>
                        <a href="#">{texts.navbar.item4}</a>
                        <a href="#">{texts.navbar.item5}</a>
                    </div>
                </div>

                {/* boton contact us */}

                <button className=" bg-white rounded-full h-14 mt-3 my-2 px-10 text-xl mr-7 ">
                    {texts.navbar.item6}
                </button>
                <div className="h-[35px] w-[35px] mt-7">
                    <LenguageSelector />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
