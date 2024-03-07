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

const PortfolioCarousel = ({
  children,
  carouselClassName,
  adaptiveHeightValue,
  cardClassName,
  hasArrows,
}) => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = React.useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 1,
      slides: {
        origin: 'center',
        perView: 1.3,
        spacing: 8,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: { perView: 2.2 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 2.3 },
        },
        '(min-width: 1280px)': {
          slides: { perView: 2 },
        },
      },

      slideChanged(slider) {
        slider.slides.map((slide, index) => {
          if (index === slider.track.details.rel) {
            slide.children[0].classList.add(cardClassName);
          } else {
            slide.children[0].classList.remove(cardClassName);
          }
        });
      },
      created(slider) {
        if (slider) slider.slides[1].children[0].classList.add(cardClassName);
        setLoaded(true);
      },
    },
    [(slider) => adaptiveHeight(slider, adaptiveHeightValue)],
  );

  return (
    <div className="relative w-full flex flex-col items-center">
      <div ref={sliderRef} className={`keen-slider ${carouselClassName}`}>
        {children}
      </div>

      {hasArrows && loaded && instanceRef.current && (
        <>
          <button
            aria-label={t('carouselButtonAriaLabel.backward')}
            className="h-[48px] hidden lg:block w-[48px] absolute left-0 top-[50%] transform translate-y-[-50%] bg-none rounded-full"
            onClick={(e) => e.stopPropagation() || instanceRef?.current.prev()}
          >
            <Icon className="h-[48px] w-[48px]" name="back" />
          </button>
          <button
            aria-label={t('carouselButtonAriaLabel.forward')}
            className="h-[48px] hidden lg:block w-[48px] absolute right-0 top-[50%] transform translate-y-[-50%]"
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
  cardClassName: propTypes.string.isRequired,
  adaptiveHeight: propTypes.number,
  hasArrows: propTypes.bool,
};

export default PortfolioCarousel;
