import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import Gradient from '@/common/components/Title/Gradient';
import HeadTag from '@/common/components/HeadTag';
import CardIcon from '@/common/components/CardIcon';
import PortfolioCard from '@/common/components/PortfolioCard';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import { useTranslation } from '@/common/lib/i18n';
import { usePortfolioTranslation } from '@/common/hooks/usePortfolioTranslation';
import { stagger } from '@/common/lib/animation';
import { PORTFOLIO_CARDS } from '@/common/utils/constants';
import Carousel from '@/common/components/Carousel';

const PortfolioView = ({ locale }) => {
  const { t } = useTranslation(locale);
  const { industries } = usePortfolioTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.portfolio.title'),
          description: t('metaTags.portfolio.description'),
          keywords: t('metaTags.portfolio.keywords'),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <section className="container pb-[72px]">
          <Carousel
            hasArrows
            adaptiveHeightValue={96}
            cardClassName="portfolio-card--active"
            carouselClassName={'portfolioCarousel sm:h-[500px]'}
          >
            {PORTFOLIO_CARDS.map(({ name, industryIconName, iconBrandClass }) => {
              return (
                <div
                  key={name}
                  className="keen-slider__slide rounded-[20px] flex justify-center items-center"
                >
                  <PortfolioCard
                    iconBrandClass={iconBrandClass}
                    industryIconName={industryIconName}
                    name={name}
                  />
                </div>
              );
            })}
          </Carousel>
          <div className="mt-[14px] flex flex-col gap-6">
            <Gradient
              borderPosition="left"
              borderWidth="border-2"
              content={t('PortfolioSection.subtitle')}
              height="h-[32px]"
              size="text-4xl"
              type="h1"
            />
            <p className="text-[13px] lg:text-base text-black leading-[16.9px] lg:leading-[20.8px] ">{t('PortfolioSection.parraf1')}</p>
          </div>
          <motion.div
            ref={ref}
            animate={controls}
            className="mx-auto w-full max-w-[260px] sm:max-w-none mt-12 gap-4 grid grid-cols-2 sm:grid-cols-5"
            initial="initial"
            variants={stagger}
          >
            {industries.map((industry) => (
              <CardIcon key={industry.text} iconName={industry.icon} text={industry.text} />
            ))}
          </motion.div>
        </section>
      </TransitionWrapper>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();

  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}

export default PortfolioView;
