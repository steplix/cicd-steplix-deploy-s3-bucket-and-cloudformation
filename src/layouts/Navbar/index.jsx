import React from 'react';
import logo from '@/public/assets/logos/logo-navbar.svg'
import Image from 'next/image';
import LenguageSelector from '@/common/components/LenguageSelector';
const Navbar = () => {
    return (
      <nav className="hidden md:block  ">
      <div className="
          mt-[30px]
          container-header
          flex
          fixed
          top-0
          desktop:justify-around
          w-full
          pt-4
          pr-52
        ">
         {/* logo */} 
        <div className="logo-desktop relative w-[250px] h-[62px] ml-[195px] ">
          <Image src={logo} alt="logo" layout="fill" />
        </div>
        <div className="mx-8">
          <div className="flex space-x-5 mt-7 text-white text-xl">
            <a className="" href="#about-us">Sobre nosotros</a>
            <a href="#">Que hacemos</a>
            <a href="#partners">Nuestra cultura</a>
            <a href="#">Clientes felices</a>
            <a href="#">Convertite en Steplixer</a>
          </div>
        </div>

        {/* boton contact us */}

        <button className=" bg-white rounded-full h-14 mt-3 my-2 px-10 text-xl mr-7 ">
          Contact Us
        </button>
        <div className="h-[35px] w-[35px] mt-7">
        <LenguageSelector/>
        </div>
      </div>

    </nav>
    
    );
};

export default Navbar;
