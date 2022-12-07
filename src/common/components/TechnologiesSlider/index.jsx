import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"
import aws from "@/public/assets/img/technologies/aws.svg";
import docker from "@/public/assets/img/technologies/docker.svg";
import figma from "@/public/assets/img/technologies/figma.svg";
import flutter from "@/public/assets/img/technologies/flutter.svg";
import git from "@/public/assets/img/technologies/git.svg";
import kotlin from "@/public/assets/img/technologies/kotlin.svg";
import nextjs from "@/public/assets/img/technologies/nextjs.svg";
import nodejs from "@/public/assets/img/technologies/nodejs.svg";
import reactjs from "@/public/assets/img/technologies/aws.svg";

const images = [
  {
    image: aws,
    alt: "Amazon Logo",
  },
  {
    image: docker,
    alt: "Docker Logo",

  },
  {
    image: figma,
    alt: "Figma Logo",

  },
  {
    image: flutter,
    alt: "Flutter Logo",

  },
  {
    image: git,
    alt: "Git Logo",

  },
  {
    image: kotlin,
    alt: "Kotlin Logo",

  },
  {
    image: nextjs,
    alt: "Next Logo",

  },
  {
    image: nodejs,
    alt: "Node Logo",

  },
  {
    image: reactjs,
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
              <Image width={100} height={50} src={image.image} alt={image.alt} />
            </div>
          );
        })} 
      </div>
    </div>
  );
};

export default TechnologiesSlider;
