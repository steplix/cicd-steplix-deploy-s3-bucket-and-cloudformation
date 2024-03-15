import HeadTag from '@/common/components/HeadTag';
import { useTranslation } from '@/common/lib/i18n';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import Intro from '@/modules/what-we-do/Intro';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { WhatWeDoCard } from '@/common/components/WhatWeDoCard/indext';

export default function WhatWeDo({ locale }) {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.whatWeDo.title'),
          description: t('metaTags.whatWeDo.description'),
          keywords: t('metaTags.whatWeDo.keywords'),
        }}
      />
      <TransitionWrapper className="w-full h-full relative flex flex-col">
        <div className="container section-container w-full mx-auto flex-col min-h-[1276px] sm:min-h-[1144px] lg:min-h-[1250px]">
          <Intro locale={locale} />
          <div className="mt-10">
            <WhatWeDoCard />
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}

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
