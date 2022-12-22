/* eslint-disable @next/next/no-img-element */
import React from "react"
import propTypes from 'prop-types';
import { useKeenSlider } from "keen-slider/react"
import Icon from "../Icon"

const PortfolioCarousel = ({ children, carouselClassName }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = React.useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        initial: 0,
        breakpoints: {
          "(min-width: 1024px)": {
            slides: { perView: 2, spacing: 12 }
          },
        },
      slideChanged(slider) {
        setCurrentSlide(slider?.track?.details?.rel)
      },
      created() {
        setLoaded(true)
      },
      
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
    ])
  
    return (
        <div className="relative w-full my-4 flex flex-col container mx-auto items-center">
          <div ref={sliderRef} className={`keen-slider ${carouselClassName}`}>
            {
              children
            }
          </div>
          {loaded && instanceRef.current && (
            <div className="dots mt-6 md:hidden">
              {[
                ...Array(instanceRef?.current?.track?.details?.slides?.length).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                )
              })}
            </div>
        )}
          {loaded && instanceRef.current && (
            <>
              <button className="h-[48px] hidden md:block w-[48px] absolute left-0 top-[50%] transform translate-y-[-50%] bg-none rounded-full" onClick={(e) => e.stopPropagation() || instanceRef?.current.prev()}>
                <Icon name="back" className="h-[48px] w-[48px]" />
              </button>
              <button className="h-[48px] hidden md:block w-[48px] absolute right-0 top-[50%] transform translate-y-[-50%]" onClick={(e) => e.stopPropagation() || instanceRef?.current.next()}>
                <Icon name="forward" className="h-[48px] w-[48px]" />
              </button>
            </>
        )}
        </div>
    )
};

PortfolioCarousel.propTypes = {
  children: propTypes.node.isRequired,
  carouselClassName: propTypes.string.isRequired
};


export default PortfolioCarousel;