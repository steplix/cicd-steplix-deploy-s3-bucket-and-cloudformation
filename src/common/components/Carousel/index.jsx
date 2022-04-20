/* eslint-disable @next/next/no-img-element */
import React from "react";
import _ from "lodash";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-export-i18n";

const Carousel = () => {
    const { t } = useTranslation();

    //
    //UseStates
    //
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false);

    //
    //Variables
    //
    let dotColor = "";
    const arrayClients = [
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-steplix-red",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-sura.svg",
            alt: "sura",
            name: "Juan Ramallo",
            title: t("happyClients.clientSura.title"),
            companyName: "Seguros SURA",
            borderColor: "border-steplix-yellow",
            text: t("happyClients.clientSura.text"),
        },
    ];

    //
    //useKeenSlider
    //
    const [sliderRef, propsRef] = useKeenSlider({
        initial: 0,
        slides: {
            spacing: 50,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const [sliderRefMobile, propsRefMobile] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <>
            {/* show when it is mobile */}
            <div className="block sm:hidden">
                <div className="navigation-wrapper">
                    <div ref={sliderRefMobile} className="keen-slider">
                        {arrayClients.map((element, index) => (
                            <div
                                key={`image-${index}`}
                                className="keen-slider__slide number-slide"
                            >
                                <div
                                    className={`${element?.borderColor} border-2 rounded-3xl min-h-[460px] w-[340px] p-3`}
                                >
                                    <div className="flex">
                                        <div>
                                            <img
                                                className="lg:h-32 lg:w-32 h-28 w-28"
                                                src={element?.image}
                                                alt={element.alt}
                                            />
                                        </div>
                                        <div className="place-self-center ml-6">
                                            <p className="text-2xl font-bold">
                                                {element?.name}
                                            </p>
                                            <p className="text-base w-[150px] mt-1">
                                                {element?.title}{" "}
                                                <span className="text-steplix-yellow">
                                                    {element?.companyName}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-steplix-red text-base h-1 w-[70px] mb-7" />
                                    <div>{element?.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {loaded && propsRefMobile.current && (
                    <div className="dots 2xl:py-20 xl:py-24 lg:py-16 md:py-12 py-6">
                        {[
                            ...Array(
                                propsRefMobile.current.track.details.slides
                                    .length
                            ).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        propsRefMobile.current?.moveToIdx(idx);
                                    }}
                                    className={`dot ${
                                        currentSlide === idx ? " active" : ""
                                    } 2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-4 h-4 ${dotColor}`}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
            {/* show when it is tablet or bigger */}
            <div className="hidden sm:block text-white">
                <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider flex">
                        {_.chunk(arrayClients, 4).map((subimages, i) => (
                            <div
                                key={`subimage-${i}`}
                                className="keen-slider__slide number-slide gap-12 "
                            >
                                {subimages.map((element, j) => (
                                    <div
                                        className={`${element?.borderColor} border-2 rounded-3xl h-[390px] w-[450px] mb-8`}
                                        key={j}
                                    >
                                        <div className="flex justify-end px-7">
                                            <div className="relative h-[390px] w-[450px] ">
                                                <div>
                                                    <div className="flex">
                                                        <div>
                                                            <img
                                                                className="lg:h-32 lg:w-32 h-28 w-28"
                                                                src={
                                                                    element?.image
                                                                }
                                                                alt={
                                                                    element.alt
                                                                }
                                                            />
                                                        </div>
                                                        <div className="place-self-center ml-6">
                                                            <p className="p-steplix font-bold">
                                                                {element?.name}
                                                            </p>
                                                            <p className="text-xs w-[200px] mt-1">
                                                                {element?.title}{" "}
                                                                <span className="text-steplix-yellow">
                                                                    {
                                                                        element?.companyName
                                                                    }
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-steplix-red h-1 w-[70px] mb-7" />
                                                    <div>{element?.text}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* {loaded && propsRef.current && (
                    <div className="dots 2xl:py-5 xl:py-5 lg:py-16 md:py-5 py-6">
                        {[
                            ...Array(
                                propsRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        propsRef.current?.moveToIdx(idx);
                                    }}
                                    className={`dot ${
                                        currentSlide === idx ? " active" : ""
                                    }  lg:w-5 lg:h-5 w-4 h-4 ${dotColor}`}
                                />
                            );
                        })}
                    </div>
                )} */}
            </div>
        </>
    );
};

export default Carousel;
