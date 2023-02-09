import ButtonPortfolio from "@/common/components/ButtonRaise";
import HomeLineBanner from "@/common/components/Icon/icons/HomeLineBanner";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

const Banner = () => {
  const { query: { locale } } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);

  return (
    <>
      <div className="banner xl:container w-auto h-[288px] sm:h-[449px] lg:h-[596px] flex flex-col items-center">
        <div className="container relative w-full h-full">
            <picture className='w-full max-w-[328px] sm:max-w-[561px] lg:max-w-[714px] xl:max-w-[834px] absolute top-0 left-2/4 transform -translate-x-2/4 lg:left-[5%] lg:translate-x-0 mx-auto'>
            <source media="(min-width: 1280px)" srcSet="/assets/img/home/mockup-xl.png" />
            <source media="(min-width: 1024px)" srcSet="/assets/img/home/mockup-lg.png" />
            <source media="(min-width: 640px)" srcSet="/assets/img/home/mockup-sm.png" />
              <img
              src="/assets/img/home/mockup-base.png"
              alt="Image screen"
              />
          </picture>
          <div className="flex flex-col max-w-[300px] sm:max-w-[475px] lg:max-h-[none] w-full h-full relative lg:static items-center mx-auto">
              <HomeLineBanner />
              <ButtonPortfolio
                locale={i18nQuery?.lang}
                customStyles="!absolute bottom-0 right-0 lg:bottom-24 lg:right-24 xl:bottom-6 xl:right-0 h-[37px] w-fit"
                i18nKeyText={"PortfolioHomeSection.title"}
                pathname="/portfolio"
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
