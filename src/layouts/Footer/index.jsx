import React, { useContext } from "react";
import Image from "next/image";
import logoSteplix from "@/public/assets/logos/logo-navbar.svg";
import logoIqNet from "@/public/assets/logos/iqnet.svg";
import logoIram from "@/public/assets/logos/iram.svg";
import fb from "@/public/assets/logos/fb.svg";
import instagram from "@/public/assets/logos/instagram.svg";
import gmail from "@/public/assets/logos/gmail.svg";
import LanguageContext from "@/common/components/LanguageContext";

const Footer = () => {
    const { texts } = useContext(LanguageContext);

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
                                    {texts.footer.email}
                                </a>
                            </div>
                            <p className="mb-5"> {texts.footer.phone}</p>
                            <p className="mb-5">{texts.footer.dir}</p>

                            <p className="w-18 wrap md:block hidden">
                                {texts.footer.province}
                            </p>
                        </div>
                    </div>
                    <div className=" mb-10 md:ml-10 gap-5 flex md:mr-[180px]">
                        <a href="https://www.facebook.com/steplix">
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
                        <a href="https://www.instagram.com/steplixsoftware">
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
                        <a
                            class="text-dark steplix-social-linkedin ml-4"
                            href="https://www.linkedin.com/company/steplix"
                        >
                            {" "}
                            <div class="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                <div className=" mx-auto pt-[18px] ">
                                    <Image
                                        src={gmail}
                                        alt="linkedin"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <div className="grid justify-items-center ">
                            <div className=" flex gap-5">
                                <a
                                    href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iram.pdf"
                                    target="_blank"
                                >
                                    <Image
                                        src={logoIram}
                                        className="mr-10  w-10 h-14 desktop:w-20 desktop:h-28"
                                        alt="Iram"
                                        objectFit="contain"
                                    />
                                </a>

                                <div className="relative h-[100px] w-[80px]">
                                    <a
                                        href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iqnet.pdf"
                                        target="_blank"
                                    >
                                        <Image
                                            src={logoIqNet}
                                            alt="IQNet"
                                            objectFit="contain"
                                            layout="fill"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mb-12">
                            <a
                                href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/D-02+Quality+Policy.pdf"
                                target="_blank"
                            >
                                {texts.footer.certificateText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
