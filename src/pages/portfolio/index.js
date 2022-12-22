import Inverted from "@/common/components/Title/Inverted";
import Gradient from "@/common/components/Title/Gradient";
import CardIcon from "@/common/components/CardIcon";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import TestimonialCard from "@/common/components/TestimonialCard";
import { useResponsive } from "@/common/hooks/useResponsive";
import { useTranslation } from "next-export-i18n";
import { usePortfolioTranslation } from "@/common/hooks/usePortfolioTranslation";
import { repeatImageLogos } from "@/common/utils/methods";

const imageLogos = [
  {
    image: "assets/img/clients/web3/logo-pow.svg",
    alt: "POW Logo",
  },
  {
    image: "assets/img/clients/web3/logo-valid.svg",
    alt: "Valid Logo",
  },
  {
    image: "assets/img/clients/web3/logo-finket.svg",
    alt: "Finket Logo",
  },
];

const PortfolioView = () => {
  const { t } = useTranslation();
  const { clients, industries } = usePortfolioTranslation();
  const { width } = useResponsive();
  const BREAKPOINT_WIDTH = 1024;

  return (
    <section className="flex flex-col relative py-0 pb-[72px] lg:pt-10 px-0 w-full mx-auto">
      {width < BREAKPOINT_WIDTH && (
        <div className="header-gradient flex">
          <div className="container py-8 px-4">
            <Inverted
              content={t("PortfolioSection.pronoun")}
              secondContent={t("PortfolioSection.title")}
              size="text-5xl"
            />
          </div>
        </div>
      )}
      <main className="container px-4 py-8 ">
        <div className="w-1/2 my-0 mx-auto border-2 rounded-2xl h-80 grid place-content-center">
          Carrousel Finket
        </div>
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
            {clients.map((client) => (
              <TestimonialCard
                key={client.name}
                clientPosition={client.position}
                clientCompany={client.companyName}
                clientFirstName={client.name}
                clientLastName={client.lastName}
                clientOpinion={client.text}
                clientImageUrl={client.image}
                imageAlt={client.alt}
                textColor={client.borderColor}
              />
            ))}
          </div>
        </article>
        <article className="mt-[72px]">
          <TechnologiesSlider
            images={repeatImageLogos(imageLogos, 20)}
            slides={8}
            imgClass="w-24"
            spacingBeetWeenSlides={10}
          />
        </article>
      </main>
    </section>
  );
};

export default PortfolioView;
