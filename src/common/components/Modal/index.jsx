import Image from "next/image";
import React from "react";
import chevronLeft from "@/public/assets/icons/chevronLeft.svg";
import chevronRight from "@/public/assets/icons/chevronRight.svg";

export default function Modal({
    setisModalOpen,
    isModalOpen,
    children,
    borderColor,
    subDescription,
    setpositionModal,
    positionModal,
}) {
    console.log("modal", positionModal);
    return (
        <>
            {isModalOpen && (
                <>
                    <div className=" h-full w-full items-center flex justify-center fixed inset-0 z-[99999] outline-none focus:outline-none text-white">
                        <div className="relative w-[90%] lg:w-[1000px] flex justify-center ">
                            {/*content*/}
                            <div
                                className={`${borderColor} border-2 min-h-[700px] ml-12 w-[370px] lg:w-[1000px] rounded-2xl shadow-lg relative flex flex-col bg-steplix-lilac/75 outline-none focus:outline-none px-3`}
                            >
                                <button
                                    onClick={() => setisModalOpen(false)}
                                    className="absolute top-1 lg: right-4 lg:mt-3 font-bold text-sm lg:text-2xl text-white bg-steplix-red h-5 w-5 lg:h-10 lg:w-10 rounded-full"
                                >
                                    x
                                </button>
                                {/*body*/}
                                <div className="px-5 mt-5 h-[500px]">
                                    {children}
                                </div>
                                {/*footer*/}
                                {setpositionModal && (
                                    <div className="flex items-center mt-10 justify-center p-6 rounded-b">
                                        {positionModal > 1 && (
                                            <button
                                                className="btn btn--register btn--darkblue mx-2 rounded-xl font-semibold p-2 h-12 flex justify-center items-center shadow-xl"
                                                type="button"
                                                onClick={() =>
                                                    setpositionModal(
                                                        positionModal - 1
                                                    )
                                                }
                                            >
                                                <div className="relative h-7 w-7">
                                                    <Image
                                                        src={chevronLeft}
                                                        layout="fill"
                                                    />
                                                </div>
                                            </button>
                                        )}
                                        {positionModal < 3 && (
                                            <button
                                                className="btn btn--register btn--darkblue mx-2 rounded-xl font-semibold p-2 h-12 flex justify-center items-center shadow-xl uppercase"
                                                type="button"
                                                onClick={() =>
                                                    setpositionModal(
                                                        positionModal + 1
                                                    )
                                                }
                                            >
                                                <div className="relative h-7 w-7">
                                                    <Image
                                                        src={chevronRight}
                                                        layout="fill"
                                                    />
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {subDescription && (
                            <div
                                className={`${borderColor} hidden lg:flex border-2 rounded-full shadow-lg relative top-[345px] right-[170px]  flex-col bg-steplix-lilac/75 w-[350px] h-[350px] text-center justify-center my-auto`}
                            >
                                {subDescription}
                            </div>
                        )}
                    </div>
                    <div className="opacity-50 fixed inset-0 z-[9999] bg-black" />
                </>
            )}
        </>
    );
}
