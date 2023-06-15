/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import propTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "@/common/lib/i18n";
import Icon from "../Icon";

const adaptiveHeight = (slider, adaptiveHeightValue) => {
    function updateHeight() {
        slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight +
            adaptiveHeightValue +
            "px";
    }
    slider.on("created", updateHeight);
};

const PortfolioCarousel = ({
    children,
    carouselClassName,
    spacing,
    adaptiveHeightValue,
}) => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            initial: 1,
            breakpoints: {
                "(min-width: 1024px)": {
                    slides: { perView: 2 },
                },
            },

            slideChanged(slider) {
                slider.slides.map((slide, index) => {
                    if (index === slider.track.details.rel) {
                        slide.children[0].classList.add("card-active");
                    } else {
                        slide.children[0].classList.remove("card-active");
                    }
                });

                setCurrentSlide(slider?.track?.details?.rel);
            },
            created(slider) {
                if (slider)
                    slider.slides[1].children[0].classList.add("card-active");
                setLoaded(true);
            },
        },
        [(slider) => adaptiveHeight(slider, adaptiveHeightValue)]
    );
    return (
        <div className="relative w-full flex flex-col mx-auto items-center">
            <div
                ref={sliderRef}
                className={`keen-slider ${carouselClassName}`}
                style={{
                    // hide the overflow on screens wider than 1024px
                    overflow:
                        instanceRef?.current?.size > 520
                            ? "hidden"
                            : "visible !important",
                }}
            >
                {children}
            </div>

            {loaded && instanceRef.current && (
                <>
                    <button
                        className="h-[48px] hidden lg:block w-[48px] absolute left-0 top-[50%] transform translate-y-[-50%] bg-none rounded-full"
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef?.current.prev()
                        }
                        aria-label={t("carouselButtonAriaLabel.backward")}
                    >
                        <Icon name="back" className="h-[48px] w-[48px]" />
                    </button>
                    <button
                        className="h-[48px] hidden lg:block w-[48px] absolute right-0 top-[50%] transform translate-y-[-50%]"
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef?.current.next()
                        }
                        aria-label={t("carouselButtonAriaLabel.forward")}
                    >
                        <Icon name="forward" className="h-[48px] w-[48px]" />
                    </button>
                </>
            )}
        </div>
    );
};

PortfolioCarousel.propTypes = {
    children: propTypes.node.isRequired,
    carouselClassName: propTypes.string.isRequired,
    spacing: propTypes.number,
    adaptiveHeight: propTypes.number,
};

export default PortfolioCarousel;
