import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import chevronLeft from "@/public/assets/icons/chevronLeft.svg";
import chevronRight from "@/public/assets/icons/chevronRight.svg";

export default function Modal({
    setisModalOpen,
    isModalOpen,
    children,
    borderColor,
    subDescription,
    setPositionModal,
    positionModal,
}) {
    return (
        <>
            {isModalOpen && (
                <>
                    <div className=" h-full w-full items-center flex justify-center fixed inset-0 z-[99999] outline-none focus:outline-none text-white">
                        <div className="relative w-[90%] lg:w-[1000px] flex justify-center ">
                            {/*content*/}
                            <div
                                className={`${borderColor} border-2 min-h-[90%] lg:min-h-[700px] ml-12 w-[370px] lg:w-[1000px] rounded-2xl shadow-lg relative flex flex-col bg-steplix-lilac/75 outline-none focus:outline-none px-3`}
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
                                {positionModal && (
                                    <div className="flex items-center mt-10 justify-center p-6 ">
                                        {positionModal > 1 && (
                                            <button
                                                className="relative rounded-full bg-steplix-yellow h-14 w-14 mx-2  font-semibold p-2  flex justify-center items-center shadow-xl"
                                                type="button"
                                                onClick={() =>
                                                    setPositionModal(
                                                        positionModal - 1
                                                    )
                                                }
                                            >
                                                <Image
                                                    src={chevronLeft}
                                                    alt="left chevron"
                                                    layout="fill"
                                                />
                                            </button>
                                        )}
                                        {positionModal < 3 && (
                                            <button
                                                className="mx-2 rounded-xl font-semibold p-2 h-12 flex justify-center items-center shadow-xl uppercase"
                                                type="button"
                                                onClick={() =>
                                                    setPositionModal(
                                                        positionModal + 1
                                                    )
                                                }
                                            >
                                                <div className="relative rounded-full bg-steplix-yellow h-14 w-14">
                                                    <Image
                                                        src={chevronRight}
                                                        alt="right chevron"
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

//
//PropsTypes
//
Modal.propTypes = {
    setisModalOpen: PropTypes.bool.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    subDescription: PropTypes.string,
    setPositionModal: PropTypes.number,
    positionModal: PropTypes.number,
};
