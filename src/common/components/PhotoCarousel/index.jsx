/* eslint-disable @next/next/no-img-element */
import React from 'react';
import propTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';

import Icon from '../Icon';

import { useTranslation } from '@/pages/lib/i18n';
import { imageHoverZoomIn } from '@/pages/lib/animation';
import { LOCALE_SLUGS } from '@/common/utils/constants';

const PhotoCarousel = ({ photoArray, locale }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const { t } = useTranslation(locale);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      breakpoints: {
        '(min-width: 1024px)': {
          slides: { perView: 2, spacing: 16 },
        },
        '(min-width: 1280px)': {
          slides: { perView: 3, spacing: 16 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider?.track?.details?.rel);
      },
      created() {
        setLoaded(true);
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
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return (
    <div className="relative w-full flex flex-col container mx-auto items-center">
      <div ref={sliderRef} className="keen-slider lg:max-w-[774px] xl:max-w-[990px] rounded-[20px]">
        {photoArray.map(({ src, alt }) => (
          <div key={src} className="keen-slider__slide number-slide rounded-[20px]">
            <div className="carousel-item-container">
              <motion.img
                alt={t(alt)}
                className="carousel-item-container__image"
                src={src}
                whileHover={imageHoverZoomIn}
              />
            </div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-3 md:hidden">
          {[...Array(instanceRef?.current?.track?.details?.slides?.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
              />
            );
          })}
        </div>
      )}
      {loaded && instanceRef.current && (
        <>
          <button
            aria-label={t('carouselButtonAriaLabel.backward')}
            className="h-[48px] hidden md:block w-[48px] absolute left-0 top-[50%] transform translate-y-[-50%] bg-none rounded-full"
            onClick={(e) => e.stopPropagation() || instanceRef?.current.prev()}
          >
            <Icon className="h-[48px] w-[48px]" name="back" />
          </button>
          <button
            aria-label={t('carouselButtonAriaLabel.forward')}
            className="h-[48px] hidden md:block w-[48px] absolute right-0 top-[50%] transform translate-y-[-50%]"
            onClick={(e) => e.stopPropagation() || instanceRef?.current.next()}
          >
            <Icon className="h-[48px] w-[48px]" name="forward" />
          </button>
        </>
      )}
    </div>
  );
};

PhotoCarousel.propTypes = {
  photoArray: propTypes.arrayOf(
    propTypes.shape({
      src: propTypes.string,
    }),
  ).isRequired,
  locale: propTypes.oneOf(LOCALE_SLUGS),
};

export default PhotoCarousel;
