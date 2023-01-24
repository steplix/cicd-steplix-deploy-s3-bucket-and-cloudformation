import ButtonCard from "@/common/components/ButtonCard";
import CustomNextLink from "@/common/components/CustomNextLink";
import Icon from "@/common/components/Icon";
import HomeLineBanner from "@/common/components/Icon/icons/HomeLineBanner";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

const Banner = () => {
  const {
    query: { locale },
    push,
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className="z-[-1] mb-9">
      <div className="banner relative h-[1000px] z-[-1] ">
        <img
          src="/assets/img/home/Mockup.png"
          alt="Image screen"
          className="h-auto w-9/12 inset-0 absolute z-[-1]"
        />
        <div className="w-3/12 absolute top-[15%] right-[5%] z-[-1]">
          <HomeLineBanner />
          <div className="absolute">
            <ButtonCard
              label={t("PortfolioHomeSection.title")}
              iconName="calendar"
              customImageClass="w-4"
              clickEvent={() => onClick(`/${i18nQuery?.lang}/portfolio`)}
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
