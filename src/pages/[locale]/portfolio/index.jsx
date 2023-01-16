import Gradient from "@/common/components/Title/Gradient";
import HeadTag from "@/common/components/HeadTag";
import CardIcon from "@/common/components/CardIcon";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import TestimonialCard from "@/common/components/TestimonialCard";
import PortfolioCarousel from "@/common/components/PortfolioCarousel";
import PortfolioCard from "@/common/components/PortfolioCard";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { useTranslation } from "@/common/lib/i18n";
import { usePortfolioTranslation } from "@/common/hooks/usePortfolioTranslation";
import { repeatImageLogos } from "@/common/utils/methods";
import {
  PORTFOLIO_CARDS,
  SPACE_BETWEEN_CARDS,
  clientsLogos,
} from "@/common/utils/constants";

const PortfolioView = ({ locale }) => {
  const { t } = useTranslation(locale);
  const { clients, industries } = usePortfolioTranslation();

  return (
    <>
    <HeadTag title={t("metaTags.portfolio.title")} description={t("metaTags.portfolio.description")} keywords={t("metaTags.portfolio.keywords")} />
    <section className="flex flex-col relative w-full mx-auto">
      <main className="container section-container">
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
            spacingBeetWeenSlides={SPACE_BETWEEN_CARDS}
          />
        </article>
      </main>
    </section>
    </>
  );
};

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

export default PortfolioView;