import React from "react";
import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import { isAsset } from "@/common/utils/validators";
import Icon from "../Icon";

const TechnologiesSlider = ({
  images,
  spacingBetweenSlides,
}) => {
  const animation = { duration: 30000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
      spacing: spacingBetweenSlides,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 5,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 5,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 8,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 10,
        },
      },
      '(min-width: 1536px)': {
        slides: {
          perView: 10,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="max-h-[53px]">
      <div className="keen-slider items-center gap-4" ref={sliderRef}>
        {images.map((image, index) => {
          return (
            <div
              className={`keen-slider__slide flex items-center justify-center`}
              key={index}
            >
              {isAsset(image.image) ? (
                <img src={image.image} alt={image.alt} className={image.class} />
              ) : (
                <Icon name={image.image} className={image.class} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

TechnologiesSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  spacingBetweenSlides: PropTypes.number,
};

TechnologiesSlider.defaultProps = {
  spacingBetweenSlides: 0,
};

export default TechnologiesSlider;
