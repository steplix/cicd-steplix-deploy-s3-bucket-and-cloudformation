/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import ButtonSocial from "@/common/components/ButtonSocial";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-black">
            <div className="container flex flex-col xl:flex-row items-center py-20 xl:py-12 space-y-9 xl:space-y-0 xl:space-x-24">
                <div>
                    <img
                        src="/assets/img/logo-navbar.svg"
                        alt="logo"
                        className="w-40 h-10 md:w-56 md:h-14 lg:w-72 lg:h-16 xl:w-48 xl:h-12 2xl:w-56 2xl:h-14"
                    />
                </div>
                <div className="flex flex-col items-center xl:items-start space-y-9 xl:space-y-6">
                    <Link href="mailto:hello@steplix.com">
                        <a className="text-sm md:text-xl lg:text-3xl xl:text-lg underline">
                            hello@steplix.com
                        </a>
                    </Link>
                    <p className="text-sm md:text-xl">+54 (11) 5367-4369</p>
                    <div className="flex flex-col items-center xl:items-start">
                        <p className="flex text-sm md:text-xl lg:text-3xl xl:text-lg">
                            Costa Rica 4999,
                            <span className="hidden lg:block">
                                &nbsp;Palermo,
                            </span>
                        </p>
                        <p className="flex text-sm md:text-xl lg:text-3xl xl:text-lg">
                            <span className="block lg:hidden">
                                Palermo,&nbsp;
                            </span>
                            Buenos Aires,
                            <span className="hidden lg:block">
                                &nbsp;Argentina.
                            </span>
                        </p>
                        <p className="block lg:hidden text-sm md:text-xl lg:text-3xl xl:text-lg">
                            Argentina.
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-7">
                    <ButtonSocial
                        url="https://www.facebook.com/steplix"
                        imgUrl="/assets/img/facebookFooter.svg"
                        imgAlt="Facebook"
                    />
                    <ButtonSocial
                        url="https://www.instagram.com/steplixsoftware"
                        imgUrl="/assets/img/instagramFooter.svg"
                        imgAlt="Instagram"
                    />
                    <ButtonSocial
                        url="https://www.linkedin.com/company/steplix"
                        imgUrl="/assets/img/linkedinFooter.svg"
                        imgAlt="LinkedIn"
                    />
                </div>
                <div className="flex flex-col items-center space-y-9 xl:space-x-6">
                    <div className="flex items-center space-x-7 xl:space-x-14">
                        <Link href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iram.pdf">
                            <a target="_blank">
                                <img
                                    src="/assets/img/iram.svg"
                                    className="w-10 h-[60px] md:w-12 md:h-[76px] xl:w-14 xl:h-[86px]"
                                    alt="Iram"
                                />
                            </a>
                        </Link>
                        <Link href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iqnet.pdf">
                            <a target="_blank">
                                <img
                                    src="/assets/img/iQNet.svg"
                                    alt="IQNet"
                                    className="h-12 w-12 md:h-14 md:w-14 xl:w-16 xl:h-16"
                                />
                            </a>
                        </Link>
                    </div>
                    <Link href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/D-02+Quality+Policy.pdf">
                        <a
                            className="text-sm md:text-xl lg:text-3xl xl:text-lg"
                            target="_blank"
                        >
                            {t("footer.certificateText")}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
