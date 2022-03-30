import React from "react";
import Image from "next/image";
import cultureOne from "@/public/assets/images/culture/culture-01.png";
import cultureTwo from "@/public/assets/images/culture/culture-02.png";
import cultureThree from "@/public/assets/images/culture/culture-03.png";
import cultureFour from "@/public/assets/images/culture/culture-04.png";
import cultureFive from "@/public/assets/images/culture/culture-05.png";
import cultureSix from "@/public/assets/images/culture/culture-06.png";

const CollageAboutUs = ({ sm, lg }) => {
    return (
        <div>
            {lg && (
                <div className="hidden lg:flex gap-4 space-x-4 ">
                    <div className="space-y-10">
                        <div className="relative h-[500px] w-[350px]">
                            <Image
                                src={cultureOne}
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                        <div className="relative h-[226px] w-[350px]">
                            <Image
                                src={cultureTwo}
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="relative h-[226px] w-[350px]">
                            <Image
                                src={cultureThree}
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                        <div className="relative h-[500px] w-[350px]">
                            <Image
                                src={cultureFour}
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="relative h-[500px] w-[350px]">
                            <Image
                                src={cultureFive}
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                        <div className="relative h-[226px] w-[350px]">
                            <Image
                                src={cultureSix}
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            )}
            {sm && (
                <div className="lg:hidden flex gap-4  ">
                    <div className="space-y-5">
                        <div className="relative h-[230px] w-[160px]">
                            <Image
                                src={cultureOne}
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <Image
                                src={cultureTwo}
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <Image
                                src={cultureFive}
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-5 ">
                        <div className="relative h-[100px] w-[160px]">
                            <Image
                                src={cultureThree}
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[230px] w-[160px]">
                            <Image
                                src={cultureFour}
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <Image
                                src={cultureSix}
                                alt="culture"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollageAboutUs;
