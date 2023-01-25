import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import Icon from "../Icon";
import { isAsset } from "@/common/utils/validators";

const TechnologiesSlider = ({
  images,
  slides,
  spacingBetweenSlides,
  imgClass,
}) => {
  const animation = { duration: 30000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: slides,
      spacing: spacingBetweenSlides,
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
    <div className="max-h-[34px]">
      <div className="keen-slider items-center gap-4" ref={sliderRef}>
        {images.map((image, index) => {
          return (
            <div
              className={`keen-slider__slide flex items-center`}
              key={index}
            >
              {isAsset(image.image) ? (
                <img src={image.image} alt={image.alt} className={imgClass} />
              ) : (
                <Icon name={image.image} className={image.class ?? imgClass} />
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
  slides: PropTypes.number,
  spacingBetweenSlides: PropTypes.number,
  imgClass: PropTypes.string,
};

TechnologiesSlider.defaultProps = {
  slides: 3,
  spacingBetweenSlides: 0,
};

export default TechnologiesSlider;
