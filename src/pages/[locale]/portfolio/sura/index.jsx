import parse from "html-react-parser";

import HeadTag from "@/common/components/HeadTag";
import TransitionWrapper from "@/common/components/TransitionWrapper";
import ChipColorFilled from "@/common/components/Chip/ChipColorFilled";
import { useTranslation } from "@/common/lib/i18n";
import { SURA_CHIPS } from "@/common/utils/constants";
import { PortfolioHeader } from "@/modules/Portfolio/PortfoloHeader";
import { PortfolioHeading } from "@/modules/Portfolio/PortfolioHeading";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { ChanllengeSection } from "@/modules/Portfolio/Challenge";
import { ApproachSection } from "@/modules/Portfolio/Approach";
import Icon from "@/common/components/Icon";
import { WhatWeBuildSection } from "@/modules/Portfolio/WhatWeBuild";
import { MoreProjectsSection } from "@/modules/Portfolio/MoreProjects";

const SuraPage = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t("metaTags.portfolio.clients.sura.title"),
          description: t("metaTags.portfolio.clients.sura.description"),
          keywords: t("metaTags.portfolio.clients.sura.keywords"),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <PortfolioHeader
          alt={t("portfolio.cards.sura.imageAlt")}
          src={`/assets/img/portfolio/sura/header.svg`}
        />
        <div className="container py-6 lg:py-10 xl:py-14">
          <PortfolioHeading
            chipLabel={t("portfolio.suraClient.headingIcon")}
            iconChip="shield"
            iconName="sura"
            spanLabel={t("portfolio.suraClient.headingLabel")}
          />
          <ChanllengeSection
            imageClassname={"challenge-image-sura"}
            locale={locale}
            text={parse(t("portfolio.suraClient.challengeDescription"))}
          />
          <ApproachSection
            framework={SURA_CHIPS.frameWork}
            locale={locale}
            technology={SURA_CHIPS.technology}
          >
            <div className="flex gap-2 lg:gap-3 items-center">
              <Icon className="h-6 lg:h-8 text-blue" name="scrum" />
              <span className="text-purple text-[20px] sm:text-[24px] lg:text-[30.72px] font-semibold">
                Scrum
              </span>
            </div>
          </ApproachSection>
          <WhatWeBuildSection
            imageClassname="what-we-build-image-sura"
            locale={locale}
            weCreateDescription={parse(
              t("portfolio.suraClient.weCreateDescription")
            )}
            whatWeBuildDescription={parse(
              t("portfolio.suraClient.whatWeBuildDescription")
            )}
            whatWeBuildProduct={t("portfolio.suraClient.weCreateProduct")}
          >
            <div className="flex items-center gap-3">
              <div className="w-[184px]">
                <ChipColorFilled
                  background="bg-transparent"
                  label="Web responsive"
                  outlineColor="border-purple"
                  type="slim"
                />
              </div>
              <p>+</p>
              <div className="w-[74px]">
                <ChipColorFilled
                  background="bg-transparent"
                  label="API"
                  outlineColor="border-purple"
                  type="slim"
                />
              </div>
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

export default SuraPage;
