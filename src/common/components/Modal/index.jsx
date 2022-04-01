/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";
export default function Modal({
    setisModalOpen,
    isModalOpen,
    children,
    borderColor,
    subDescription,
    setPositionModal,
    positionModal,
}) {
    //
    //constant
    //
    const ref = useRef();

    //
    //UseEffect
    //
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
                setisModalOpen(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isModalOpen, setisModalOpen]);

    return (
        <>
            {isModalOpen && (
                <>
                    <div className="h-full w-full flex justify-center items-center fixed inset-0 z-[99999] outline-none focus:outline-none text-white">
                        <div
                            ref={ref}
                            className="wrapper lg:bottom-36 relative lg:h-[500px] h-[800px] right-[6%] 2xl:left-[11%] sm:left-[7%] w-[97%] lg:w-[1000px] flex justify-center "
                        >
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
                                <div className="px-1 mt-5 h-[670px]">
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
                                                <img
                                                    src="/assets/icons/chevronLeft.svg"
                                                    alt="left chevron"
                                                    layout="fill"
                                                    className="mx-auto h-14"
                                                />
                                            </button>
                                        )}
                                        {positionModal < 3 && (
                                            <button
                                                className="relative rounded-full bg-steplix-yellow h-14 w-14 mx-2 font-semibold p-2  flex justify-center items-center shadow-xl"
                                                type="button"
                                                onClick={() =>
                                                    setPositionModal(
                                                        positionModal + 1
                                                    )
                                                }
                                            >
                                                <div className="relative rounded-full bg-steplix-yellow h-14 w-14">
                                                    <img
                                                        src="/assets/icons/chevronRight.svg"
                                                        alt="right chevron"
                                                        layout="fill"
                                                        className="mx-auto mb-2 h-14"
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
                                className={`${borderColor} hidden lg:flex border-2 rounded-full shadow-lg relative top-[295px] left-[40px]  flex-col bg-steplix-lilac/75 w-[350px] h-[350px] text-center justify-center my-auto`}
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
    setisModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
    borderColor: PropTypes.string.isRequired,
    subDescription: PropTypes.string,
    setPositionModal: PropTypes.func,
    positionModal: PropTypes.number,
};
