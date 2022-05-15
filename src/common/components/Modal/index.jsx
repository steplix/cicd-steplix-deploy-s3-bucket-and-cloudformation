/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ModalCard from "../ModalCard";
export default function Modal({
    setisModalOpen,
    isModalOpen,
    children,
    borderColor,
    subDescription,
    setPositionModal,
    positionModal,
    bgColor,
    textColor,
    bgLine,
}) {
    //
    // constant
    //
    const ref = useRef();

    //
    // UseEffect
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
                            className="wrapper flex justify-center relative max-h-[800px] lg:h-[500px] lg:w-[1000px] right-[6%] sm:left-[7%] lg:bottom-36 w-[99%]"
                        >
                            {/*content*/}
                            <div
                                className={`${borderColor} border-2 min-h-[90%] lg:min-h-[700px] ml-12 w-[370px] lg:w-[1000px] rounded-2xl shadow-lg relative flex flex-col bg-steplix-lilac/95 outline-none focus:outline-none px-3`}
                            >
                                <button
                                    onClick={() => setisModalOpen(false)}
                                    className="absolute top-4 lg: right-4 xl:right-6 lg:mt-3 font-black text-sm lg:text-2xl text-white h-5 w-5 lg:h-10 lg:w-10"
                                >
                                    <img
                                        src="/assets/img/escape.svg"
                                        alt="left chevron"
                                        layout="fill"
                                        className="mx-auto h-3 w-3"
                                    />
                                </button>
                                {/*body*/}
                                <div className="px-1 mt-5 mb-2 max-h-[670px] lg:h-[670px]">
                                    {children}
                                </div>
                                {/*footer*/}
                                {positionModal && (
                                    <div className="flex items-center lg:mt-10 justify-center pb-6">
                                        {positionModal > 1 && (
                                            <button
                                                className="relative rounded-full bg-steplix-yellow h-14 w-14 mx-2 font-semibold p-2 flex justify-center items-center shadow-xl"
                                                type="button"
                                                onClick={() =>
                                                    setPositionModal(
                                                        positionModal - 1
                                                    )
                                                }
                                            >
                                                <div className="flex items-center mt-1 mr-1 rounded-full bg-steplix-yellow h-[5px] w-[10px]">
                                                    <img
                                                        src="/assets/img/chevronLeft.svg"
                                                        alt="left chevron"
                                                        layout="fill"
                                                        className="mx-auto h-14"
                                                    />
                                                </div>
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
                                                <div className="flex items-center mt-2 ml-1 rounded-full bg-steplix-yellow h-[5px] w-[10px]">
                                                    <img
                                                        src="/assets/img/chevronRight.svg"
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
                            <div className="h-[194px] w-[360px] hidden lg:flex">
                                <ModalCard
                                    textColor={textColor}
                                    subDescription={subDescription}
                                    bgColor={bgColor}
                                    bgLine={bgLine}
                                />
                            </div>
                        )}
                    </div>

                    <div className="opacity-0 fixed inset-0 z-[9999] bg-black" />
                </>
            )}
        </>
    );
}

//
// PropsTypes
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
