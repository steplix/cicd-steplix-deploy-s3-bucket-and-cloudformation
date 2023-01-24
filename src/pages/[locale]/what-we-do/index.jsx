import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "@/common/lib/i18n";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import Intro from "@/modules/what-we-do/Intro";
import OurSteps from "@/modules/what-we-do/OurSteps";
import HowDoWeDoIt from "@/modules/what-we-do/HowWeDoIt";
import TransitionWrapper from "@/common/components/TransitionWrapper";


export default function WhatWeDo({ locale }) {

  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag metaContent={{title: t("metaTags.whatWeDo.title"), description: t("metaTags.whatWeDo.description"), keywords: t("metaTags.whatWeDo.keywords")}} />
      <TransitionWrapper className="w-full relative h-[fit-content] flex">
        <div className="section-container w-full container mx-auto flex-col relative">
          <Intro locale={locale} />
          <OurSteps locale={locale} />
          <HowDoWeDoIt locale={locale} />
        </div>
      </TransitionWrapper>
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
  
