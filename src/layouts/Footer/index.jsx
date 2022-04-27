/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/common/lib/i18n";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#0D0D0D]">
            <div className="w-full h-1 mb-20"></div>
            <div className="section-steplix text-white grid justify-items-center text-center md:text-left text-sm md:text-[19px] lg:text-xl">
                <div className="md:flex">
                    <div className="md:flex">
                        <div className="mb-16 mx-auto md:mr-20">
                            <img
                                src="/assets/img/logo-navbar.svg"
                                alt="logo"
                                className="w-40 h-4 md:h-[70px] md:w-[280px]"
                            />
                        </div>
                        <div className="mb-14 md:mr-16">
                            <div className="mb-5">
                                <Link href="mailto:hello@steplix.com">
                                    <a>hello@steplix.com</a>
                                </Link>
                            </div>
                            <p className="mb-5">+54 (11) 5367-4369</p>
                            <p className="mb-5">Costa Rica 4999, Palermo, </p>

                            <p className="w-18">Buenos Aires, Argentina.</p>
                        </div>
                    </div>
                    <div className="mb-10 md:ml-10 gap-5 flex items-center md:mr-[180px]">
                        <Link href="https://www.facebook.com/steplix">
                            <a target="_blank">
                                <div className="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                    <div className="mx-auto lg:pt-3 pt-2 flex justify-center">
                                        <img
                                            src="/assets/img/facebookFooter.svg"
                                            alt="Facebook"
                                            className="w-5 h-10"
                                        />
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/steplixsoftware">
                            <a target="_blank">
                                <div className="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                    <div className="mx-auto lg:pt-4 pt-3 flex justify-center">
                                        <img
                                            src="/assets/img/instagramFooter.svg"
                                            alt="instagram"
                                            className="w-10 h-10"
                                        />
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/company/steplix">
                            <a target="_blank">
                                <div className="rounded-full h-[60px] w-[60px] md:h-[71px] md:w-[71px] text-center bg-white ">
                                    <div className="mx-auto lg:pt-3 pt-2  flex justify-center">
                                        <img
                                            src="/assets/img/linkedinFooter.svg"
                                            alt="linkedin"
                                            className="w-10 h-10"
                                        />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <div className="grid justify-items-center">
                            <div className="flex gap-5">
                                <Link href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iram.pdf">
                                    <a target="_blank">
                                        <img
                                            src="/assets/img/iram.svg"
                                            className="mr-10 w-[55px] h-[80px] lg:w-20 lg:h-28"
                                            alt="Iram"
                                        />
                                    </a>
                                </Link>
                                <div className="relative h-[100px] w-[80px]">
                                    <Link href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iqnet.pdf">
                                        <a target="_blank">
                                            <img
                                                src="/assets/img/iQNet.svg"
                                                alt="IQNet"
                                                className="lg:h-24 lg:w-24 h-[70px] w-[70px]"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mb-12">
                            <Link href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/D-02+Quality+Policy.pdf">
                                <a target="_blank">
                                    {t("footer.certificateText")}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
