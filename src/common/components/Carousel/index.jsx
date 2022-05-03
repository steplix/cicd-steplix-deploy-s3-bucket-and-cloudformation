/* eslint-disable @next/next/no-img-element */
import React from "react";
import _ from "lodash";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-export-i18n";
import Fade from "react-reveal/Fade";

/* const ResizePlugin = (slider) => {
    const observer = new ResizeObserver(function () {
        slider.update();
    });

    slider.on("created", () => {
        observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
        observer.unobserve(slider.container);
    });
}; */

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
            borderColor: "border-red",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-sura.svg",
            alt: "sura",
            name: "Juan Ramallo",
            title: t("happyClients.clientSura.title"),
            companyName: "Seguros SURA",
            borderColor: "border-yellow",
            text: t("happyClients.clientSura.text"),
        },
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-red",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-red",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-sura.svg",
            alt: "sura",
            name: "Juan Ramallo",
            title: t("happyClients.clientSura.title"),
            companyName: "Seguros SURA",
            borderColor: "border-yellow",
            text: t("happyClients.clientSura.text"),
        },
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-red",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-red",
            text: t("happyClients.clientFinket.text"),
        },
        {
            image: "/assets/img/clients/client-sura.svg",
            alt: "sura",
            name: "Juan Ramallo",
            title: t("happyClients.clientSura.title"),
            companyName: "Seguros SURA",
            borderColor: "border-yellow",
            text: t("happyClients.clientSura.text"),
        },
        {
            image: "/assets/img/clients/client-finket-v2.svg",
            alt: "CTECH",
            name: "Lucas Bianchi",
            title: t("happyClients.clientFinket.title"),
            companyName: "CTECH",
            borderColor: "border-red",
            text: t("happyClients.clientFinket.text"),
        },
    ];

    //
    //useKeenSlider
    //

    const [sliderRef, propsRef] = useKeenSlider(
        {
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
        }
        /*  {
            initial: 0,
            slides: {
                perView: 2,
            },
        },
        [ResizePlugin]
 */
        //auto-scroll
        /* {
            loop: true,
        },
        [
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
        ] */
        //
    );

    const [sliderRefMobile, propsRefMobile] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    //useKeenSlider auto-scroll

    return (
        <>
            <Fade cascade>
                {/* show when it is mobile and tablet */}
                <div className="block xl:hidden">
                    <div className="navigation-wrapper">
                        <div ref={sliderRefMobile} className="keen-slider">
                            {arrayClients.map((element, index) => (
                                <div
                                    key={`image-${index}`}
                                    className="keen-slider__slide number-slide"
                                >
                                    <div
                                        className={`${element?.borderColor} border-2 rounded-3xl min-h-[430px] md:min-h-[290px] w-full p-3`}
                                    >
                                        <div className="flex">
                                            <div>
                                                <img
                                                    className="h-4 w-16 md:h-6 md:w-24 lg:h-9 lg:w-32"
                                                    src={element?.image}
                                                    alt={element.alt}
                                                />
                                            </div>
                                            <div className="place-self-center ml-6">
                                                <p className="text-3xl lg:text-5xl font-semibold">
                                                    {element?.name}
                                                </p>
                                                <p className="text-base md:text-xl lg:text-3xl">
                                                    {element?.title}{" "}
                                                    <span className="text-yellow">
                                                        {element?.companyName}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-red text-base md:text-xl lg:text-3xl h-1 w-[70px] mb-7" />
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
                                            propsRefMobile.current?.moveToIdx(
                                                idx
                                            );
                                        }}
                                        className={`dot ${
                                            currentSlide === idx
                                                ? " active"
                                                : ""
                                        } 2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-4 h-4 ${dotColor}`}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
                {/* show when it is desktop or bigger */}
                <div className="hidden xl:block text-white">
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider flex">
                            {_.chunk(arrayClients, 2).map((subimages, i) => (
                                <div
                                    key={`subimage-${i}`}
                                    className="keen-slider__slide number-slide gap-12"
                                >
                                    {subimages.map((element, j) => (
                                        <div
                                            className={`${element?.borderColor} border-2 rounded-3xl xl:h-[520px] xl:w-[450px] 2xl:h-[580px] 2xl:w-[520px] mb-8`}
                                            key={j}
                                        >
                                            <div className="flex justify-end p-7">
                                                <div className="relative h-[560px] w-[450px] ">
                                                    <div>
                                                        <div className="flex">
                                                            <div>
                                                                <img
                                                                    className="xl:h-8 xl:w-24"
                                                                    src={
                                                                        element?.image
                                                                    }
                                                                    alt={
                                                                        element.alt
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="place-self-center ml-6">
                                                                <p className="xl:text-3xl font-bold">
                                                                    {
                                                                        element?.name
                                                                    }
                                                                </p>
                                                                <p className="xl:text-xl">
                                                                    {
                                                                        element?.title
                                                                    }{" "}
                                                                    <span className="text-yellow">
                                                                        {
                                                                            element?.companyName
                                                                        }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="bg-red h-1 w-[70px] mb-7" />
                                                        <div className="xl:text-xl 2xl:text-3xl">
                                                            {element?.text}
                                                        </div>
                                                    </div>
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
                                            currentSlide === idx
                                                ? " active"
                                                : ""
                                        }  lg:w-5 lg:h-5 w-4 h-4 ${dotColor}`}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </Fade>
        </>
    );
};

export default Carousel;
