import parse from 'html-react-parser';

import HeadTag from '@/common/components/HeadTag';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import { useTranslation } from '@/common/lib/i18n';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { PortfolioHeader } from '@/modules/Portfolio/PortfoloHeader';
import { PortfolioHeading } from '@/modules/Portfolio/PortfolioHeading';
import { ChanllengeSection } from '@/modules/Portfolio/Challenge';
import { FINKET_CHIPS } from '@/common/utils/constants';
import { ApproachSection } from '@/modules/Portfolio/Approach';
import { WhatWeBuildSectionB } from '@/modules/Portfolio/WhatWeBuildB';
import { MoreProjectsSection } from '@/modules/Portfolio/MoreProjects';
import { NumericalLabelComponent } from '@/common/components/NumericalLabel';
const FinketPage = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.portfolio.clients.finket.title'),
          description: t('metaTags.portfolio.clients.finket.description'),
          keywords: t('metaTags.portfolio.clients.finket.keywords'),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <PortfolioHeader
          alt={t('portfolio.cards.finket.imageAlt')}
          src={`/assets/img/portfolio/finket/header.svg`}
        />
        <div className="container py-6 lg:py-10 xl:py-14">
          <PortfolioHeading
            chipLabel={t('portfolio.finketClient.headingIcon')}
            iconChip="fintechB"
            iconName="finket"
            spanLabel={t('portfolio.finketClient.headingLabel')}
          />
          <ChanllengeSection
            imageClassname={'challenge-image-finket'}
            locale={locale}
            text={parse(t('portfolio.finketClient.challengeDescription'))}
          />
          <ApproachSection
            framework={FINKET_CHIPS.frameWork}
            locale={locale}
            technology={FINKET_CHIPS.technology}
          >
            <div className="flex gap-2 lg:gap-3 items-center justify-center">
              <span className="text-purple text-[20px] sm:text-[24px] lg:text-[30.72px] font-semibold">
                Spotify Agile + Scrum
              </span>
            </div>
          </ApproachSection>
          <WhatWeBuildSectionB
            functionalities={FINKET_CHIPS.functionalities}
            imageClassname="what-we-build-image-finket"
            imageFunctionalityClassname="what-we-build-functionalities-finket"
            locale={locale}
            productChips={FINKET_CHIPS.productsChips}
            products={FINKET_CHIPS.products}
            quote={FINKET_CHIPS.quote}
            whatWeBuildDescription={parse(t('portfolio.finketClient.whatWeBuildDescription'))}
            whatWeBuildProduct={t('portfolio.finketClient.weCreateProduct')}
          >
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:text-lg">
              <p className="font-poppins text-black">
                {t('portfolio.weCreateA')}
                <span className="text-blue font-semibold">
                  {t('portfolio.finketClient.weCreateProduct')}
                </span>
              </p>
              <div className="flex justify-center gap-3">
                <NumericalLabelComponent label={t('portfolio.features')} number="+ 125" />
                <NumericalLabelComponent label={t('portfolio.microservices')} number="+ 90" />
              </div>
            </div>
          </WhatWeBuildSectionB>
          <MoreProjectsSection locale={locale} />
        </div>
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

export default FinketPage;
