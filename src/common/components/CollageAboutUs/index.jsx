/* eslint-disable @next/next/no-img-element */
import React from "react";

const CollageAboutUs = ({ sm, lg }) => {
    return (
        <div>
            {lg && (
                <div className="hidden lg:flex gap-4 space-x-4 ">
                    <div className="space-y-10">
                        <div className="relative h-[500px] w-[350px]">
                            <img
                                src="/assets/images/culture/culture-01.png"
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                        <div className="relative h-[226px] w-[350px]">
                            <img
                                src="/assets/images/culture/culture-02.png"
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="relative h-[226px] w-[350px]">
                            <img
                                src="/assets/images/culture/culture-03.png"
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                        <div className="relative h-[500px] w-[350px]">
                            <img
                                src="/assets/images/culture/culture-04.png"
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="relative h-[500px] w-[350px]">
                            <img
                                src="/assets/images/culture/culture-05.png"
                                alt="culture"
                                layout="fill"
                            />
                        </div>
                        <div className="relative h-[226px] w-[350px]">
                            <img
                                src="/assets/images/culture/culture-06.png"
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
                            <img
                                src="/assets/images/culture/culture-01.png"
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/images/culture/culture-02.png"
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/images/culture/culture-05.png"
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-5 ">
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/images/culture/culture-03.png"
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[230px] w-[160px]">
                            <img
                                src="/assets/images/culture/culture-04.png"
                                alt="culture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px]">
                            <img
                                src="/assets/images/culture/culture-06.png"
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
