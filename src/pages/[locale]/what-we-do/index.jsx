import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "@/common/lib/i18n";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import Intro from "@/modules/what-we-do/Intro";
import OurSteps from "@/modules/what-we-do/OurSteps";
import TransitionWrapper from "@/common/components/TransitionWrapper";
import CustomNextLink from "@/common/components/CustomNextLink";

export default function WhatWeDo({ locale }) {
  const { t } = useTranslation(locale);
  
  return (
    <>
      <HeadTag metaContent={{title: t("metaTags.whatWeDo.title"), description: t("metaTags.whatWeDo.description"), keywords: t("metaTags.whatWeDo.keywords")}} />
      <TransitionWrapper className="w-full h-full relative flex flex-col">
        <div className={`z-[-1] bg-what-we-do-steps sm:bg-what-we-do-steps-sm lg:bg-what-we-do-steps-lg xl:bg-what-we-do-steps-xl bg-center bg-no-repeat absolute w-full ${locale !== 'en' ? 'top-0' : '-top-2'} sm:top-0 bg-origin-content h-[1287px] sm:h-[1145px] lg:h-[1250px] xl:h-[1249px]`} />
        <div className="container section-container w-full mx-auto flex-col min-h-[1276px] sm:min-h-[1144px] lg:min-h-[1250px]">
          <Intro locale={locale} />
          <OurSteps locale={locale} />
        </div>
        <div className="container section-container w-full flex justify-center">
          <CustomNextLink to={`/${locale}/about-us`}>
            <h2 className="text-3xl lg:text-5xl font-black font-sofia leading-6 lg:leading-8 tracking-[0.06em] lg:tracking-[0.12em]">
                #Digital <span className="text-outlined--purple tracking-[0.08em] lg:tracking-[0.12em]" data-content="Sherpas">Sherpas</span>
            </h2>
          </CustomNextLink>
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
  
