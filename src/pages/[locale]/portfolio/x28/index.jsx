import parse from 'html-react-parser';

import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import HeadTag from '@/common/components/HeadTag';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import { useTranslation } from '@/common/lib/i18n';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { PortfolioHeader } from '@/modules/Portfolio/PortfoloHeader';
import { PortfolioHeading } from '@/modules/Portfolio/PortfolioHeading';
import { ChanllengeSection } from '@/modules/Portfolio/Challenge';
import { X28_CHIPS } from '@/common/utils/constants';
import { ApproachSection } from '@/modules/Portfolio/Approach';
import Icon from '@/common/components/Icon';
import { WhatWeBuildSection } from '@/modules/Portfolio/WhatWeBuild';
import { MoreProjectsSection } from '@/modules/Portfolio/MoreProjects';

const X28Page = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.portfolio.clients.x28.title'),
          description: t('metaTags.portfolio.clients.x28.description'),
          keywords: t('metaTags.portfolio.clients.x28.keywords'),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <PortfolioHeader
          alt={t('portfolio.cards.x28.imageAlt')}
          src={`/assets/img/portfolio/x28/header.svg`}
        />
        <div className="container py-6 lg:py-10 xl:py-14">
          <PortfolioHeading
            chipLabel={t('portfolio.x28Client.headingIcon')}
            iconChip="lock"
            iconName="x28"
            spanLabel={t('portfolio.x28Client.headingLabel')}
          />
          <ChanllengeSection
            imageClassname={'challenge-image-x28'}
            locale={locale}
            text={parse(t('portfolio.x28Client.challengeDescription'))}
          />
          <ApproachSection
            framework={X28_CHIPS.frameWork}
            locale={locale}
            technology={X28_CHIPS.technology}
          >
            <div className="flex gap-2 lg:gap-3 items-center">
              <Icon className="h-6 lg:h-8 text-blue" name="scrum" />
              <span className="text-purple text-[20px] sm:text-[24px] lg:text-[30.72px] font-semibold">
                Scrum
              </span>
            </div>
          </ApproachSection>
          <WhatWeBuildSection
            imageClassname="what-we-build-image-x28"
            locale={locale}
            weCreateDescription={parse(t('portfolio.x28Client.weCreateDescription'))}
            whatWeBuildDescription={parse(t('portfolio.x28Client.whatWeBuildDescription'))}
          >
            <div className="flex flex-col">
              <div className="flex gap-4 items-center justify-center">
                <ChipColorFilled
                  background="bg-transparent"
                  label={t('portfolio.x28Client.hybridApp')}
                  outlineColor="border-purple"
                  type="mediumBigText"
                />

                <ChipColorFilled
                  background="bg-transparent"
                  label={t('portfolio.x28Client.restAPI')}
                  outlineColor="border-purple"
                  type="mediumBigText"
                />

                <ChipColorFilled
                  background="bg-transparent"
                  label={t('portfolio.x28Client.backoffice')}
                  outlineColor="border-purple"
                  type="mediumBigText"
                />
              </div>
              <p className="text-blue font-semibold mt-8 max-w-[615px] text-center text-[16px]">
                {t('portfolio.x28Client.weCreateProduct')}
              </p>
            </div>
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

export default X28Page;
