import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "@/common/lib/i18n";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import MissionAndVision from "@/modules/MissionAndVision";
import TransitionWrapper from "@/common/components/TransitionWrapper";
import Teams from "@/modules/Teams";
import OurValues from "@/modules/OurValues";

export default function AboutUs({ locale }) {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t("metaTags.aboutUs.title"),
          description: t("metaTags.aboutUs.description"),
          keywords: t("metaTags.aboutUs.keywords"),
        }}
      />
      <TransitionWrapper className="section-container w-full container mx-auto flex-col space-y-[72px]">
        <Teams locale={locale} />
        <MissionAndVision locale={locale} />
        <OurValues locale={locale} />
      </TransitionWrapper>
    </>
  );
}

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
