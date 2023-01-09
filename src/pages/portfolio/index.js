import Gradient from "@/common/components/Title/Gradient";
import CardIcon from "@/common/components/CardIcon";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import TestimonialCard from "@/common/components/TestimonialCard";
import PortfolioCarousel from "@/common/components/PortfolioCarousel";
import PortfolioCard from "@/common/components/PortfolioCard";
import { useTranslation } from "next-export-i18n";
import { usePortfolioTranslation } from "@/common/hooks/usePortfolioTranslation";
import { repeatImageLogos } from "@/common/utils/methods";
import { PORTFOLIO_CARDS, SPACE_BETWEEN_CARDS } from "@/common/utils/constants";
import { clientsLogos } from "@/common/utils/constants";

const PortfolioView = () => {
  const { t } = useTranslation();
  const { clients, industries } = usePortfolioTranslation();

  return (
    <section className="flex flex-col relative py-0 pb-[72px] lg:pt-10 px-0 w-full mx-auto">
      <main className="container px-4 pt-12 ">
        <PortfolioCarousel carouselClassName={"portfolioCarousel"}>
          {PORTFOLIO_CARDS.map(({ name, industryIconName }, index) => {
            return (
              <PortfolioCard
                name={name}
                industryIconName={industryIconName}
                iconBrandClass="w-32"
                key={index}
              />
            );
          })}
        </PortfolioCarousel>
        <div className="mt-[72px] flex flex-col gap-4">
          <Gradient
            borderPosition="left"
            content={t("PortfolioSection.subtitle")}
            borderWidth="border-2"
            size="text-4xl"
            height="h-[32px]"
          />
          <p>{t("PortfolioSection.parraf1")}</p>
        </div>

        <div className="mx-auto w-full my-7 gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
          {industries.map((industry) => (
            <CardIcon
              key={industry.text}
              iconName={industry.icon}
              text={industry.text}
            />
          ))}
        </div>

        <article className="mt-[72px] flex flex-col gap-8">
          <Gradient
            borderPosition="left"
            content={t("PortfolioSection.subtitle2")}
            borderWidth="border-2"
            size="text-4xl"
            height="h-[32px]"
          />
          <div className="flex justify-center">
            <PortfolioCarousel carouselClassName={"clientsCarousel"}>
              {clients.map((client) => (
                <div
                  key={client.companyName}
                  className="keen-slider__slide number-slide"
                >
                  <TestimonialCard
                    clientImageUrl={client?.image}
                    imageAlt={`${client?.companyName} logo`}
                    clientPosition={client?.position}
                    clientFirstName={client?.name}
                    clientLastName={client?.lastName}
                    clientOpinion={client?.text}
                    clientCompany={client?.companyName}
                    textColor={client.textColor}
                  />
                </div>
              ))}
            </PortfolioCarousel>
          </div>
        </article>
        <article className="mt-[56px]">
          <TechnologiesSlider
            images={repeatImageLogos(clientsLogos, 20)}
            slides={8}
            imgClass="w-24"
            spacingBetweenSlides={SPACE_BETWEEN_CARDS}
          />
        </article>
      </main>
    </section>
  );
};

export default PortfolioView;
