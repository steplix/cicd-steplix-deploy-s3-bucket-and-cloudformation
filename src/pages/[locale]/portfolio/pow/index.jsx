import parse from 'html-react-parser';

import HeadTag from '@/common/components/HeadTag';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import { useTranslation } from '@/common/lib/i18n';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { PortfolioHeader } from '@/modules/Portfolio/PortfoloHeader';
import { PortfolioHeading } from '@/modules/Portfolio/PortfolioHeading';
import { ChanllengeSection } from '@/modules/Portfolio/Challenge';
import { POW_CHIPS } from '@/common/utils/constants';
import { ApproachSection } from '@/modules/Portfolio/Approach';
import Icon from '@/common/components/Icon';
import { WhatWeBuildSection } from '@/modules/Portfolio/WhatWeBuild';
import { MoreProjectsSection } from '@/modules/Portfolio/MoreProjects';

const PowPage = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.portfolio.clients.pow.title'),
          description: t('metaTags.portfolio.clients.pow.description'),
          keywords: t('metaTags.portfolio.clients.pow.keywords'),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <PortfolioHeader
          alt={t('portfolio.cards.pow.imageAlt')}
          src={`/assets/img/portfolio/pow/header.svg`}
        />
        <div className="container py-6 lg:py-10 xl:py-14">
          <PortfolioHeading
            chipLabel={t('portfolio.powClient.headingIcon')}
            iconChip="eccommerceB"
            iconName="pow"
            spanLabel={t('portfolio.powClient.headingLabel')}
          />
          <ChanllengeSection
            imageClassname={'challenge-image-pow'}
            locale={locale}
            text={parse(t('portfolio.powClient.challengeDescription'))}
          />
          <ApproachSection
            framework={POW_CHIPS.frameWork}
            locale={locale}
            technology={POW_CHIPS.technology}
          >
            <div className="flex gap-2 lg:gap-3 items-center">
              <Icon className="h-6 lg:h-8 text-blue" name="scrum" />
              <span className="text-purple text-[20px] sm:text-[24px] lg:text-[30.72px] font-semibold">
                Scrum
              </span>
            </div>
          </ApproachSection>
          <WhatWeBuildSection
            imageClassname="what-we-build-image-pow"
            locale={locale}
            weCreateDescription={parse(t('portfolio.powClient.weCreateDescription'))}
            whatWeBuildDescription={parse(t('portfolio.powClient.whatWeBuildDescription'))}
            whatWeBuildProduct={t('portfolio.powClient.weCreateProduct')}
          >
            <p className="font-poppins text-black">
              {t('portfolio.weCreate')}
              <span className="text-blue font-semibold">
                {t('portfolio.powClient.weCreateProduct')}
              </span>
            </p>
          </WhatWeBuildSection>
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

export default PowPage;
