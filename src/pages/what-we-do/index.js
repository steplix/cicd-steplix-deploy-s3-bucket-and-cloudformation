import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "next-export-i18n";
import Intro from "@/modules/what-we-do/Intro";
import OurSteps from "@/modules/what-we-do/OurSteps";
import HowDoWeDoIt from "@/modules/what-we-do/HowWeDoIt";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <HeadTag
        title={t("metaTags.whatWeDo.title")}
        description={t("metaTags.whatWeDo.description")}
        keywords={t("metaTags.whatWeDo.keywords")}
      />
      <div className="w-full relative h-[fit-content]">
        <div className="w-full bg-what-we-do-steps sm:bg-what-we-do-steps-sm lg:bg-what-we-do-steps-lg xl:bg-what-we-do-steps-xl bg-no-repeat bg-contain bg-center top-[340px] md:top-[300px] bg-origin-content absolute h-[1080px] sm:h-[1030px] lg:h-[1120px] xl:h-[1160px] xl:left-[70px]" />
        <div className="py-10 px-4 sm:px-0 w-full container mx-auto flex-col">
          <Intro />
          <OurSteps />
          <HowDoWeDoIt />
        </div>
      </div>
    </>
  );
}
