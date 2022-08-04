/* eslint-disable @next/next/no-img-element */
import React from "react";
import _ from "lodash";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-export-i18n";
import Fade from "react-reveal/Fade";
import TestimonialCard from "@/common/components/TestimonialCard";

const ResizePlugin = (slider) => {
    const observer = new ResizeObserver(function () {
        slider.update();
    });

    slider.on("created", () => {
        observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
        observer.unobserve(slider.container);
    });
};

const Carousel = () => {
    const { t } = useTranslation();

    //
    // UseStates
    //
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false);

    //
    // Variables
    //
    const AUTO_SCROLL = [
        (slider) => {
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
                clearTimeout(timeout);
            }
            function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(() => {
                    slider.next();
                }, 2000);
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true;
                    clearNextTimeout();
                });
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false;
                    nextTimeout();
                });
                nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        },
    ];

    const ARRAY_CLIENTS = [
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-yellow",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-sura.svg",
            alt: "sura",
            name: "Juan Ramallo",
            title: t("happyClients.clientSura.title"),
            companyName: "Seguros SURA",
            borderColor: "border-red",
            text: t("happyClients.clientSura.text"),
        },
        {
            image: "/assets/img/clients/sinoar-logo.webp",
            alt: "SinoAr",
            name: "Ramón Uranga",
            title: t("happyClients.clientSinoar.title"),
            companyName: "SinoAr",
            borderColor: "border-blue",
            text: t("happyClients.clientSinoar.text"),
        },
        {
            image: "/assets/img/clients/client-pow.svg",
            alt: "Pow.",
            name: "Guido Ginesi",
            title: t("happyClients.clientPow.title"),
            companyName: "Pow.",
            borderColor: "border-yellow",
            text: t("happyClients.clientPow.text"),
        },

        {
            image: "/assets/img/clients/client-vacaygreen.svg",
            alt: "VacayGreen",
            name: "Gonzalo Arreche",
            title: t("happyClients.clientVacayGreen.title"),
            companyName: "VacayGreen",
            borderColor: "border-red",
            text: t("happyClients.clientVacayGreen.text"),
        },
    ];

    //
    // useKeenSlider
    //
    const [sliderRef, propsRef] = useKeenSlider(
        //scroll one at a time, and dots
        {
            loop: true,
            initial: 0,
            slides: {
                perView: 2,
                spacing: 0,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        },
        //auto-scroll
        AUTO_SCROLL,
        [ResizePlugin]
        //
    );

    const [sliderRefMobile, propsRefMobile] = useKeenSlider(
        {
            initial: 0,
            loop: true,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        },
        //auto-scroll
        AUTO_SCROLL
    );

    return (
        <>
            <Fade cascade>
                {/* show when it is mobile and tablet */}
                <div className="block xl:hidden">
                    <div className="navigation-wrapper">
                        <div ref={sliderRefMobile} className="keen-slider">
                            {ARRAY_CLIENTS.map((element, index) => (
                                <div
                                    key={`image-${index}`}
                                    className="keen-slider__slide number-slide"
                                >
                                    <TestimonialCard
                                        image={element?.image}
                                        imageAlt={`${element?.companyName} logo`}
                                        witnessName={element?.name}
                                        witnessPosition={element?.title}
                                        witnessCompany={element?.companyName}
                                        testimonial={element?.text}
                                        cardBorderColor={element?.borderColor}
                                        divideColor="bg-red"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* show when it is desktop or bigger */}
                <div className="hidden xl:block lg:mr-10 xl:ml-0">
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider flex">
                            {_.chunk(ARRAY_CLIENTS, 1).map((subimages, i) => (
                                <div
                                    key={`subimage-${i}`}
                                    className="keen-slider__slide number-slide"
                                >
                                    {subimages.map((element, j) => (
                                        <div key={j}>
                                            <TestimonialCard
                                                image={element?.image}
                                                imageAlt={`${element?.companyName} logo`}
                                                witnessName={element?.name}
                                                witnessPosition={element?.title}
                                                witnessCompany={
                                                    element?.companyName
                                                }
                                                testimonial={element?.text}
                                                cardBorderColor={
                                                    element?.borderColor
                                                }
                                                divideColor="bg-red"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {loaded && propsRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() ||
                                        propsRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() ||
                                        propsRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        propsRef.current.track.details.slides
                                            .length -
                                            1
                                    }
                                />
                            </>
                        )}
                    </div>
                </div>
            </Fade>
        </>
    );
};

function Arrow(props) {
    return (
        <svg
            onClick={props.onClick}
            className={`h-8 w-8 absolute top-[50%] fill-[#fff] ${
                props.left
                    ? "left-10 lg:left-16 xl:left-1"
                    : "right-10 lg:right-16 xl:right-1"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}

export default Carousel;
