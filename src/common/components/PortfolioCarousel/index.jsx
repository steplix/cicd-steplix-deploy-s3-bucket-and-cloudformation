/* eslint-disable @next/next/no-img-element */
import React from 'react';
import propTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';

import Icon from '../Icon';

import { useTranslation } from '@/common/lib/i18n';

const adaptiveHeight = (slider, adaptiveHeightValue) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + adaptiveHeightValue + 'px';
  }
  slider.on('created', updateHeight);
};

const PortfolioCarousel = ({ children, carouselClassName, spacing, adaptiveHeightValue }) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      breakpoints: {
        '(min-width: 1024px)': {
          slides: { perView: 2, spacing },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider?.track?.details?.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [(slider) => adaptiveHeight(slider, adaptiveHeightValue)],
  );

  return (
    <div className="relative w-full flex flex-col mx-auto items-center">
      <div ref={sliderRef} className={`keen-slider ${carouselClassName}`}>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-6 sm:hidden">
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
            className="h-[48px] hidden sm:block w-[48px] absolute left-0 top-[50%] transform translate-y-[-50%] bg-none rounded-full"
            onClick={(e) => e.stopPropagation() || instanceRef?.current.prev()}
          >
            <Icon className="h-[48px] w-[48px]" name="back" />
          </button>
          <button
            aria-label={t('carouselButtonAriaLabel.forward')}
            className="h-[48px] hidden sm:block w-[48px] absolute right-0 top-[50%] transform translate-y-[-50%]"
            onClick={(e) => e.stopPropagation() || instanceRef?.current.next()}
          >
            <Icon className="h-[48px] w-[48px]" name="forward" />
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
