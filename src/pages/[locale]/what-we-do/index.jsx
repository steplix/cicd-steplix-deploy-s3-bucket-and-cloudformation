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
      <TransitionWrapper className="w-full h-full relative flex">
        <div className={`bg-what-we-do-steps sm:bg-what-we-do-steps-sm lg:bg-what-we-do-steps-lg xl:bg-what-we-do-steps-xl bg-center bg-no-repeat absolute w-full ${locale !== 'en' ? 'top-0' : '-top-2'} sm:top-0 bg-origin-content h-[1287px] sm:h-[1145px] lg:h-[1250px] xl:h-[1249px]`} style={{ zIndex: -1 }} />
        <div className="container section-container w-full mx-auto flex-col">
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
  
