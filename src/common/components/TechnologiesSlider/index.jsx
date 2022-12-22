import React from "react";
import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";

const images = [
  {
    image: "static/technologies/aws.svg",
    alt: "Amazon Logo",
  },
  {
    image: "static/technologies/docker.svg",
    alt: "Docker Logo",
  },
  {
    image: "static/technologies/figma.svg",
    alt: "Figma Logo",
  },
  {
    image: "static/technologies/flutter.svg",
    alt: "Flutter Logo",
  },
  {
    image: "static/technologies/git.svg",
    alt: "Git Logo",
  },
  {
    image: "static/technologies/kotlin.svg",
    alt: "Kotlin Logo",
  },
  {
    image: "static/technologies/nextjs.svg",
    alt: "Next Logo",
  },
  {
    image: "static/technologies/nodejs.svg",
    alt: "Node Logo",
  },
  {
    image: "static/technologies/reactjs.svg",
    alt: "React Logo",
  },
];

const TechnologiesSlider = ({
  images,
  slides,
  spacingBeetWeenSlides,
  imgClass,
}) => {
  const animation = { duration: 30000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: slides,
      spacing: spacingBeetWeenSlides,
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
    <div className="">
      <div className="keen-slider" ref={sliderRef}>
        {images.map((image, index) => {
          return (
            <div className={`keen-slider__slide w-full flex gap-2`} key={index}>
              <img src={image.image} alt={image.alt} className={imgClass} />
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
  spacingBeetWeenSlides: PropTypes.number,
  imgClass: PropTypes.string,
};

TechnologiesSlider.defaultProps = {
  slides: 3,
  spacingBeetWeenSlides: 0,
};

export default TechnologiesSlider;
