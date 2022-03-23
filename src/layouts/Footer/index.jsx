import React from "react";
import Image from "next/image";
import logoSteplix from "@/public/assets/logos/logo-navbar.svg";
import logoIqNet from "@/public/assets/logos/iqnet.svg";
import logoIram from "@/public/assets/logos/iram.svg";
import fb from "@/public/assets/logos/fb.svg";
import instagram from "@/public/assets/logos/instagram.svg";
import gmail from "@/public/assets/logos/gmail.svg";

const Footer = () => {
    return (
        <>
            <hr className=" text-gray-400 mt-2.5 mb-16" />
            <div className=" text-white grid justify-items-center text-center md:text-left text-sm md:text-[19px] desktop:text-xl">
                <div className="md:flex">
                    <div className="md:flex ">
                        <div className=" md:h-[70px] md:w-[280px] w-40 h-4 mb-16 mx-auto md:mr-20">
                            <Image src={logoSteplix} alt="logo" />
                        </div>
                        <div className="footer--contact mb-14 md:mr-16 ">
                            <div className="mb-5">
                                <a href="mailto:hello@steplix.com">
                                    hello@steplix.com
                                </a>
                            </div>
                            <p className="mb-2.5">+54 (11) 5367-4369</p>
                            <p>Costa Rica 4999, Palermo,</p>
                            <p className="w-18 wrap md:hidden block">
                                Buenos Aires,
                            </p>
                            <p> Argentina.</p>
                            <p className="w-18 wrap md:block hidden">
                                Buenos Aires, Argentina.
                            </p>
                        </div>
                    </div>
                    <div className=" mb-10 md:ml-10 gap-5 flex md:mr-[180px]">
                        <a href="www.facebook.com">
                            <div class="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                <div className=" mx-auto pt-3 ">
                                    <Image
                                        src={fb}
                                        alt="Facebook"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </a>
                        <a href="www.facebook.com">
                            <div class="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                <div className=" mx-auto pt-4 ">
                                    <Image
                                        src={instagram}
                                        alt="instagram"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </a>
                        <a href="www.facebook.com">
                            <div class="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                <div className=" mx-auto pt-[18px] ">
                                    <Image
                                        src={gmail}
                                        alt="gmail"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <div className="grid justify-items-center ">
                            <div className=" flex gap-5">
                                <Image
                                    src={logoIram}
                                    className="mr-10  w-10 h-14 desktop:w-20 desktop:h-28"
                                    alt="iram"
                                    objectFit="contain"
                                />
                                <div className="relative h-[100px] w-[80px]">
                                    <Image
                                        src={logoIqNet}
                                        alt="iram"
                                        objectFit="contain"
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 mb-12">Política de calidad</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
