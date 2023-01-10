import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "@/common/lib/i18n";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import Intro from "@/modules/what-we-do/Intro";
import OurSteps from "@/modules/what-we-do/OurSteps";
import HowDoWeDoIt from "@/modules/what-we-do/HowWeDoIt";

export default function WhatWeDo({ locale }) {

  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        title={t("metaTags.whatWeDo.title")}
        description={t("metaTags.whatWeDo.description")}
        keywords={t("metaTags.whatWeDo.keywords")}
      />
      <div className="w-full relative h-[fit-content] flex">
        <div className="w-full bg-what-we-do-steps sm:bg-what-we-do-steps-sm lg:bg-what-we-do-steps-lg xl:bg-what-we-do-steps-xl bg-no-repeat bg-contain bg-center top-[340px] md:top-[300px] bg-origin-content absolute h-[1080px] sm:h-[1030px] lg:h-[1120px] xl:h-[1160px]" />
        <div className="py-10 px-4 sm:px-0 w-full container mx-auto flex-col">
          <Intro locale={locale} />
          <OurSteps locale={locale} />
          <HowDoWeDoIt locale={locale} />
        </div>
      </div>
    </>
  );
}


export async function getStaticPaths(...args) {
    const pathsWithLocale = getPathSlugs();
    return {
      paths: pathsWithLocale,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    return {
      props: {
        ...params
      }
    };
  }
  
