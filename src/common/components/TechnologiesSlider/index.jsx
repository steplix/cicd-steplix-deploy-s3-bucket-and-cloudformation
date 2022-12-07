import React from "react";
import { useKeenSlider } from "keen-slider/react"

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

const TechnologiesSlider = () => {

  const animation = { duration: 30000, easing: (t) => t }


  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div className="flex flex-row justify-around my-46 h-28 w-96 m-auto overflow-hidden after:right-0 after:top-0">
      <div className="flex w-28 keen-slider" ref={sliderRef}>
        {images.map((image, index) => {
          return (
            <div className={`keen-slider__slide number-slide${index}`}key={index}>
              <img width="100" height="50" src={image.image} alt={image.alt} />
            </div>
          );
        })} 
      </div>
    </div>
  );
};

export default TechnologiesSlider;
