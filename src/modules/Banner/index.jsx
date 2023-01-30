import ButtonPortfolio from "@/common/components/ButtonRaise";
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
    <>
      <div className="block lg:hidden">
        <div className="banner relative w-auto h-[288px] sm:h-[449px] flex flex-col items-center mb-12">
          <img
            src="/assets/img/home/mockup-xs.png"
            alt="Image screen"
            className="w-[328px] h-[256px] sm:w-[561px] sm:h-[417px]"
          />
          <div className="container flex justify-end">
            <div className="flex justify-end items-center space-x-3 w-[125px] h-[32px]">
              <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
                <a className="text-blue text-xs font-bold leading-[15.6px] font-poppins">
                  {t("PortfolioHomeSection.title")}
                </a>
              </CustomNextLink>
              <Icon name="chevronRight" className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="banner relative w-auto h-[596px] xl:h-[639px] flex justify-center items-end">
          <img
            src="/assets/img/home/mockup-xs.png"
            alt="Image screen"
            className="h-auto w-9/12 xl:w-[809px]"
          />
          <div className="pb-20 flex flex-col items-center">
            <HomeLineBanner className="relative top-[-17px] -left-4 w-[265.76px] h-[362.84px] xl:w-[356.48px] xl:h-[392.12px] origin-center transform -rotate-12" />
            <ButtonPortfolio
              locale={locale}
              customStyles="h-[37px] w-[159px]"
              i18nKeyText={"PortfolioHomeSection.title"}
              pathname="/portfolio"
            />
          </div>
        </div>
      </div>
    </>
    // <div className="z-[-1] mb-9">
    //   <div className="banner relative h-[1000px] z-[-1] ">
    //     <img
    //       src="/assets/img/home/Mockup.png"
    //       alt="Image screen"
    //       className="h-auto w-9/12 inset-0 absolute z-[-1]"
    //     />
    //     <div className="w-3/12 absolute top-[15%] right-[5%] z-[-1]">
    //       <HomeLineBanner />
    //       <div className="absolute">
    //         <ButtonCard
    //           label={t("PortfolioHomeSection.title")}
    //           iconName="calendar"
    //           customImageClass="w-4"
    //           clickEvent={() => onClick(`/${i18nQuery?.lang}/portfolio`)}
    //           iconPosition="right"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
