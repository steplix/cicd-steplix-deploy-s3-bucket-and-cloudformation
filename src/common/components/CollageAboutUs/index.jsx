/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fade from "react-reveal/Fade";

const CollageAboutUs = () => {
    return (
        <Fade cascade>
            <div className="container flex justify-center">
                {/* Tablet and desktop  */}
                <div className="hidden md:flex space-x-5 2xl:space-x-9">
                    <div className="space-y-5 2xl:space-y-9">
                        <div className="relative md:w-[223px] md:h-[323px] lg:w-[301px] lg:h-[437px] xl:w-[296px] xl:h-[428px] 2xl:h-[500px] 2xl:w-[350px]">
                            <img
                                src="/assets/img/culture/culture-01.png"
                                alt="culture"
                            />
                        </div>
                        <div className="relative md:w-[223px] md:h-[144px] lg:w-[301px] lg:h-[195px] xl:w-[296px] xl:h-[191px] 2xl:h-[226px] 2xl:w-[350px]">
                            <img
                                src="/assets/img/culture/culture-02.png"
                                alt="culture"
                            />
                        </div>
                    </div>
                    <div className="space-y-5 2xl:space-y-9">
                        <div className="relative md:w-[223px] md:h-[144px] lg:w-[301px] lg:h-[195px] xl:w-[296px] xl:h-[191px] 2xl:h-[226px] 2xl:w-[350px]">
                            <img
                                src="/assets/img/culture/culture-03.png"
                                alt="culture"
                            />
                        </div>
                        <div className="relative md:w-[223px] md:h-[323px] lg:w-[301px] lg:h-[437px] xl:w-[296px] xl:h-[428px] 2xl:h-[500px] 2xl:w-[350px]">
                            <img
                                src="/assets/img/culture/culture-04.png"
                                alt="culture"
                            />
                        </div>
                    </div>
                    <div className="space-y-5 2xl:space-y-9">
                        <div className="relative md:w-[223px] md:h-[323px] lg:w-[301px] lg:h-[437px] xl:w-[296px] xl:h-[428px] 2xl:h-[500px] 2xl:w-[350px]">
                            <img
                                src="/assets/img/culture/culture-05.png"
                                alt="culture"
                            />
                        </div>
                        <div className="relative md:w-[223px] md:h-[144px] lg:w-[301px] lg:h-[195px] xl:w-[296px] xl:h-[191px] 2xl:h-[226px] 2xl:w-[350px]">
                            <img
                                src="/assets/img/culture/culture-06.png"
                                alt="culture"
                            />
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className="flex gap-4 md:hidden">
                    <div className="space-y-5">
                        <div className="relative h-[230px] w-[160px]">
                            <img
                                src="/assets/img/culture/culture-01.png"
                                alt="culture"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/img/culture/culture-02.png"
                                alt="culture"
                            />
                        </div>
                        <div className="h-[100px] w-[160px]">
                            <img
                                src="/assets/img/culture/culture-05-sm.png"
                                alt="culture"
                            />
                        </div>
                    </div>
                    <div className="space-y-5 ">
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/img/culture/culture-03.png"
                                alt="culture"
                            />
                        </div>
                        <div className="relative h-[230px] w-[160px]">
                            <img
                                src="/assets/img/culture/culture-04.png"
                                alt="culture"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/img/culture/culture-06.png"
                                alt="culture"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default CollageAboutUs;
