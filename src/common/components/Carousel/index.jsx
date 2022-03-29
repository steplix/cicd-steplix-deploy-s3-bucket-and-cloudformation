import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import agrocanje from "@/public/assets/logos/clients/agrocanje.svg";
import sura from "@/public/assets/logos/clients/sura.svg";
import finket from "@/public/assets/logos/clients/finket.svg";
import c5n from "@/public/assets/logos/clients/c5n.svg";
import garbarino from "@/public/assets/logos/clients/garbarino.svg";
import pow from "@/public/assets/logos/clients/pow.svg";
import smartium from "@/public/assets/logos/clients/smartium.svg";

import _ from "lodash";
import PropTypes from "prop-types";
const Carousel = () => {
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
            image: agrocanje,
            alt: "agrocanje",
        },
        {
            image: sura,
            alt: "sura",
        },
        {
            image: finket,
            alt: "afinket",
        },
        {
            image: c5n,
            alt: "c5n",
        },
        {
            image: garbarino,
            alt: "garbarino",
        },
        {
            image: pow,
            alt: "pow",
        },
        {
            image: smartium,
            alt: "smartium",
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
                                className="keen-slider__slide number-slide relative h-32 w-32 "
                            >
                                <Image src={element?.image} alt={element.alt} />
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
                                        className="flex flex-col justify-between w-[230px] h-[130px] px-5 pt-9 pb-5 md:w-[175px] "
                                        key={j}
                                    >
                                        <div className="flex justify-end">
                                            <div className="relative h-16 w-32 ">
                                                <Image
                                                    src={element?.image}
                                                    alt={element.alt}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {loaded && propsRef.current && (
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
                )}
            </div>
        </>
    );
};

export default Carousel;
